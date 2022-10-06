import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: "#00062D",
        contrastText: "#FFFFFF",

      },
      secondary: {
        main: "#67F2CB",
        contrastText: "#00062D",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '28px',
            padding: "16px 24px",
            fontSize: "1rem",
            fontWeight: "600"
          },
        },
      },
    },
  })

  export default theme;