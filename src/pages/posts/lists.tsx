import React from "react";
import {
  useDataGrid,
  DataGrid,
  GridColumns,
  TagField,
  ShowButton,
  DateField,
  List,
} from "@pankod/refine-mui";

import { IShip } from "interfaces";

const columns: GridColumns<IShip> = [
  {
    field: "epoch",
    headerName: "Epoch",
    minWidth: 175,
    flex: 1,
    renderCell: function render(params) {
      return <TagField value={params.row.epoch} />;
    },
  },
  {
    field: "datestring",
    headerName: "Date",
    minWidth: 175,
    flex: 1,
    renderCell: function render(params) {
      return <TagField value={params.row.datestring} />;
    },
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 175,
    flex: 1,
    renderCell: function render(params) {
      return <TagField value={params.row.name} />;
    },
  },
  {
    field: "population",
    headerName: "Population",
    minWidth: 175,
    renderCell: function render(params) {
      console.log(params);
      return <TagField value={params.row.population} />;
    },
  },
  {
    headerName: "Actions",
    field: "actions",
    minWidth: 250,
    renderCell: function render(params) {
      return <ShowButton hideText recordItemId={params.row.id} />;
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
