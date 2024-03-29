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
import { Dispatch, useState } from "react";

const RateModel = ({
  openRateModal,
  setOpenRateModal,
}: {
  openRateModal: boolean;
  setOpenRateModal: Dispatch<boolean>;
}) => {
  const handleClose = () => {
    setOpenRateModal(false);
  };
  const [value, setValue] = useState<number | null>(2);
  return (
    <Dialog
      open={openRateModal}
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
          Bạn đánh giá thế nào về đơn hàng #123 của chủ sách Thảo Nguyễn?
        </DialogContentText>
        <Stack spacing={1} sx={{mt:1}} alignItems={"center"}>
          <Rating
            name="simple-controlled"
            value={value}
            size="large"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Mô tả"
            type="email"
            fullWidth
            variant="standard"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button type="submit">Đánh giá</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RateModel;
