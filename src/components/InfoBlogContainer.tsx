import { Button, Container, Grid2, Typography } from "@mui/material";

const InfoBlogContainer = () => {
    return (
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
    );
};

export { InfoBlogContainer };
