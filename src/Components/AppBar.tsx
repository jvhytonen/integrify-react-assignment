import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { DataType } from './TableComponent'
import { useNavigate } from 'react-router-dom'


const TopBar = (props: DataType) => {
    const filterOptions = createFilterOptions({
        matchFrom: 'any',
        stringify: (option: any) => option.name.official
    });
    const navigate = useNavigate();

    return (
       <AppBar
            position="static">
            <Toolbar>
                <MenuIcon
                    sx={{
                        marginLeft: '2px'
                    }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{
                        marginLeft: 5
                    }}
                >
                    Country
                </Typography>
                <Box sx={{marginLeft: 'auto'}}>
                <Box sx={{position: 'relative', display: 'flex', justifyContent: 'space-between'}}>
                    <SearchIcon sx={{position: 'absolute', top: '25%', fontSize: '1.8rem'}} />
                    {props.countries !== null ? <Autocomplete
                        freeSolo
                        options={props.countries}
                        getOptionLabel={(option) => option.name.official}
                        filterOptions={filterOptions}
                        onChange={(e, value) => navigate(`/countries/${value.name.official}`)}
                        sx={{ width: 300 }}
                        //Adding empty space to label is a bit hacky solution, but works 
                        renderInput={(params) => <TextField {...params} label="&nbsp; &nbsp; Search country by name" />}
                    /> : null}
                </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar