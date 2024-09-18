"use client";
import {
  AccordionDetails,
  Autocomplete,
  Box,
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
import { useEffect, useMemo, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import NoImage from "./../../assets/images/noimg.png";
import { useStaticPicker } from "@mui/x-date-pickers/internals";
import axios, { AxiosProgressEvent } from "axios";
import { Accordion, AccordionSummary } from "./AccordionCustom";
import { IPostState } from "../../app/(manager)/manager-post/add-post/page";
import { useAuthStore } from "../../hooks/user";
import { useStoreAlert } from "../../hooks/alert";
import { onSubmitService, uploadFileService } from "@/api/create/createDocumentService";

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

export type TFieldDocumentValue = {
  damagePercent: string;
  linkImage: string;
};

const CreateDocument = ({
  updateDocumentId,
  bookId,
}: {
  updateDocumentId: (documentId: IPostState["copyId"]) => void;
  bookId: IPostState["bookId"];
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFieldDocumentValue>();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imgUrl, setImgUrl] = useState<string>();
  const { profile } = useAuthStore();
  const {callAlert} = useStoreAlert()
  const handleFileUpload = (event: any) => {
    if (uploadProgress == 100 || imgUrl !== "") {
      setImgUrl("");
      setUploadProgress(0);
    }

    console.log(event.target.files[0], "bebe");

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    console.log({ formData });
    const uploadFile = async () => {
        const response = await uploadFileService(formData, setUploadProgress);
        if(response) {
          if (response?.data?.display_url) {
            console.log(response?.data?.display_url);
            setImgUrl(response?.data?.display_url);
          }
        }
        else {
          console.log(response?.error);
        }
    }

    uploadFile();
  };

  const onSubmit: SubmitHandler<TFieldDocumentValue> = async (value) => {
    let data = ({
      bookId,
      ownerId: profile?.id,
      quantity: 1,
      imageLink: imgUrl,
      damagePercent: parseFloat(value.damagePercent),
      updatedDate: "",
      deletedDate: "",
      copyStatus: "UNLISTED",
    });
    console.log({data});

    const response = await onSubmitService(data);
    if(response) {
      console.log(JSON.stringify(response.data));
      updateDocumentId(response.data.id)
      callAlert(`Tạo tài liệu #${response.data.id} thành công` )      
    }
    else console.log(response.error);
  }
      
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
          </Grid>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-end"}
            mt={2}
          >
            <Button
              variant="outlined"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Tạo tài liệu
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </form>
  );
};
export default CreateDocument;
