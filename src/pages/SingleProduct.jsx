import { useEffect, useState } from 'react'
import {useGetSingleProductQuery} from '../reduxstore/apiSlice'
import {useParams} from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import{
    Backdrop,
    CircularProgress,
    Box, 
    Container,
    Grid,
    Typography,
    Button,
} from '@mui/material'
import ProductImages from '../components/ProductImages'
import Error from './Error'
import calcSalesPrice from '../util/calcSalesPrice'

function SingleProduct () {
    //get product id for breadcrumbs

    //Get the product id from the url params
    let {id: productID} = useParams()

    //Initialize theme from the theme provider.
    const theme = useTheme()

    //open/close state of the loading icon.
    const [openLoading, setOpenLoading] = useState(false);

     //Functions that handle the open and close of the loading icon.
    const handleCloseLoading = () => {
        setOpenLoading(false);
    };
    const handleOpenLoading = () => {
        setOpenLoading(true);
    };

    //Make an api call with the product ID.
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSingleProductQuery(productID)

    useEffect(() =>{
        //If the loading state of the api is true, open the loading icon.
        if(isLoading){
          handleOpenLoading()
        } else if (isSuccess || isError) {
          handleCloseLoading()
        }
    }, [isLoading, isSuccess, isError])

    if(isSuccess){
        console.log(data)
        const{
            name,
            price,
            salesAmount: {$numberDecimal: sale},
            description,
            image,
            category,
            freeShipping,
            Inventory,
            itemNumber,
            sex,
            age,
            species,
            classification,
            weight,
            brand
        } = data.product

        let salesPrice = calcSalesPrice(price, sale)

        return(
            <>
                <Container maxWidth='xl' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4}}>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container columnSpacing={6} rowGap={3} rowSpacing={{sm: 6, md: 0}} flexDirection={'row'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >

                            {/* Images container */}
                            <Grid container item xs={12} sm={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                <ProductImages img={`http://localhost:5000${image}`} productDescrp = {name} />
                            </Grid>

                            {/* Product details */}
                            <Grid container item xs={12} sm={12} md={6} sx={{display: 'flex', justifyContent: {xs: 'center',md: 'start'}, alignItems: 'center', pb:2,  }}>
                                <Grid item xs={12} sx={{display: 'flex', justifyContent: {xs: 'center',md: 'start'}, alignItems: 'center'}}>
                                    <Typography variant='h3' sx={{textTransform: 'capitalize', fontWeight: 'bold', mb: 2}}>
                                        {name}
                                    </Typography>
                                </Grid>
                                <Grid container item xs={12} columnSpacing={2} columnGap={{xs: 2, md: 0}} rowGap={2} sx={{display: 'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                    <Grid item xs={12} lg={4} sx={{ display: 'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='h4' sx={{display: 'inline-flex', color: 'red', mr: 2, fontWeight: 'bold'}}>
                                            ${salesPrice}
                                        </Typography>
                                        <Typography variant='h5' sx={{display: (sale > 0 ? 'inline-flex' : 'none'), color: 'grey', textDecoration: 'line-through', fontWeight: 'bold'}}>
                                            ${price}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={4} sx={{display: 'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='h5' sx={{fontWeight: 'bold'}}>
                                            Free Shipping: {freeShipping ? 'Yes' : 'No'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8} sx={{mt: 2, pb: 2, borderBottom: 'solid lightgrey 2px'}}>
                                    <Typography variant='body1'>
                                        {description}
                                    </Typography>
                                </Grid>
                            
                                {/* Advanced animal product details */}
                                <Grid container item xs={8} sm={8} md={8} rowGap={2} sx={{display: category == 'animal' ? 'flex' : 'none', pb:2,  mt: 2}}>
                                    <Grid item xs={12} sm={6} sx={{ display:'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='subtitle1'>
                                        <span style={{fontWeight: 'bold'}}>Item # </span>{itemNumber}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='subtitle1'>
                                            <span style={{fontWeight: 'bold'}}>Sex: </span> {sex}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='subtitle1'>
                                            <span style={{fontWeight: 'bold'}}>Age: </span> {age}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='subtitle1'>
                                            <span style={{fontWeight: 'bold'}}>Species: </span>{species}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{display:'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='subtitle1' sx={{textTransform: 'capitalize'}}>
                                            <span style={{fontWeight: 'bold'}}>Classification: </span>{classification}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{display:'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='subtitle1' sx={{textTransform: 'capitalize'}}>
                                            <span style={{fontWeight: 'bold'}}>In Stock: </span>{(Inventory > 0 ? 'Yes': 'No')}
                                        </Typography>
                                    </Grid>
                                </Grid>

                                {/* Advanced accessory product details */}
                                <Grid container item xs={8} sm={8} md={8} rowGap={2} sx={{display: category == 'animal' ? 'none' : 'flex', pb:2,  mt: 2}}>
                                    <Grid item xs={12} sm={6} sx={{ display:'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='subtitle1'>
                                        <span style={{fontWeight: 'bold'}}>Item # </span>{itemNumber}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='subtitle1'>
                                            <span style={{fontWeight: 'bold'}}>Weight: </span> {weight}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='subtitle1'>
                                            <span style={{fontWeight: 'bold'}}>Brand: </span> {brand}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{display:'flex', justifyContent: {xs: 'center', md: 'start'}, alignItems: 'center'}}>
                                        <Typography variant='subtitle1' sx={{textTransform: 'capitalize'}}>
                                            <span style={{fontWeight: 'bold'}}>In Stock: </span>{(Inventory > 0 ? 'Yes': 'No')}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Box>
                </Container>
            </>
        )
    }
    else if (isError){
        console.log(error)
        return(
            <Error msg={"That's embarrassing, we cannot find the product you resquested."} />
        )     
    }  else if (isLoading){
        //Return the loading icon while page is loading.
        return(
            <>
                {/* Loading backdrop */}
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={openLoading}
                >
                <CircularProgress color="inherit" />
                </Backdrop>
            </>
        )
    }

}

export default SingleProduct