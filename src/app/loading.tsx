import { CircularProgress, Skeleton } from "@mui/material";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-60 flex items-center justify-center">
      <CircularProgress />
    </div>
  );
}
