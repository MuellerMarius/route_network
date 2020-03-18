import React, { useContext } from "react";
import MaterialTable from "material-table";
import { GlobalContext } from "../context/GlobalState";

export default function DataEditor() {
  const { routes, addRoute, editRoute, deleteRoute } = useContext(
    GlobalContext
  );

  return (
    <MaterialTable
      title="Routes"
      columns={[
        { title: "Departure Airport", field: "from" },
        { title: "Destination Airport", field: "to" },
        { title: "Category", field: "cat" }
      ]}
      data={routes}
      options={{
        pageSize: 8,
        pageSizeOptions: [8],
        draggable: false,
        headerStyle: {
          backgroundColor: "#f9f9f9",
          fontWeight: 700
        }
      }}
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
                addRoute(newData);
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
