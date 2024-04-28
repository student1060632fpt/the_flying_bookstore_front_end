import { Grid, Typography, useTheme } from "@mui/material";

export const HeaderOrder = () => {
  const theme = useTheme();
  return (
    <Grid container mt={0.25} mb={1} spacing={2} justifyItems="center" alignItems="center">
      <Grid item xs={2}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Chủ sách
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          Nguyễn Thảo
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Số điện thoại
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          0905 907 362
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Địa chỉ
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          1 Lý Thái Tổ, p12, q.10
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Thời gian thuê
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          12/2/2024 - 4/3/2024
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Trạng thái người thuê
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          Chuẩn bị nhận hàng
        </Typography>
      </Grid>
    </Grid>
  );
};