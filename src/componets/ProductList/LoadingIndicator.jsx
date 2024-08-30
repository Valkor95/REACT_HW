import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularWithValueLabel() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <LoadingIndicator value={progress} />;
}

const LoadingIndicator = (props) => (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
                variant="caption"
                component="div"
                sx={{ color: 'text.secondary' }}
            >
                {`${Math.round(props.value)}%`}
            </Typography>
        </Box>
    </Box>
);

LoadingIndicator.propTypes = {
    value: PropTypes.number.isRequired,
};



export default CircularWithValueLabel;