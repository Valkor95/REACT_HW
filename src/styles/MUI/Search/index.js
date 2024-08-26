import {alpha} from "@mui/material/styles";
 const SearchStyle = (theme) =>({
    search:{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
     searchIconWrapper: {
         padding: theme.spacing(0, 2),
         height: '100%',
         position: 'absolute',
         pointerEvents: 'none',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
     },
     styledInputBase:{
         color: 'inherit',
         width: '100%',
         '& .MuiInputBase-input': {
             padding: theme.spacing(1, 1, 1, 0),
             // vertical padding + font size from searchIcon
             paddingLeft: `calc(1em + ${theme.spacing(4)})`,
             transition: theme.transitions.create('width'),
             [theme.breakpoints.up('sm')]: {
                 width: '12ch',
                 '&:focus': {
                     width: '20ch',
                 },
             },
         },
     }
})

export default SearchStyle
