"use client";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
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
import { listBookDummie } from "./dummy";
import { useFormContext } from "react-hook-form";
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
type Book = {
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
  const [value, setValue] = useState<Book | null | undefined>();
  const [isNew, setIsNew] = useState(false);
  const [listBook, setListBook] = useState<Array<Book>>([]);
  const getBookTitle = (book: Book) => book.title;
  const getBookKey = (book: Book) => book.id;
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
  
  const { register } = useFormContext() // retrieve all hook methods
  const { onChange: onChangeBookId, onBlur, name, ref } = register('book'); 
  const renderSearchBook = () => {
    if (isNew) return <></>;
    return (
      <Autocomplete
        value={value}
        onChange={(event: React.ChangeEvent<{}>, newValue: Book | null) => {
          setValue(newValue);
          if (newValue !== null) {
            onChangeBookId(newValue as any);
          }
        }}
        disablePortal
        id="combo-box-demo"
        options={listBookDummie}
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
          <div>{`value: ${value !== null ? `'${value?.id}' ${value?.title}` : "null"}`}</div>

          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="already"
            >
              <FormControlLabel
                defaultChecked
                value="already"
                control={<Radio />}
                label="Chọn sách hiện có"
                onClick={() => setIsNew(false)}
              />
              <FormControlLabel
                value="isNew"
                control={<Radio />}
                label="Thêm sách mới"
                onClick={() => setIsNew(true)}
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
