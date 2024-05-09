import { Chip, Rating } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { formatCurrency } from "../../utils/helps";
import { CiEdit, CiTrash } from "react-icons/ci";
import theme from "../../utils/theme";

export const rowsPost = [
  {
    id: 1,
    status: 1,
    title: "Snow",
    date: "13/03/2024",
    price: 1400,
    rate: 3.5,
  },
  {
    id: 2,
    status: 0,
    title: "Lannister",
    date: "13/03/2024",
    price: 3100,
    rate: 4,
  },
  {
    id: 3,
    status: 1,
    title: "Lannister",
    date: "13/03/2024",
    price: 3100,
    rate: 5,
  },
  {
    id: 4,
    status: 0,
    title: "Stark",
    date: "13/03/2024",
    price: 1100,
    rate: 4,
  },
  {
    id: 5,
    status: 1,
    title: "Targaryen",
    date: "13/03/2024",
    price: 1000,
    rate: 4,
  },
  {
    id: 6,
    status: 0,
    title: "Melisandre",
    date: "13/03/2024",
    price: 15000,
    rate: 3,
  },
  {
    id: 7,
    status: 1,
    title: "Clifford",
    date: "13/03/2024",
    price: 4400,
    rate: 3,
  },
  {
    id: 8,
    status: 0,
    title: "Frances",
    date: "13/03/2024",
    price: 3600,
    rate: 2,
  },
  {
    id: 9,
    status: 1,
    title: "Roxie",
    date: "13/03/2024",
    price: 6500,
    rate: 1,
  },
];
function renderRating(params: any) {
  return <Rating precision={0.5} readOnly value={params.value} />;
}
const renderStatus = (params: any) => {
  console.log(params);

  if (params.row.status == 0) {
    return <Chip label="Đã đăng" color="secondary" />;
  }
  return <Chip label="Đã có người thuê" color="primary" />;
};
export const columnsPost = (handleClickOpen:()=>void): GridColDef<{ id: number; status: number; title: string; date: string; price: number; rate: number; }>[] => {
  return [
    {
      field: "title",
      headerName: "Tên bài đăng",
      width: 100,
      editable: true,
    },
    {
      field: "date",
      headerName: "Ngày đăng",
      width: 100,
      editable: true,
    },
    {
      field: "rate",
      headerName: "Đánh giá",
      renderCell: renderRating,
      display: "flex" as const,
      width: 150,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 150,
      renderCell: renderStatus,
    },
    {
      headerName: "Giá thuê",
      field: "price",
      width: 150,
      valueGetter: (value:number) => `${formatCurrency(value)}đ/ngày`,
    },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: () => [
        <GridActionsCellItem
          icon={<CiEdit size={20} />}
          label="Delete"
          key="1"
          size="large"
        />,
        <GridActionsCellItem
          icon={<CiTrash size={20} color={theme.palette.error.main} />}
          key="2"
          label="Toggle Admin"
          size="large"
          onClick={handleClickOpen}
        />,
      ],
    },
  ]
};