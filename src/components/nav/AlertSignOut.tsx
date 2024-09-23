import { Alert, Button, Slide, SlideProps, Snackbar } from "@mui/material";

import React, { Dispatch, SetStateAction } from "react";
import { ICommonAlert } from "../../types/common";
function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}
const AlertSignOut = ({
  alert,
  setAlert,
}: {
  alert: ICommonAlert;
  setAlert: Dispatch<SetStateAction<ICommonAlert>>;
}) => {
  const { message, open, severity } = alert;
  const handleClose = () => setAlert((state) => ({ ...state, open: false }));

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      autoHideDuration={7000}
      key={"vertical + horizontal"}
      TransitionComponent={SlideTransition}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSignOut;
