import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import{
    Typography,
    Box, 
    Grid,
    Button,
    Container
} from '@mui/material'
// import NotFoundImage from 

const Error = (props) => {
    
    //Initialize theme from the theme provider.
    const theme = useTheme()

    return(
        <> 
        <Container maxWidth='md' sx={{}}>
            <Box sx={{ flexGrow: 1, minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item md={8} >
                        <img src={'../src/assets/HeroImages/NotFoundImage.png'} alt='not found' style={{width: '100%', display: 'block', objectFit: 'cover'}}/>
                    </Grid>
                    <Grid  item md={10} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant='h6'>
                            {props.msg}
                        </Typography>
                    </Grid>
                    <Grid item md={8} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Link to={'/'}>
                            <Button variant='contained' sx={{bgcolor: theme.palette.green.main,  ':hover': {bgcolor: 'white', color: theme.palette.green.main, borderColor: theme.palette.green.main, border: 'solid'}}}>
                                Home 
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
            
        </>
    )
}

export default Error