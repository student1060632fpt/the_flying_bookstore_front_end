import { Skeleton } from "@mui/material";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Skeleton
      sx={{ bgcolor: "grey.100" }}
      variant="rectangular"
    />
  );
}
