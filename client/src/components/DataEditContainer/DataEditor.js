// Disabling linting rules neccessary because of props
// in <MaterialTable> attributes
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable, { MTableAction, MTableToolbar } from 'material-table';
import uuid from 'react-uuid';
import useGlobalContext from '../../context/GlobalState';
import useMedia from '../../util/useMedia';
import * as Cst from '../../constants';
import * as actionType from '../../context/actions';
import './style.scss';

const handleHttpErrors = (response) => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
};

const DataEditor = ({ addActionRef }) => {
  const isMdScreen = useMedia(`(min-width: ${Cst.screenMdWidth}px)`);
  const { routes, dispatch } = useGlobalContext();

  const insertData = (newData) =>
    new Promise((resolve, reject) => {
      if (!newData.to || !newData.from) {
        alert('Destination or departure airport is missing');
        reject();
        return;
      }

      const newEntry = newData;
      newEntry.from = newEntry.from.toUpperCase();
      newEntry.to = newEntry.to.toUpperCase();
      newEntry.id = uuid();

      if (!newEntry.cat) {
        newEntry.cat = 'Other';
      }

      Promise.all(
        [Cst.airportAPI + newEntry.from, Cst.airportAPI + newEntry.to].map(
          (url) =>
            fetch(url)
              .then(handleHttpErrors)
              .then((res) => res.json()),
        ),
      )
        .then((data) => {
          newEntry.fromCoordLat = data[0].latitude_deg;
          newEntry.fromCoordLong = data[0].longitude_deg;
          newEntry.toCoordLat = data[1].latitude_deg;
          newEntry.toCoordLong = data[1].longitude_deg;

          dispatch({ type: actionType.ADD_ROUTE, data: newEntry });
          resolve();
        })
        .catch(() => {
          alert('Destination or departure airport is unknown.');
          reject();
        });
    });

  const updateData = (newData, oldData) =>
    new Promise((resolve, reject) => {
      const requests = [];
      const newEntry = newData;
      newEntry.from = newEntry.from.toUpperCase();
      newEntry.to = newEntry.to.toUpperCase();

      if (!newEntry.cat) {
        newEntry.cat = 'Other';
      }

      if (oldData.from !== newEntry.from) {
        requests.push(Cst.airportAPI + newEntry.from);
      }
      if (oldData.to !== newEntry.to) {
        requests.push(Cst.airportAPI + newEntry.to);
      }

      if (requests.length === 0) {
        dispatch({ type: actionType.EDIT_ROUTE, data: newEntry });
        resolve();
        return;
      }

      Promise.all(
        requests.map((url) =>
          fetch(url)
            .then(handleHttpErrors)
            .then((res) => res.json()),
        ),
      )
        .then((data) => {
          data.forEach((airport) => {
            if (airport.ident === newEntry.from) {
              newEntry.fromCoordLat = airport.latitude_deg;
              newEntry.fromCoordLong = airport.longitude_deg;
            }
            if (airport.ident === newEntry.to) {
              newEntry.toCoordLat = airport.latitude_deg;
              newEntry.toCoordLong = airport.longitude_deg;
            }
          });

          dispatch({ type: actionType.EDIT_ROUTE, data: newEntry });
          resolve();
        })
        .catch(() => {
          alert('Changed airport is unknown.');
          reject();
        });
    });

  const deleteRow = (oldData) =>
    new Promise((resolve) => {
      dispatch({ type: actionType.DEL_ROUTE, data: oldData.id });
      resolve();
    });

  return (
    <MaterialTable
      title=""
      columns={isMdScreen ? Cst.tableColumnsLong : Cst.tableColumnsShort}
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
        Toolbar: (props) => (
          <div style={{ display: 'none' }}>
            <MTableToolbar {...props} />
          </div>
        ),
        // Add ref to add-action to be able to display button in left menu
        Action: (props) => {
          if (
            typeof props.action === typeof Function ||
            props.action.tooltip !== 'Add'
          ) {
            return <MTableAction {...props} />;
          }
          return <div ref={addActionRef} onClick={props.action.onClick} />;
        },
      }}
    />
  );
};

export default DataEditor;

DataEditor.propTypes = {
  addActionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
