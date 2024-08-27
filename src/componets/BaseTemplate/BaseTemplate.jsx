import React from 'react';
import PropTypes from "prop-types";
import {Container} from "react-bootstrap";
import {Box} from "@mui/material";

const BaseTemplate = ({children, maxWidth = 'sm'}) => {
    return (
        <Container component="main"  maxWidth={maxWidth}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Container maxWidth={maxWidth}>{children}</Container>
            </Box>
        </Container>
    );
};

BaseTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

export default BaseTemplate;