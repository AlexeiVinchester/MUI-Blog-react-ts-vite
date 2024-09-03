import { AppBar, Toolbar, Container, IconButton, Typography, Button, Box, Paper, Grid2, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import LayersIcon from '@mui/icons-material/Layers';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';
import { useState } from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {

    const [value, setValue] = useState('recents');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event.preventDefault();
        setValue(newValue);
    };

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleClickOpenDialog = () => {
        setIsDialogOpen(true)
    };

    const handleCLickCloseDialog = () => {
        setIsDialogOpen(false)
    };


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
                            <Dialog 
                                open={isDialogOpen} 
                                onClose={handleCLickCloseDialog}
                                
                            >
                                <DialogTitle>Log in</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Log in to see videos
                                    </DialogContentText>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Email address"
                                        type="email"
                                        fullWidth
                                    />
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="password"
                                        label="Password"
                                        type="password"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button 
                                        onClick={handleCLickCloseDialog}
                                        color="primary"
                                    >
                                        Cancel
                                    </Button>
                                    <Button 
                                        onClick={handleCLickCloseDialog}
                                        color="primary"
                                    >
                                        Log in
                                    </Button>
                                </DialogActions>
                            </Dialog>
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

            <main>
                <Paper sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1723580241942-20f70e54ceda?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    position: 'relative',
                    color: 'white',
                    marginBottom: '32px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <Container fixed>
                        <Grid2 container>
                            <Grid2 size={{ md: 6 }}>
                                <div style={{
                                    position: 'relative',
                                    padding: '72px',
                                    marginTop: '64px'
                                }}>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Web Developer Blog
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="inherit"
                                        component="p"

                                    >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nemo atque quidem maiores tempora reiciendis neque dolorem ipsam quis, non, totam in ut laboriosam cupiditate itaque tenetur tempore! Quidem, blanditiis.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            marginTop: '16px'
                                        }}
                                    >
                                        Learn more
                                    </Button>
                                </div>
                            </Grid2>
                        </Grid2>
                    </Container>
                </Paper>
                <div>
                    <Container maxWidth="md">
                        <Typography
                            variant="h2"
                            align="center"
                            color="textPripary"
                            gutterBottom
                        >
                            Web developer Blog
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondaty"
                            component='p'
                            gutterBottom
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus voluptatem ab fugit assumenda, ea commodi tempore ex sed numquam, culpa ipsam. Quo, maxime atque eos cupiditate consectetur ut magni? Quo, maxime atque eos cupiditate consectetur ut magni?
                        </Typography>
                        <Grid2 container justifyContent='center' spacing={4}>
                            <Grid2>
                                <Button variant="contained" color="primary">Start now</Button>
                            </Grid2>
                            <Grid2>
                                <Button variant="outlined" color="primary">Learn more</Button>
                            </Grid2>
                        </Grid2>
                    </Container>
                </div>
                <Container maxWidth='md' sx={{marginTop: '30px'}}>
                    <Grid2 container spacing={4}>
                        {
                            cards.map((card) => (
                                <Grid2 key={card} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <Card>
                                        <CardMedia
                                            image="https://images.unsplash.com/photo-1723580241942-20f70e54ceda?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            title="Image title"
                                            sx={{
                                                paddingTop: '56.25%'
                                            }}
                                        />
                                        <CardContent 
                                            sx={{
                                                flexGrow: 1
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                gutterBottom
                                            >
                                                Blog post
                                            </Typography>
                                            <Typography>
                                                Blog post, web developer blog context
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">View</Button>
                                            <Button size="small" color="primary">Edit</Button>
                                            <LayersIcon />
                                            <PlayCircleFilledIcon />
                                        </CardActions>
                                    </Card>
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </Container>
            </main>
            <footer style={{
                marginTop: '32px'
            }}>
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction 
                        label="Recents"
                        value='recents'
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction 
                        label="Favorites"
                        value='favorites'
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction 
                        label="Nearby"
                        value='nearby'
                        icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction 
                        label="Folder"
                        value='folder'
                        icon={<FolderIcon />}
                    />
                </BottomNavigation>
                <Typography 
                    align="center" 
                    color="textSecondary" 
                    component="p" 
                    variant="subtitle1"
                >
                    Web developer Blog React TS MUI site
                </Typography>
            </footer>

        </>

    )
}

export { App } 
