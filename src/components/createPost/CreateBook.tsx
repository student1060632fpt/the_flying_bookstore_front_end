"use client";
import { top100Films } from "@/app/(manager)/manager-post/add-post/top100film";
import {
  AccordionDetails,
  Autocomplete,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionSummary } from "./AccordionCustom";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import ModalSearchBook from "./ModalSearchBook";
import { useStoreBook } from "@/hooks/choosenBook";
export type TBookValue = {
  title: string;
  author: string;
  publisher: string;
  pageNumber: number;
  size: string;
  isbn: string;
  datePublish: string;
  language: string;
};
const BookExistOrNot = () => {
  const {
    register,
    getValues,
    formState: { errors },
    reset,
  } = useFormContext<TBookValue>();
  const bookChoosen = useStoreBook((state) => state.bookChoosen);
  console.log({ bookChoosen });
  useEffect(() => {
    reset();
    
  }, [bookChoosen, reset]);

  if (bookChoosen?.id) {
    return (
      <>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Tác giả"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              readOnly: true,
            }}
            value={bookChoosen.authors}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Nhà xuất bản"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              readOnly: true,
            }}
            value={bookChoosen.publisher}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Số trang"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              readOnly: true,
            }}
            value={bookChoosen.pageCount}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Kích thước"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              readOnly: true,
            }}
            value={bookChoosen.size}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="ISBN"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              readOnly: true,
            }}
            value={bookChoosen.isbn}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Ngày phát hành"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              readOnly: true,
            }}
            value={bookChoosen.publishedDate}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Ngôn ngữ"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              readOnly: true,
            }}
            value={bookChoosen.languageCode}
          />
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid item xs={6}>
          <TextField
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            label="Tiêu đề"
            variant="standard"
            {...register("title", {
              required: "Cần phải điền trường này",
            })}
            error={!!errors?.title}
            helperText={errors.title && errors.title?.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Tác giả"
            variant="standard"
            {...register("author")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Nhà xuất bản"
            variant="standard"
            {...register("publisher")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            type="number"
            InputLabelProps={{ shrink: true }}
            label="Số trang"
            variant="standard"
            {...register("pageNumber")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Kích thước"
            variant="standard"
            {...register("size")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="ISBN"
            variant="standard"
            {...register("isbn")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Ngày phát hành"
            variant="standard"
            {...register("datePublish")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Ngôn ngữ"
            variant="standard"
            {...register("language")}
          />
        </Grid>
      </>
    );
  }
};
const CreateBook = () => {
  const [open, setOpen] = useState(false);
  const bookChoosen = useStoreBook((state) => state.bookChoosen);
  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ borderBottom: 1, borderBottomColor: "lightgray" }}
        >
          Sách
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                defaultValue={""}
                label="Tìm sách"
                variant="standard"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <CiSearch size={25} />
                    </InputAdornment>
                  ),
                }}
                onClick={() => setOpen(true)}
                value={bookChoosen ? bookChoosen.title : "Thêm sách mới"}
              />
            </Grid>
            <BookExistOrNot />
          </Grid>
        </AccordionDetails>
      </Accordion>
      <ModalSearchBook open={open} setOpen={setOpen} />
    </>
  );
};

export default CreateBook;
