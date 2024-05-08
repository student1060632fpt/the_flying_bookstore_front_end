import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { IOrder, IOrderStatus } from "../../types/order";
import { updateStatusOrder } from "../../api/order";
import { useStoreAlert } from "../../hooks/alert";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
interface IModal {
  open: boolean;
  order: IOrder;
}
export default function CancelModal({
  cancelModal,
  setCancelModal,
  callUpdateStatus,
}: {
  cancelModal: IModal;
  setCancelModal: React.Dispatch<React.SetStateAction<IModal>>;
  callUpdateStatus: (
    statusMessage: IOrderStatus,
    status: number,
    alertMessage: string
  ) => Promise<void>;
}) {
  const { open, order } = cancelModal;
  const { callAlert } = useStoreAlert();
  const handleClose = () => {
    setCancelModal((state) => ({ ...state, open: false }));
  };
  const handleCancelOrder = async () => {
    return await callUpdateStatus("CANCELED", 5, "Hủy đơn hàng");
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Bạn có muốn hủy đơn hàng #{order?.leaseOrder?.id}?
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
          <Typography gutterBottom>
            Bạn có chắc chắn muốn hủy đơn hàng {order?.leaseOrder?.id} của{" "}
            {order?.lessor?.lastName} {order?.lessor?.firstName} với cuốn sách{" "}
            {order?.listing?.book.title}?
          </Typography>
          <Typography gutterBottom>
            Bạn sẽ không thể hoàn lại thao tác này được. Bạn có chắc chắn chứ?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ mr: 2 }}>
            Thoát
          </Button>
          <Button
            autoFocus
            variant="outlined"
            color="error"
            onClick={handleCancelOrder}
          >
            Hủy đơn hàng
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
