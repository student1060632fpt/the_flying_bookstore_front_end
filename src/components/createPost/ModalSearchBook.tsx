"use client";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useStoreBook } from "@/hooks/choosenBook";
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:8082/api/book",
  headers: {},
};
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export type IBook = {
  id: number;
  isbn: string;
  title: string;
  authors: string[];
  languageCode: string;
  genre: string[];
  publisher: string;
  publishedDate: string;
  pageCount: number;
  size: string;
};
export default function ModalSearchBook({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [value, setValue] = useState<IBook | null | undefined>();
  const [isNew, setIsNew] = useState(false);
  const [listBook, setListBook] = useState<Array<IBook>>([]);
  const getBookTitle = (book: IBook) => book.title;
  const getBookKey = (book: IBook) => book.id;
  const { updateBook, bookChoosen } = useStoreBook();
  useEffect(() => {
    if (bookChoosen) {
      setIsNew(false);
    } else {
      setIsNew(true);
    }
  }, [bookChoosen]);

  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        if (response?.data) setListBook(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeAutoComplete = (
    event: React.ChangeEvent<{}>,
    newValue: IBook | null
  ) => {
    updateBook(newValue);
    setValue(newValue);
  };
  const renderSearchBook = () => {
    if (isNew) return <></>;
    return (
      <Autocomplete
        open={true}
        value={value}
        onChange={onChangeAutoComplete}
        onSelect={() => setIsNew(false)}
        disablePortal
        id="combo-box-demo"
        options={listBook}
        getOptionLabel={getBookTitle}
        getOptionKey={getBookKey}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="Chọn sách" variant="standard" />
        )}
      />
    );
  };
  return (
    <React.Fragment>
      <BootstrapDialog
        fullScreen
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Tìm sách
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                checked={!isNew}
                value="already"
                control={<Radio />}
                label="Chọn sách hiện có"
                onClick={() => setIsNew(false)}
              />
              <FormControlLabel
                checked={isNew}
                value="isNew"
                control={<Radio />}
                label="Thêm sách mới"
                onClick={() => {
                  updateBook(null);
                  setIsNew(true);
                }}
              />
            </RadioGroup>
          </FormControl>
          {renderSearchBook()}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Lưu
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
