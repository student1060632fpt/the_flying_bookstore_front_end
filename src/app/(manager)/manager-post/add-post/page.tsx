"use client";
import { Button, Typography } from "@mui/material";
import CreateBook, { TBookValue } from "@/components/createPost/CreateBook";
import CreateDocument, {
  TFieldDocumentValue,
} from "@/components/createPost/CreateDocument";
import CreatePost, {
  TFieldPostValue,
} from "@/components/createPost/CreatePost";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
type TFieldValue = TFieldDocumentValue & TBookValue & TFieldPostValue;
const AddPost = () => {
  const methods = useForm<TFieldValue>();
  const onSubmit: SubmitHandler<TFieldValue> = (data) => console.log(data);
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Đăng bài mới
          </Typography>

          <CreateBook />
          <CreateDocument />
          <CreatePost />

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Nộp
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default AddPost;
