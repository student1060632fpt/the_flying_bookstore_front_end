import { Button, Grid, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { PiNavigationArrow } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import { IOrder } from "../../types/order";
import dayjs from "dayjs";
import { renderStatus } from "../checkout/PaymentStatus";
export const HeaderOrder = ({
  order,
  isCustomer,
}: {
  order: IOrder;
  isCustomer?: boolean;
}) => {
  const theme = useTheme();
  return (
    <Grid
      container
      mt={0.1}
      mb={1}
      spacing={2}
      justifyItems="center"
      alignItems="center"
    >
      <Grid item xs={2}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Id đơn hàng
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          #{order?.leaseOrder?.id}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          {isCustomer ? `Người thuê` : `Chủ sách`}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          {order?.lessor?.lastName} {order?.lessor?.firstName}
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Thời gian thuê
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          {dayjs(order?.leaseOrder?.fromDate).format("DD/MM")} -{" "}
          {dayjs(order?.leaseOrder?.toDate).format("DD/MM/YYYY")}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Trạng thái {isCustomer ? `chủ sách` : `người thuê`}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          {renderStatus(order?.leaseOrder?.status, isCustomer)}
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Link href={`/order/${order?.leaseOrder?.id}`}>
          <Button
            endIcon={<CiLocationArrow1 />}
            sx={{ textTransform: "none" }}
            variant="text"
          >
            Xem chi tiết
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
