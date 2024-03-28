"use client";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import CreateBook from "@/components/createPost/CreateBook";
import CreateDocument from "@/components/createPost/CreateDocument";
import CreatePost from "@/components/createPost/CreatePost";

const AddPost = () => {

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Đăng bài mới
      </Typography>
        <CreateBook />
        <CreateDocument/>
        <CreatePost/>
        
        <Button type="submit" variant="contained" sx={{mt:2}}>Nộp</Button>
    </>
  );
};

export default AddPost;
