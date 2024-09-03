import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { DialogWindow } from "./DialogWindow";

const NavigationPanel = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleClickOpenDialog = () => {
        setIsDialogOpen(true)
    };

    const handleCLickCloseDialog = () => {
        setIsDialogOpen(false)
    };
    
    return (
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
                        Web developer Blog
                    </Typography>
                    <Box >
                        <Button
                            color="inherit"
                            variant="outlined"
                            sx={{ marginRight: '16px' }}
                            onClick={handleClickOpenDialog}
                        >
                            Log in
                        </Button>
                        <DialogWindow 
                            isDialogOpen={isDialogOpen}
                            handleCLickCloseDialog={handleCLickCloseDialog}
                        />
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
    );
};

export { NavigationPanel };
