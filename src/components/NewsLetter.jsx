import { useState } from 'react'
import{
    Box, 
    Container,
    Grid,
    Typography,
    Button,
    TextField,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { toast } from 'react-toastify';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function NewsLetter (){

    //Initialize theme from the theme provider.
    const theme = useTheme()

    const [userEmail, setUserEmail] = useState('')

    //Update state with the value of the input. 
    const handleChange = (e) => {
        setUserEmail(e.target.value)  
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!userEmail){
            toast.error('Please enter your email.')
        } else{
            toast.success("Congratulations! Be on the look out for our email with your promo code.")
        }
    }

    return(
        <>
            <Container maxWidth='xl' sx={{bgcolor: theme.palette.green.light, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4}}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container columnSpacing={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2}} >
                        
                        {/* Newsletter form */}
                        <Grid container item xs={12} sm={6} >
                            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant='h5' sx={{fontWeight: 'bold', mb: 2}}>
                                    Join our newsletter for information about sales!
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ml:3, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                <Typography variant='body1'>
                                    We send out weekly information about sales, new animals, new pet accessories, local pet events, and more! So, be sure to sign up today and get a promotional code for 15% off your next purchase!
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ml:3, mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <TextField 
                                    id="email" 
                                    label="Email" 
                                    name="email"
                                    variant="outlined" 
                                    placeholder="CarterLopez@gmail.com"
                                    value={userEmail}
                                    onChange={handleChange}
                                    required={true}
                                    sx={{width: {xs: '75%', sm: '75%'}, mr: 2}}
                                />
                                <Button 
                                    onClick={handleSubmit} 
                                    variant="contained" 
                                    size='large'
                                    aria-label="Submit" 
                                    sx={{bgcolor: 'black', ":hover":{bgcolor: theme.palette.green.light, color: 'black',borderColor: 'inherit', border: 'solid', p: 1}}}
                                >
                                    <Typography variant='body1' sx={{fontWeight: 'bold', ':hover': {fontSize: 18}}}>
                                        Sign up
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        {/* Social Media Links */}
                        <Grid container item xs={12} sm={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {xs: 5, sm: 0}}}>
                            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                                <Typography variant='h5' sx={{fontWeight: 'bold', mb: 2}}>
                                    Find us on social media
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ml:3, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                <Typography variant='body1'>
                                    Find us on our social media to see the cutest animal videos ever and be the first to know about new products.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                <Button variant="text" size='large' endIcon={<FacebookIcon />} sx={{color: 'black', ':hover': {fontSize: 20, bgcolor: 'black', color: theme.palette.green.main}}}>
                                    <Typography variant='body1'>
                                    Facebook
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                <Button variant="text" size='large' endIcon={<InstagramIcon />} sx={{color: 'black', ':hover': {fontSize: 20, bgcolor: 'black', color: theme.palette.green.main}}}>
                                    <Typography variant='body1'>
                                        Instagram
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                <Button variant="text" size='large' endIcon={<TwitterIcon />} sx={{color: 'black', ':hover': {fontSize: 20, bgcolor: 'black', color: theme.palette.green.main}}}>
                                    <Typography variant='body1'>
                                        Twitter
                                    </Typography>
                                </Button>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default NewsLetter