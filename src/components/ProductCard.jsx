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
import calcSalesPrice from '../util/calcSalesPrice';

function ProductCard (props) {

    //Initialize theme from the theme provider.
    const theme = useTheme()

    const {sale} = props

    let salesPrice = calcSalesPrice(props.price, sale)

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
                            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant="subtitle1" sx={{textTransform: 'capitalize', fontWeight: 'bold'}}>
                                    {props.name}
                                </Typography>
                            </Grid>
                            {/* If there is a sale show the sales price. */}
                            <Grid item xs={12} sm={4} md={6} lg sx={{display :(sale > 0) ? 'flex' : 'none', justifyContent:{xs: 'center', sm: 'end', lg: 'end'}, alignItems: 'center'}}>
                                <Typography variant='h6' sx={{color: 'red', fontWeight: 'bold'}}>
                                    ${salesPrice}
                                </Typography>
                            </Grid>
                            {/* If there is no sale display the price normally */}
                            <Grid item xs={12} sm={6} sx={{display :(sale > 0) ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant="h6" sx={{color: theme.palette.green.dark, fontWeight: 'bold'}}>
                                    {`$${props.price}`}
                                </Typography>

                            </Grid>
                            {/* If there is a sale display the product price with these styles */}
                            <Grid item xs={12} sm={4} md={6} sx={{display :(sale > 0) ? 'flex' : 'none', justifyContent: {xs:'center', lg: 'start'}, alignItems: 'center', ml: {sm: 0, lg: 2}}}>
                                <Typography variant='h6' sx={{color: 'grey', textDecoration: 'line-through', fontWeight: 'bold'}}>
                                    ${props.price}
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