import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
  Stack,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { IRateModal } from "./OrderFooter";
import { useAuthStore } from "../../hooks/user";
import axios from "axios";
import { useStoreAlert } from "../../hooks/alert";
import { SubmitReviewService } from "../../api/ratingService";

const RateModel = ({
  rateModal,
  setRateModal,
}: {
  rateModal: IRateModal;
  setRateModal: Dispatch<SetStateAction<IRateModal>>;
}) => {
  const { open, order } = rateModal;
  const {callAlert} = useStoreAlert()
  const { profile } = useAuthStore();
  const handleClose = () => {
    setRateModal((state) => ({ ...state, open: false }));
  };

  const [rate, setRate] = useState<number | null>(5);
  const [description, setDescription] = useState<string>("");
  const onSubmit =async () => {
    const formData = {
      score: rate,
      imageLink: null,
      leaseOrderId: order?.leaseOrder?.id,
      userId: profile?.id,
      listingId: order?.listing?.id,
      description,
    };
    console.log(formData);

    const response = await SubmitReviewService(formData);
    if (response) {      
        console.log(JSON.stringify(response));
        handleClose()
        callAlert("Đánh giá thành công")
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Đánh giá đơn hàng</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn đánh giá thế nào về đơn hàng #{order?.leaseOrder?.id} của{" "}
          {order?.lessor?.lastName} {order?.lessor?.firstName}?
        </DialogContentText>
        <Stack spacing={1} sx={{ mt: 1 }} alignItems={"center"}>
          <Rating
            name="simple-rate"
            value={rate}
            size="large"
            onChange={(_, newValue) => {
              setRate(newValue);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="description"
            label="Mô tả"
            type="description"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button onClick={onSubmit}>Đánh giá</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RateModel;
