"use client";
import {
  AccordionDetails,
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  LinearProgress,
  Radio,
  RadioGroup,
  TextField,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SubmitHandler, useForm } from "react-hook-form";
import { top100Films } from "@/app/(manager)/manager-post/add-post/top100film";
import { useEffect, useMemo, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import NoImage from "./../../assets/images/noimg.png";
import { useStaticPicker } from "@mui/x-date-pickers/internals";
import axios, { AxiosProgressEvent } from "axios";
import { Accordion, AccordionSummary } from "./AccordionCustom";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export type TFieldValue = {
  damagePercent: number;
  linkImage: string;
};

const CreateDocument = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFieldValue>();
  const [uploadProgress, setUploadProgress] = useState(0);
  const onSubmit: SubmitHandler<TFieldValue> = (data) => console.log(data);
  const [imgUrl, setImgUrl] = useState<string>();
  const handleFileUpload = (event: any) => {
    console.log(event.target.files[0], "bebe");

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    console.log({ formData });

    axios
      .post("https://api.imgbb.com/1/upload", formData, {
        params: { key: "06112f8ddf44fb385b1d95d402e3e3a9" },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          const percentCompleted = progressEvent?.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 100;
          setUploadProgress(percentCompleted);
        },
      })
      .then((response) => {
        if (response?.data?.data?.display_url) {
          console.log(response?.data?.data?.display_url);
          setImgUrl(response?.data?.data?.display_url);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Accordion sx={{ my: 2 }} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Tài liệu
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="auto-create-doc"
                options={[{ label: "Tạo tài liệu mới" }, ...top100Films]}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Chọn tài liệu"
                    variant="standard"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                type="number"
                label="Phần trăm hư hại"
                variant="standard"
                {...register("damagePercent", {
                  required: "Cần phải điền trường này",
                })}
                error={!!errors?.damagePercent}
                helperText={
                  errors.damagePercent && errors.damagePercent?.message
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput
                  onChange={handleFileUpload}
                  type="file"
                  multiple={false}
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress variant="determinate" value={uploadProgress} />
            </Grid>
            <Grid item xs={12}>
              <div className="relative w-full h-52 border rounded-lg">
                <Image
                  src={imgUrl || NoImage}
                  alt="img"
                  sizes="52"
                  fill
                  className="object-contain"
                />
              </div>
            </Grid>
            <Grid item xs={12} >
              <Grid container gap={2}>
                <Grid item xs={3}>
                  <Button fullWidth variant="outlined" color="error" onClick={() => {setImgUrl("");setUploadProgress(0)}}>Xóa ảnh</Button>
                </Grid>
                <Grid item xs={3}>
                  <Button fullWidth variant="contained">Thêm ảnh</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </form>
  );
};
export default CreateDocument;
