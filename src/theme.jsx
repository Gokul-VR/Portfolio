// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'SF Pro Display',
            'SF Pro Icons',
            'Helvetica Neue',
            'Helvetica',
            'Arial',
            'sans-serif',
        ].join(','),
    },
});

export default theme;
