import {
  Alert,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { GridSlotsComponentsProps } from "@mui/x-data-grid";
import RateModel from "./RateModel";
import { CiCircleInfo } from "react-icons/ci";
import { useState } from "react";
import { formatCurrency } from "../../utils/helps";
import { IOrder } from "../../types/order";
import { updateStatusOrder } from "../../api/order";

const OrderFooter = ({ order }: { order: IOrder }) => {
  const [openRateModal, setOpenRateModal] = useState<boolean>(false);
  const handleClickOpenRateModal = () => {
    setOpenRateModal(true);
  };
  const renderAlert = () => {
    let content = "";
    switch (order.leaseOrder.status) {
      case "PAYMENT_SUCCESS":
        content =
          "Vui lòng chỉ nhấn “đã nhận được hàng” khi đơn hàng đã được giao đến bạn và bạn đã nhận được hàng";
        break;
      case "ORDERED_PAYMENT_PENDING":
        content = "Vui lòng thanh toán đơn hàng trong 24 giờ";
        break;
      default:
        break;
    }
    if (content == "") return <></>;
    return (
      <Alert variant="standard" color="info">
        {content}
      </Alert>
    );
  };
  const getOrder = async () => {
    return await updateStatusOrder("DELIVERED",order.leaseOrder.id).then(() => {
      setAlert({
        open: true,
        message: "Cập nhập đơn hàng thành công",
        severity: "success",
      });
    });
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        mt={1}
        justifyItems="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          {renderAlert()}
        </Grid>
        <Grid item xs={3}>
          {order.leaseOrder.status == "PAYMENT_SUCCESS" && (
            <Button
              variant="contained"
              sx={{ mt: 1 }}
              onClick={getOrder}
            >
              Đã nhận được hàng
            </Button>
          )}
        </Grid>

        <Grid item xs={3} sx={{ textAlign: "right" }}>
          <Typography variant="body2" color={"gray"}>
            Tổng tiền thuê: {formatCurrency(order.leaseOrder.totalLeaseFee)}
          </Typography>
          <Typography variant="body2" color={"gray"}>
            Tổng tiền cọc: {formatCurrency(order.leaseOrder.totalDeposit)}
          </Typography>
          <Typography variant="body1">
            Tổng tiền:{" "}
            {formatCurrency(
              order.leaseOrder.totalDeposit + order.leaseOrder.totalLeaseFee
            )}
          </Typography>
        </Grid>
      </Grid>
      <RateModel
        openRateModal={openRateModal}
        setOpenRateModal={setOpenRateModal}
      />
    </>
  );
};

export default OrderFooter;
