import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import './CountryDetails.css';

const CountryDetails = () => {
  const [data, setData] = useState<any>(null)
  // const [expanded, setExpanded] = useState<boolean>(false)
  const params = useParams()
  const url = 'https://restcountries.com/v3.1/name/' + params.country
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data[0])
    }
    fetchData()
  }, [url])

  const spanStyle = {color: 'blue'}

  return (
    <>
      {data !== null ?
        <Card sx={{ maxWidth: 400, height: 500 }}>
          <CardHeader sx={{textAlign: 'start'}}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="country-info">
                {data.name.common.charAt(0)}
              </Avatar>
            }
            titleTypographyProps={{variant:'h6' }}
            title={data.name.common}
            subheader={data.capital[0]}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
          />
          {/* The flag as string character. Pseudo-class definition done in CountryDetails.css */}
          <Typography className="Flag" sx={{ height: 250, width: '100%', lineHeight: 1.2, fontSize: '1400%' }}>
            {data.flag}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              The country belongs to <span style={spanStyle}>{data.region}</span> region and <span style={spanStyle}> {data.subregion} </span> 
              sub-region. Located at <span style={spanStyle}>{Math.round(data.latlng[0])} </span>&deg;N and <span style={spanStyle}>{Math.round(data.latlng[1])}</span>&deg;W, 
              this country has population of <span style={spanStyle}>{data.population}</span> and it has {data.independent ? 'gained' : 'not gained'} independent,
              according to the CIA World Factbook.
            </Typography>
          </CardContent>
          <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
            <IconButton aria-label="Back to country list">
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton aria-label="Show on the map">
              <LocationOnIcon />
            </IconButton>
            </Box>
            <Box>
            <IconButton>
              <ExpandMoreIcon sx={{marginLeft: 'auto', marginRight: '2px' }} />
            </IconButton>
            </Box>
          </CardActions>
        </Card>
        : null}
    </>
  )
}
export default CountryDetails