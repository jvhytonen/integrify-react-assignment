import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';


const TopBar = (props: any) => {

    return (
        <AppBar position="static">
            <Toolbar>
                    <MenuIcon/>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                >
                    Countries
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar