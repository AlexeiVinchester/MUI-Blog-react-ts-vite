import { AppBar, Toolbar, Container, IconButton, Typography, Button, Box } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconButton
                edge='start'
                color="inherit"
                aria-label="menu"

              >
                <MenuIcon />
              </IconButton>
              <Typography
                component='p'
                variant="h6"
              >
                Web developer block
              </Typography>
            <Box >
              <Button
                color="inherit"
                variant="outlined"
                sx={{marginRight: '16px'}}
              >
                Log in
              </Button>
              <Button
                color="secondary"
                variant="contained"
              >
                Sign up
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </>

  )
}

export { App } 
