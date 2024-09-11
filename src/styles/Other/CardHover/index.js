export const cardHover = {
    '&:hover': {
        transition: 'all 0.9s',
        transform: 'translateY(-10px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
    },
};

export const cardHoverWithoutShadow = {
    '&:hover': {
        transition: 'all 0.9s',
        transform: 'translateY(-10px)',
        boxShadow: 'none',
    },
};

export const cardHoverScale = {
    '&:hover': {
        transition: 'all 0.9s',
        transform: 'scale(1.10)',
        boxShadow: 'none',
    },
};