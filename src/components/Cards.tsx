import { Container, Grid2 } from "@mui/material";
import { CardContainer } from "./CardContainer";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Cards = () => {
    return (
        <Container maxWidth='md' sx={{ marginTop: '30px' }}>
            <Grid2 container spacing={4}>
                {
                    cards.map((card) => (
                        <Grid2 key={card} size={{ xs: 12, sm: 6, md: 4 }}>
                            <CardContainer />
                        </Grid2>
                    ))
                }
            </Grid2>
        </Container>
)};

export { Cards };
