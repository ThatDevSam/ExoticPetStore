import React from 'react'
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea  
}from '@mui/material/'
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'

function ProductCard (props) {

    //Initialize theme from the theme provider.
    const theme = useTheme()

    return(
        <>
            <Grid item xs={props.smallResponsivevalue} md={props.mediumResponsivedValue}>
            <Card sx={{':hover': {boxShadow: '10px 10px 10px'}}}>
                <CardActionArea
                    component={Link}
                    to={`/product/${props.id}`}
                    sx={{}}
                >
                    <CardMedia
                    component="img"
                    height={props.height}
                    image={props.image}
                    alt={props.descrp}
                    width={props.width}
                    sx={{ objectFit: 'contain', ':hover': {height: props.height + 15}}}
                    />
                    <CardContent>
                        <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Grid item xs={6} sm={8} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant="h6" sx={{textTransform: 'capitalize'}}>
                                    {props.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                <Typography variant="h6" sx={{color: theme.palette.green.dark, fontWeight: 'bold'}}>
                                    {`$${props.price}`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>  
            </Grid>
        </>
    )
}

export default ProductCard