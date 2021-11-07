import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    React.useEffect(() => {
        if (value === 0) history.push('/');
        else if (value === 1) history.push('movies')
        else if (value === 2) history.push('tvshows')
        else if (value === 3) history.push('search')
    }, [value, history])

    return (
        <Box sx={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            backgroundColor: "#5db405",
            zIndex: 100
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction style={{ color: " rgb(92, 116, 226)" }} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction style={{ color: " rgb(92, 116, 226)" }} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction style={{ color: " rgb(92, 116, 226)" }} label="TV Shows" icon={<TvIcon />} />
                <BottomNavigationAction style={{ color: " rgb(92, 116, 226)" }} label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Box>
    );
}