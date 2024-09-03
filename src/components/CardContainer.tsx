import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import LayersIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const CardContainer = () => {
    return (
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
    );
};

export { CardContainer };
