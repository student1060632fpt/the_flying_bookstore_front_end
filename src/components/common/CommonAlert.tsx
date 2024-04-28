import { Alert, Grow, GrowProps, Snackbar } from "@mui/material";
import { useStoreAlert } from "../../hooks/alert";

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

const CommonAlert = () => {
  const { message, open, severity, closeAlert } = useStoreAlert();
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      onClose={closeAlert}
      key={"verticalsdf + horizontal"}
      TransitionComponent={GrowTransition}
      autoHideDuration={7000}
    >
      <Alert onClose={closeAlert} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CommonAlert;
