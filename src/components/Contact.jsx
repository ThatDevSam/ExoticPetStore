
import{
    Box, 
    Container,
    Grid,
    Typography,
    Button,
    TextField,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Underline from './sectionHeaderUnderline'

function Contact() {

    //Initialize theme from the theme provider.
    const theme = useTheme()

    return(
        <>
            <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4}}>
                <Box sx={{flexGrow: 1, }}>
                    <Grid container columnSpacing={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2}} >
                        {/* Map section */}
                        <Grid container item xs={12} md={6}>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant='h5' sx={{fontWeight: 'bold',}}>
                                    Come and see us
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{mt: 2, mb: 2}}>
                                <Underline />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src="./src/assets/HeroImages/MapImage.png" alt="map" />
                            </Grid>
                        </Grid>
                        {/* Contact and store hours seciton */}
                        <Grid container item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {md: 2, xs: 4}}}>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant='h5' sx={{fontWeight: 'bold',}}>
                                    Get in touch
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{mt: 2, mb: 2}}>
                                <Underline />
                            </Grid>
                            <Grid container item xs={12} sx={{ml:3, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                
                                <Grid item xs={8} md={10} >
                                    <Typography variant='body1' sx={{mb: 4}}>
                                        Our staff are certified pet experts and are happy to answer all of your questions by phone, email, or in person.
                                    </Typography>
                                </Grid>

                                {/* Contact information section */}
                                <Grid container item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant='h6' sx={{mb: 2, fontWeight: 'bold'}}>
                                            Contact Information
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant='body1'>
                                            <span style={{fontWeight: 'bold'}}>Email:</span> HappyPets@gmail.com
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1, mb:1}}>
                                        <Typography variant='body1'>
                                            <span style={{fontWeight: 'bold'}}>Phone:</span> (111)-111-1111
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant='body1'>
                                            <span style={{fontWeight: 'bold'}}>Address:</span> P. sherman 42 wallaby way, Sydney.
                                        </Typography>
                                    </Grid>

                                </Grid>

                                {/* Store hours section */}
                                <Grid container item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {}}}>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant='h6' sx={{mb: 2, fontWeight: 'bold', mt: {xs: 3, md: 0}}}>
                                            Store Hours
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant='body1'>
                                            <span style={{fontWeight: 'bold'}}>Mon-Fri:</span> 9am-5pm
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1, mb: 1}}>
                                        <Typography variant='body1'>
                                            <span style={{fontWeight: 'bold'}}>Saturday:</span> 11am-6pm
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant='body1'>
                                            <span style={{fontWeight: 'bold'}}>Sunday:</span> Closed
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Contact