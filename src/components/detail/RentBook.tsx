import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import RentDay from "./RentDay";
import RentCombo from "./RentCombo";
import Owner from "./Owner";

const RentBook = () => {
  return (
    <div className="">
      <h3 className="text-xl font-bold text-primary mb-4">Đặt thuê</h3>
      <Accordion sx={{ backgroundColor: "white", borderRadius: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div className="flex justify-between items-center w-full mr-2">
            <h5 className="font-semibold">Thuê theo ngày</h5>
            <p className="text-sm">2.000đ/ngày</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <RentDay/>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded  sx={{ backgroundColor: "white", borderRadius: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <div className="flex justify-between items-center w-full mr-2">
            <h5 className="font-semibold">Thuê theo combo</h5>
            <p className="text-sm">1.000đ/ngày</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <RentCombo/>
        </AccordionDetails>
      </Accordion>
      <Owner/>
    </div>
  );
};

export default RentBook;
