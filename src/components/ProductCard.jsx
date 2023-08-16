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
                            <Grid item xs={4} sm={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant="subtitle1" sx={{textTransform: 'capitalize', fontWeight: 'bold'}}>
                                    {props.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} sm={3} sx={{display :(sale > 0) ? 'flex' : 'none', justifyContent: 'start', alignItems: 'center'}}>
                                <Typography variant='h6' sx={{color: 'red', fontWeight: 'bold'}}>
                                    ${salesPrice}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} sm={3} sx={{display :(sale > 0) ? 'none' : 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                <Typography variant="h6" sx={{color: theme.palette.green.dark, fontWeight: 'bold'}}>
                                    {`$${props.price}`}
                                </Typography>


                                {/* <Typography variant='h6' sx={{display: 'inline-flex', color: 'red', mr: 2, fontWeight: 'bold'}}>
                                            ${salesPrice}
                                        </Typography>
                                        <Typography variant='h6' sx={{display: 'inline-flex', color: 'grey', textDecoration: 'line-through', fontWeight: 'bold'}}>
                                            ${props.price}
                                        </Typography> */}
                            </Grid>
                            <Grid item xs={3} sm={3} sx={{display :(sale > 0) ? 'flex' : 'none', justifyContent: 'start', alignItems: 'center'}}>
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