import { top100Films } from "@/app/(manager)/manager-post/add-post/top100film";
import { AccordionDetails, Autocomplete, Grid, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionSummary } from "./AccordionCustom";
import axios from "axios";
import { useEffect } from "react";
export type TFieldValue = {
  title: string;
  author: string;
  publisher: string;
  pageNumber: number;
  size: string;
  isbn: string;
  datePublish: string;
  language: string;
};
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:8082/api/book",
  headers: {},
};
const CreateBook = () => {
  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFieldValue>();
  const onSubmit: SubmitHandler<TFieldValue> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[{ label: "Thêm mới sách" }, ...top100Films]}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Chọn sách" variant="standard" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
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
                label="Tác giả"
                variant="standard"
                {...register("author")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Nhà xuất bản"
                variant="standard"
                {...register("publisher")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                type="number"
                label="Số trang"
                variant="standard"
                {...register("pageNumber")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Kích thước"
                variant="standard"
                {...register("size")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="ISBN"
                variant="standard"
                {...register("isbn")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Ngày phát hành"
                variant="standard"
                {...register("datePublish")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Ngôn ngữ"
                variant="standard"
                {...register("language")}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </form>
  );
};

export default CreateBook;
