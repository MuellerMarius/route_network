import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import MaterialTable, { MTableAction, MTableToolbar } from 'material-table';
import { Paper } from '@material-ui/core';
import uuid from 'react-uuid';
import { GlobalContext } from '../../context/GlobalState';
import * as Cst from '../../constants';
import './style.scss';

const DataEditor = ({ dimensions, addActionRef }) => {
  const { routes, addRoute, editRoute, deleteRoute } = useContext(
    GlobalContext
  );

  const handleHttpErrors = (response) => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response;
  };

  const insertData = (newData) =>
    new Promise((resolve, reject) => {
      const newEntry = newData;
      newEntry.from = newEntry.from.toUpperCase();
      newEntry.to = newEntry.to.toUpperCase();

      if (newEntry.to && newEntry.from) {
        newEntry.id = uuid();

        if (!newEntry.cat) {
          newEntry.cat = 'Other';
        }

        Promise.all(
          [Cst.airportAPI + newEntry.from, Cst.airportAPI + newEntry.to].map(
            (url) =>
              fetch(url)
                .then(handleHttpErrors)
                .then((res) => res.json())
          )
        )
          .then((data) => {
            newEntry.fromCoordLat = data[0].latitude_deg;
            newEntry.fromCoordLong = data[0].longitude_deg;
            newEntry.toCoordLat = data[1].latitude_deg;
            newEntry.toCoordLong = data[1].longitude_deg;
            addRoute(newEntry);
            resolve();
          })
          .catch(() => {
            reject();
            alert(
              'Unable to insert new data because destination or departure airport is unknown.'
            );
          });
      } else {
        alert(
          'Unable to insert new data because destination or departure airport is missing.'
        );
        reject();
      }
    });

  const updateData = (newData, oldData) =>
    new Promise((resolve, reject) => {
      const requests = [];
      const newEntry = newData;
      newEntry.from = newEntry.from.toUpperCase();
      newEntry.to = newEntry.to.toUpperCase();
      let indexFrom = -1;
      let indexTo = -1;

      if (!newEntry.cat) {
        newEntry.cat = 'Other';
      }

      if (oldData.from !== newEntry.from) {
        requests.push(Cst.airportAPI + newEntry.from);
        indexFrom = 0;
      }
      if (oldData.to !== newEntry.to) {
        requests.push(Cst.airportAPI + newEntry.to);
        indexTo = indexFrom + 1;
      }

      if (requests.length > 0) {
        Promise.all(
          requests.map((url) =>
            fetch(url)
              .then(handleHttpErrors)
              .then((res) => res.json())
          )
        )
          .then((data) => {
            if (indexFrom >= 0) {
              newEntry.fromCoordLat = data[indexFrom].latitude_deg;
              newEntry.fromCoordLong = data[indexFrom].longitude_deg;
            }

            if (indexTo >= 0) {
              newEntry.toCoordLat = data[indexTo].latitude_deg;
              newEntry.toCoordLong = data[indexTo].longitude_deg;
            }

            editRoute(newEntry);
            resolve();
          })
          .catch(() => {
            reject();
            alert(
              'Unable to insert new data because changed airport is unknown.'
            );
          });
      } else {
        editRoute(newEntry);
        resolve();
      }
    });

  const deleteRow = (oldData) =>
    new Promise((resolve) => {
      deleteRoute(oldData.id);
      resolve();
    });

  return (
    <MaterialTable
      title=""
      columns={
        dimensions.width > Cst.screenMdWidth
          ? Cst.tableColumnsLong
          : Cst.tableColumnsShort
      }
      data={routes}
      options={Cst.tableOptions}
      editable={{
        isEditable: () => true,
        isDeletable: () => true,
        onRowAdd: (newData) => insertData(newData),
        onRowUpdate: (newData, oldData) => updateData(newData, oldData),
        onRowDelete: (oldData) => deleteRow(oldData),
      }}
      components={{
        Container: (props) => <Paper {...props} elevation={1} />,
        Toolbar: (props) => <MTableToolbar {...props} />,
        Action: (props) => {
          if (
            typeof props.action === typeof Function ||
            props.action.tooltip !== 'Add'
          ) {
            return <MTableAction {...props} />;
          } else {
            return <div ref={addActionRef} onClick={props.action.onClick} />;
          }
        },
      }}
    />
  );
};

export default DataEditor;

DataEditor.propTypes = {
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
  }).isRequired,
};
