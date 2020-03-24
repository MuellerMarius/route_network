import React, { useContext } from "react";
import MaterialTable from "material-table";
import { GlobalContext } from "../context/GlobalState";
import * as Constants from "../constants";

export default function DataEditor() {
  const { routes, addRoute, editRoute, deleteRoute } = useContext(
    GlobalContext
  );

  return (
    <MaterialTable
      title="Routes"
      columns={Constants.tableColumns}
      data={routes}
      options={Constants.tableOptions}
      editable={{
        isEditable: rowData => true,
        isDeletable: rowData => true,
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              if (newData.to && newData.from) {
                if (!newData.cat) {
                  newData.cat = "Other";
                }
                // TODO: fetch coordinates and assign ID
                // let a = airports.find(ap => ap.ident === "CYCK");
                // console.log(a);
                // newData.fromCoordLat = lat;
                addRoute(newData);
              } else {
                // TODO: display error message
              }
              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              editRoute(newData);
              resolve();
            }, 1000);
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              deleteRoute(oldData.id);
              resolve();
            }, 1000);
          })
      }}
    />
  );
}
