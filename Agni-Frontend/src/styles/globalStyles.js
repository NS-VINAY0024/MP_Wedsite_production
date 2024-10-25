// src/styles/globalStyles.js
import { createGlobalStyle } from 'react-jss';

const GlobalStyles = createGlobalStyle({
    body: {
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        margin: 0,
        padding: 0,
        display: 'grid',
        gridTemplateRows: '0.1fr 2fr 0.1fr', // Header, content, footer
        minHeight: '100vh',
    },
});

export default GlobalStyles;
