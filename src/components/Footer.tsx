import { BottomNavigation, BottomNavigationAction, Typography } from "@mui/material";
import { useState } from "react";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';

const Footer = () => {
    const [value, setValue] = useState('recents');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event.preventDefault();
        setValue(newValue);
    };

    return (
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
    );
};

export { Footer };
