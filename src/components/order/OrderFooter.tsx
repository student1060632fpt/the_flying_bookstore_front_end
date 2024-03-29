import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { GridSlotsComponentsProps } from "@mui/x-data-grid";
import RateModel from "./RateModel";
import { CiCircleInfo } from "react-icons/ci";
import { useState } from "react";

const OrderFooter = (
  props: NonNullable<GridSlotsComponentsProps["footer"]>
) => {
  const [openRateModal, setOpenRateModal] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpenRateModal(true);
  };


  return (
    <Grid container spacing={2} justifyItems="center" alignItems="center">
      <Grid item xs={5}>
        <Stack spacing={1} direction="row" alignItems="center">
          <IconButton aria-label="delete">
            <CiCircleInfo />
          </IconButton>
          <Typography>
            Vui lòng chỉ nhấn “đã nhận được hàng” khi đơn hàng đã được giao đến
            bạn và bạn đã nhận được hàng{" "}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={handleClickOpen}>Đã nhận được hàng</Button>
        <RateModel openRateModal={openRateModal} setOpenRateModal={setOpenRateModal}/>
      </Grid>
      <Grid item xs={4} sx={{ textAlign: "right" }}>
        <Typography variant="h6">Tiền thuê: 20.000đ</Typography>
        <Typography variant="body1">Tiền cọc: 200.000đ</Typography>
      </Grid>
    </Grid>
  );
};

export default OrderFooter;
