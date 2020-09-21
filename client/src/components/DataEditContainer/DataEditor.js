import React, { useContext } from 'react';
import MaterialTable from 'material-table';
import uuid from 'react-uuid';
import { GlobalContext } from '../../context/GlobalState';
import * as Cst from '../../constants';
import './style.scss';

export default function DataEditor({ dimensions }) {
  const { routes, addRoute, editRoute, deleteRoute } = useContext(
    GlobalContext,
  );

  function handleHttpErrors(response) {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response;
  }

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
        isEditable: (rowData) => true,
        isDeletable: (rowData) => true,
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            newData.from = newData.from.toUpperCase();
            newData.to = newData.to.toUpperCase();

            if (newData.to && newData.from) {
              newData.id = uuid();

              if (!newData.cat) {
                newData.cat = 'Other';
              }

              Promise.all(
                [
                  Cst.airportAPI + newData.from,
                  Cst.airportAPI + newData.to,
                ].map((url) =>
                  fetch(url)
                    .then(handleHttpErrors)
                    .then((res) => res.json()),
                ),
              )
                .then((data) => {
                  newData.fromCoordLat = data[0].latitude_deg;
                  newData.fromCoordLong = data[0].longitude_deg;
                  newData.toCoordLat = data[1].latitude_deg;
                  newData.toCoordLong = data[1].longitude_deg;
                  addRoute(newData);
                  resolve();
                })
                .catch((err) => {
                  reject();
                  alert(
                    'Unable to insert new data because destination or departure airport is unknown.',
                  );
                });
            } else {
              alert(
                'Unable to insert new data because destination or departure airport is missing.',
              );
              reject();
            }
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            newData.from = newData.from.toUpperCase();
            newData.to = newData.to.toUpperCase();
            let indexFrom = -1,
              indexTo = -1;
            let requests = [];

            if (!newData.cat) {
              newData.cat = 'Other';
            }

            if (oldData.from !== newData.from) {
              requests.push(Cst.airportAPI + newData.from);
              indexFrom = 0;
            }
            if (oldData.to !== newData.to) {
              requests.push(Cst.airportAPI + newData.to);
              indexTo = indexFrom + 1;
            }

            if (requests.length > 0) {
              Promise.all(
                requests.map((url) =>
                  fetch(url)
                    .then(handleHttpErrors)
                    .then((res) => res.json()),
                ),
              )
                .then((data) => {
                  if (indexFrom >= 0) {
                    newData.fromCoordLat = data[indexFrom].latitude_deg;
                    newData.fromCoordLong = data[indexFrom].longitude_deg;
                  }

                  if (indexTo >= 0) {
                    newData.toCoordLat = data[indexTo].latitude_deg;
                    newData.toCoordLong = data[indexTo].longitude_deg;
                  }

                  editRoute(newData);
                  resolve();
                })
                .catch((err) => {
                  reject();
                  alert(
                    'Unable to insert new data because changed airport is unknown.',
                  );
                });
            } else {
              editRoute(newData);
              resolve();
            }
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            deleteRoute(oldData.id);
            resolve();
          }),
      }}
    />
  );
}
