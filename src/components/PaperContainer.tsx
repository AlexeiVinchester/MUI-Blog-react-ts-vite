import { Button, Container, Grid2, Paper, Typography } from "@mui/material";

const PaperContainer = () => {
    return (
        <div>
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
        </div>
    );
};

export { PaperContainer };
