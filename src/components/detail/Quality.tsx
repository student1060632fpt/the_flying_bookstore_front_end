import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";
const Quality = () => {
  return (
    <div className="flex w-fit border rounded-md h-10">
      <Button variant="text" size="large">
        <FaPlus className="text-secondary" />
      </Button>
      <input
        title="number"
        defaultValue={1}
        type="text"
        className="text-center w-10"
      />
      <Button variant="text" size="large">
        <FaMinus className="text-secondary" />
      </Button>
    </div>
  );
};

export default Quality;
