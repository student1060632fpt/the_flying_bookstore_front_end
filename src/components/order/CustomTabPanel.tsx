import { TabPanelProps } from "@mui/joy";
import { Box } from "@mui/material";

interface CustomTabPanelProps extends TabPanelProps {
  index: number;
}
export const orderProps = (index: number) => {
  return {
    id: `order-tab-${index}`,
    "aria-controls": `order-tabpanel-${index}`,
  };
};

const CustomTabPanel = (props: CustomTabPanelProps) => {
  const { children, value, index, ...other } = props;
  // Rest of the code...
  return (
    <div
      role="tabpanel"
      hidden={value != index}
      id={`order-tabpanel-${index}`}
      aria-labelledby={`order-tab-${index}`}
      {...other}
    >
      {value == index && <Box sx={{ mt: 2 }}>{children}</Box>}
    </div>
  );
};
export default CustomTabPanel