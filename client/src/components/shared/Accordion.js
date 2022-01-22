import { useState } from 'react';
import AccordionMUI from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = ({ storeName, totalPrice, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AccordionMUI
      expanded={expanded}
      onChange={() => setExpanded((prevState) => !prevState)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
        <Typography sx={{ flexShrink: 0, pr: 3 }}>
          {storeName}
        </Typography>
        <Typography>{totalPrice} €</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionMUI>
  );
};

export default Accordion;
