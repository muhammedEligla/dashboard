import { Box, Typography, useTheme } from '@mui/material';

// eslint-disable-next-line react/prop-types
const Header = ({title1 , title2}) => {
    const theme = useTheme();
    return (
        <Box>
            <Typography variant="h4" fontWeight={'bold'} color={theme.palette.info.light}>
            {title1}
            </Typography>
            <Typography variant="body2">
            {title2}
            </Typography>
        </Box>
    );
}

export default Header;
