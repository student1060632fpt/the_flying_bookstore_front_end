import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { IRowsPost2 } from "./column";
import { useStoreAlert } from "../../hooks/alert";
import { DeletePostService } from "@/api/deletePostService";

const DeletePostModal = ({
  modalDelete,
  handleClose,
  getListPost
}: {
  modalDelete: {
    open: boolean;
    data: IRowsPost2 | null;
  };
  getListPost: () => Promise<void>;
  handleClose: () => void;
}) => {
  const { callAlert } = useStoreAlert();
  const onDelete = async () => {
    const data = await DeletePostService(modalDelete.data?.id);
    if (data) {
      console.log(JSON.stringify(data));
      callAlert(`Xóa bài đăng #${modalDelete.data?.id} thành công`);
      handleClose();
      getListPost();
    } else {
      console.log(data?.error);
    }
  };
  return (
    <Dialog
      open={modalDelete.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        Bạn có muốn xóa bài đăng {modalDelete.data?.title} không?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Sau khi xóa sẽ không thể hồi phục được.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button onClick={onDelete}>Đồng ý</Button>
      </DialogActions>
    </Dialog>
  );
};
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default DeletePostModal;
