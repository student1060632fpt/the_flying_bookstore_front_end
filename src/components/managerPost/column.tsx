import { Chip, Rating } from "@mui/material";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from "@mui/x-data-grid";
import { formatCurrency } from "../../utils/helps";
import { CiEdit, CiTrash } from "react-icons/ci";
import theme from "../../utils/theme";
import { CiCircleInfo } from "react-icons/ci";
import Link from "next/link";
import { IBook, ICopy } from "../../types/book";

export interface IRowsPost2 {
  id: number;
  title: string;
  authors: IBook["authors"];
  leaseRate: number;
  depositFee: number;
  penaltyRate: number;
}
interface IRowDraft {
  id: number;
  ownerId: number;
  quantity: number;
  address: string;
  expiryDate: null | string;
  leaseRate: number;
  depositFee: number;
  penaltyRate: number;
  description: string;
  copy: ICopy;
  book: IBook;
}
export const convertDataToIRow = (data: IRowDraft[]) => {
  if (!data) return [];
  return data.map((item) => {
    const {
      book: { authors, title },
      leaseRate,
      depositFee,
      penaltyRate,
      id,
    } = item;
    const result: IRowsPost2 = {
      id,
      title,
      authors,
      leaseRate,
      depositFee,
      penaltyRate,
    };
    return result;
  });
};

export const columnsPost = (
  handleClickOpen: (arg: IRowsPost2) => void
): GridColDef<IRowsPost2>[] => {
  return [
    {
      field: "id",
      headerName: "Id bài đăng",
      width: 100,
      editable: false,
    },
    {
      field: "title",
      headerName: "Tên bài đăng",
      width: 100,
      editable: false,
    },
    {
      headerName: "Tác giả",
      field: "authors",
      editable: false,
      width: 150,
    },
    {
      headerName: "Giá thuê",
      editable: false,
      field: "leaseRate",
      width: 150,
      valueGetter: (value: number) => `${formatCurrency(value)}/ngày`,
    },
    {
      headerName: "Tiền cọc",
      editable: false,
      field: "depositFee",
      width: 150,
      valueGetter: (value: number) => `${formatCurrency(value)}/ngày`,
    },

    {
      headerName: "Tiền phạt",
      editable: false,
      field: "penaltyRate",
      width: 150,
      valueGetter: (value: number) => `${formatCurrency(value)}/ngày`,
    },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: (params: GridRowParams<IRowsPost2>) => [
        <Link href={`/detail/${params?.row?.id}`} key="1">
          <GridActionsCellItem
            icon={<CiCircleInfo size={20} />}
            label="Edit"
            size="large"
          />
        </Link>,
        <GridActionsCellItem
          icon={<CiTrash size={20} color={theme.palette.error.main} />}
          key="2"
          label="Toggle Admin"
          size="large"
          onClick={() => handleClickOpen(params?.row)}
        />,
      ],
    },
  ];
};
