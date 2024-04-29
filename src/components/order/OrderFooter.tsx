"use client";
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
import { IOrder, IOrderStatus } from "../../types/order";
import { updateStatusOrder } from "../../api/order";
import { useStoreAlert } from "../../hooks/alert";
import { redirect } from "next/navigation";
import { CiTrash } from "react-icons/ci";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useRouter } from "next/navigation";
import CancelModal from "./CancelModal";
dayjs.extend(localizedFormat);
//tiếng việt
require("dayjs/locale/vi");
dayjs.locale("vi"); // use locale globally
dayjs.extend(relativeTime);
type IOrderStatusMessage = {
  [key in IOrderStatus]?: string;
};

const OrderFooter = ({
  order,
  changeStatus,
}: {
  order: IOrder;
  changeStatus: (e: any, newValue: number) => void;
}) => {
  const [openRateModal, setOpenRateModal] = useState<boolean>(false);
  const [cancelModal, setCancelModal] = useState({
    open: false,
    order,
  });
  const { callAlert } = useStoreAlert();
  const dateEnd = dayjs(order.leaseOrder.toDate);
  const duration = dateEnd.diff(order.leaseOrder.fromDate, "day");
  const router = useRouter();
  const handleClickOpenRateModal = () => {
    setOpenRateModal(true);
  };
  const renderAlert = () => {
    let content: IOrderStatusMessage = {
      PAYMENT_SUCCESS:
        "Vui lòng chỉ nhấn “đã nhận được hàng” khi đơn hàng đã được giao đến bạn và bạn đã nhận được hàng",
      ORDERED_PAYMENT_PENDING:
        "Vui lòng thanh toán đơn hàng trong 24 giờ, nếu đã chuyển khoản bạn nhấn nút Xác nhận đã trả",
      USER_PAID: "Vui lòng chờ admin xác nhận đã nhận tiền của bạn thành công",
      DELIVERED: dayjs().isSame(order.leaseOrder.toDate, "day")
        ? "Bạn đã đến hạn trả sách"
        : `Bạn còn ${duration} ngày nữa, bạn có muốn trả sách sớm?`,
    };

    if (
      !content[order.leaseOrder.status] ||
      content[order.leaseOrder.status] == ""
    )
      return <></>;
    return (
      <Alert variant="standard" color="info">
        {content[order.leaseOrder.status]}
      </Alert>
    );
  };

  const callUpdateStatus = async (
    statusMessage: IOrderStatus,
    status: number,
    alertMessage: string
  ): Promise<void> => {
    return await updateStatusOrder(statusMessage, order.leaseOrder.id).then(
      () => {
        callAlert(`${alertMessage} thành công`);
        changeStatus(null, status);
        router.refresh()
      }
    );
  };
  const renderButton = () => {
    let message = "";
    switch (order.leaseOrder.status) {
      case "PAYMENT_SUCCESS":
        message = `Đã nhận được hàng`;
        return (
          <Button
            variant="contained"
            onClick={() => callUpdateStatus("DELIVERED", 2, message)}
          >
            {message}
          </Button>
        );
      case "ORDERED_PAYMENT_PENDING":
        message = `Xác nhận đã trả`;
        return (
          <>
            <Button
              variant="contained"
              onClick={() => callUpdateStatus("USER_PAID", 1, message)}
            >
              {message}
            </Button>
            <IconButton
              color="error"
              aria-label="delete"
              sx={{ ml: 2 }}
              onClick={() =>
                setCancelModal((state) => ({ ...state, open: true }))
              }
            >
              <CiTrash />
            </IconButton>
          </>
        );
      case "DELIVERED":
        if (dayjs().isSame(order.leaseOrder.toDate, "day")) {
          message = `Đã trả sách`;
          return (
            <>
              <Button
                variant="contained"
                onClick={() => callUpdateStatus("RETURNING", 2, message)}
              >
                {message}
              </Button>
            </>
          );
        }
        message = `Trả sách sớm`;
        return (
          <>
            <Button
              variant="contained"
              onClick={() => callUpdateStatus("RETURNING", 2, message)}
            >
              {message}
            </Button>
          </>
        );
      default:
        break;
    }
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
        <Grid item xs={3} mb={1}>
          {renderButton()}
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
      <CancelModal cancelModal={cancelModal} setCancelModal={setCancelModal} callUpdateStatus={callUpdateStatus}/>
    </>
  );
};

export default OrderFooter;
