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
import { useNavigate } from "react-router-dom"
import Error from './Error'

function SingleProduct () {
    //get product id for breadcrumbs

    //Get the product id from the url params
    let {id: productID} = useParams()

    let navigate = useNavigate()

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
        return(
            <>
                <Container maxWidth='xl' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4}}>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container columnSpacing={2} flexDirection={'row'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                            {/* Images container */}
                            <Grid container item xs={12} sm={6}>
                                <ProductImages img={`http://localhost:5000${data.product.image}`}/>
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
    }  
}

export default SingleProduct