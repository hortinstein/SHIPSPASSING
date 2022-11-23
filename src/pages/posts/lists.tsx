import React from "react";
import {
  useDataGrid,
  DataGrid,
  GridColumns,
  TagField,
  DateField,
  List,
} from "@pankod/refine-mui";

import { IShip } from "interfaces";

const columns: GridColumns<IShip> = [
  {
    field: "epoch",
    headerName: "Epoch",
    minWidth: 75,
    flex: 1,
    renderCell: function render(params) {
      return <TagField value={params.row.epoch} />;
    },
  },
  {
    field: "datestring",
    headerName: "Date",
    minWidth: 75,
    flex: 1,
    renderCell: function render(params) {
      return <TagField value={params.row.datestring} />;
    },
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 75,
    flex: 1,
    renderCell: function render(params) {
      return <TagField value={params.row.name} />;
    },
  },
  {
    field: "population",
    headerName: "Population",
    minWidth: 75,
    renderCell: function render(params) {
      console.log(params);
      return <TagField value={params.row.population} />;
    },
  },
];

export const PostList: React.FC = () => {
  const { dataGridProps } = useDataGrid<IShip>();

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
