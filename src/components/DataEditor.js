import React, { useContext } from "react";
import MaterialTable from "material-table";
import { GlobalContext } from "../context/GlobalState";

export default function DataEditor() {
  const { routes } = useContext(GlobalContext);

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
    />
  );
}
