import { useEffect, useState } from 'react'
import{
    Backdrop,
    CircularProgress,
    Box, 
    Container,
    Grid,
    Typography,
    Button,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useGetFeaturedProductsQuery} from '../reduxstore/apiSlice'
import ProductCard from './ProductCard'
import Underline from './sectionHeaderUnderline'

function FeaturedProducts(props) {

    //open/close state of the loading icon.
    const [openLoading, setOpenLoading] = useState(false);

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetFeaturedProductsQuery(props.numOfProducts) //number of products to be displayed in this seciton.

    
    //Functions that handle the open and close of the loading icon.
    const handleCloseLoading = () => {
        setOpenLoading(false);
    };
    const handleOpenLoading = () => {
        setOpenLoading(true);
    };
    
    //UseEffect that controls the state of the loading screen based on the state of the api.
    useEffect(() =>{
        //If the loading state of the api is true, open the loading icon.
        if(isLoading){
            handleOpenLoading()
        } else if (isSuccess || isError) {
            handleCloseLoading()
        }
      }, [isLoading, isSuccess, isError])

    //Initialize theme from the theme provider.
    const theme = useTheme()

    //Stores the main content of the page.
    let content 

    if(isSuccess){
        content = data?.featuredProducts.map((animal) => 
            <ProductCard
                smallResponsivevalue={6}
                mediumResponsivedValue={3}
                id={animal.id}
                image={`http://localhost:5000${animal.image}`}
                alt={animal.description}
                width={'100%'}
                height={200}
                name={animal.name}
                price={animal.price}
                sale={animal?.salesAmount.$numberDecimal}
                key={animal.id}
            />
        )      
    } 
    else if (isError){
        console.log(error)
        content = <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <Typography variant='h5'>
                There seems to be a problem on our end, please try again later.
            </Typography>
        </Grid>
    }

    return(
            <>
                <Container maxWidth='xl' sx={{bgcolor: theme.palette.grey.light, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4}}>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container columnSpacing={2} flexDirection={'row'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >

                            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 1}}>
                                <Typography variant='h4' sx={{textTransform: 'capitalize', fontWeight: 'bold'}}>
                                    Our featured friends & accessories
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {/*Section heading underline */}
                                <Underline />
                            </Grid>

                            <Grid container item md={12} sx={{mt: 1}} columnSpacing={4} rowSpacing={4}>
                                {/* Display the content of the section based on the response from the db. */}
                                {content}
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

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

export default FeaturedProducts