import React, { useContext } from 'react';
import MaterialTable from 'material-table';
import uuid from 'react-uuid';
import { GlobalContext } from '../../context/GlobalState';
import * as Cst from '../../constants';

export default function DataEditor() {
  const {
    windowDimensions,
    routes,
    addRoute,
    editRoute,
    deleteRoute,
  } = useContext(GlobalContext);

  return (
    <MaterialTable
      title=""
      columns={
        windowDimensions.width > Cst.screenMdWidth
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
            setTimeout(() => {
              if (newData.to && newData.from) {
                if (!newData.cat) {
                  newData.cat = 'Other';
                }
                newData.id = uuid();
                fetch(Cst.airportAPI + newData.from)
                  .then((response) => response.json())
                  .then((data) => {
                    newData.fromCoordLat = data.latitude_deg;
                    newData.fromCoordLong = data.longitude_deg;
                  });
                fetch(Cst.airportAPI + newData.to)
                  .then((response) => response.json())
                  .then((data) => {
                    newData.toCoordLat = data.latitude_deg;
                    newData.toCoordLong = data.longitude_deg;
                  });
                addRoute(newData);
              } else {
                console.log(
                  'Unable to insert new data because destination or departure airport is missing.'
                );
              }
              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              if (oldData.from !== newData.from) {
                fetch(Cst.airportAPI + newData.from)
                  .then((response) => response.json())
                  .then((data) => {
                    newData.fromCoordLat = data.latitude_deg;
                    newData.fromCoordLong = data.longitude_deg;
                  });
              }
              if (oldData.to !== newData.to) {
                fetch(Cst.airportAPI + newData.to)
                  .then((response) => response.json())
                  .then((data) => {
                    newData.toCoordLat = data.latitude_deg;
                    newData.toCoordLong = data.longitude_deg;
                  });
              }
              editRoute(newData);
              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              deleteRoute(oldData.id);
              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
