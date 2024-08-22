import React from "react";
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ListData = ({title, body, id}) => {
    const [deletePost] = useDeletePostMutation();

    const handleDelete = async (id) => {
        await deletePost(id);
    }

    return (
        <div>
            <Box component="section" sx={{margin: '0 50px', p: 2, border: '1px solid grey'}}>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <h1>{id} | {title}</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>{body}</p>
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Update</Button>
                        <Button onClick={() => handleDelete(id)}>Cancel</Button>
                    </AccordionActions>
                </Accordion>
            </Box>

        </div>
    );
};

export default ListData;
