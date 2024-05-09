"use client";
import { Button, Typography } from "@mui/material";
import CreateBook from "@/components/createPost/CreateBook";
import CreateDocument, {
  TFieldDocumentValue,
} from "@/components/createPost/CreateDocument";
import CreatePost, {
  TFieldPostValue,
} from "@/components/createPost/CreatePost";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
type TFieldValue = TFieldDocumentValue & TFieldPostValue;
export interface IPostState {
  bookId: number | string | undefined;
  copyId: string | undefined;
  postId: string | undefined;
}
const AddPost = () => {
  const [post, setPost] = useState<IPostState>({
    bookId: undefined,
    copyId: undefined,
    postId: undefined,
  });
  const updateBookId = (bookId: IPostState["bookId"]): void =>
    setPost((state) => ({ ...state, bookId }));
  const updateDocumentId = (copyId: IPostState["copyId"]): void =>
    setPost((state) => ({ ...state, copyId }));
  const methods = useForm<TFieldValue>();
  const onSubmit: SubmitHandler<TFieldValue> = (data) => console.log(data);

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Đăng bài mới
      </Typography>

      <CreateBook updateBookId={updateBookId} />
      <CreateDocument
        bookId={post.bookId}
        updateDocumentId={updateDocumentId}
      />
      <CreatePost copyId={post.copyId}/>
    </>
  );
};

export default AddPost;
