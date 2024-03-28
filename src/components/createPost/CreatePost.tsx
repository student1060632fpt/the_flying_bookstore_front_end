import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SubmitHandler, useForm } from "react-hook-form";
import { top100Films } from "@/app/(manager)/manager-post/add-post/top100film";
type Inputs = {
  description: string;
  timeMax: number;
  quantity: number;
  address: string;
  deposit: number;
  price: number;
  penalty: number;
};
const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Bài đăng
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-post"
                options={top100Films}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Thể loại" variant="standard" />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mô tả trạng thái sách"
                variant="standard"
                {...register("description")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Thời gian thuê tối đa"
                variant="standard"
                {...register("timeMax")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Số lượng"
                variant="standard"
                {...register("quantity")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Địa chỉ cho thuê"
                variant="standard"
                {...register("address")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Giá thuê theo ngày"
                variant="standard"
                {...register("price")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phí phạt trả trễ theo ngày"
                variant="standard"
                {...register("penalty")}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
        <AccordionActions>
          <Button>Tạo mới</Button>
        </AccordionActions>
      </Accordion>
    </form>
  );
};

export default CreatePost;
