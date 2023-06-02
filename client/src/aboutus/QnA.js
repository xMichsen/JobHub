import { Accordion, Typography, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


  const FAQ = ({data, text}) => {
    return (
      <Box sx={{ width: { xs:'400px' ,md: '800px' }, margin: '0 auto' }}>
        <Typography variant="h5" sx={{marginBottom:2}}>{text}</Typography>
          {data?.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-content-${index}`} id={`faq-header-${index}`}>
                <Typography variant="subtitle1">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
    );
  }
  
export default FAQ;

  
  
  
  
  
  