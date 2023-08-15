
import{
    Box, 
    Container,
    Grid,
    Typography,
    Button,
    ImageList,
    ImageListItem,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

const picData = [
    {
        img: './src/assets/HeroImages/exoticBirdImage.png',
        title: 'Tucan',
        id: 1,
    },
    {
        img: './src/assets/HeroImages/clownFishImage.png',
        title: 'Clown Fish',
        id: 2,
    },
    {
        img: './src/assets/HeroImages/LizardImage.png',
        title: 'Lizard',
        id: 3,
    },
    {
        img: './src/assets/HeroImages/snakeImage.png',
        title: 'Snake',
        id: 4,
    },
    {
        img: './src/assets/HeroImages/cockatooImage.png',
        title: 'Cockatoo',
        id: 5,
    },
    {
        img: './src/assets/HeroImages/ranchuFishImage.png',
        title: 'Ranchu',
        id: 6,

    },
    
]


function Hero() {
    //Initialize theme from the theme provider.
    const theme = useTheme()
    return(
        <>
        <Container maxWidth='lg' sx={{mb: 3}}>
            <Box sx={{flexGrow: 1}}>
                <Grid container columnSpacing={2} flexDirection={'row'} >
                    <Grid container item xs={12} md={6} sx={{justifyContent:'center', alignItems: 'center', p: 10}}>
                        <Grid item xs={12}>
                            <Typography variant='h3' sx={{textTransform: "capitalize"}}>
                                Find a new friend that is perfect for you!
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1' sx={{mt: 2, mb: 4}}>
                                Wether you're looking for a new exotic friend or trying to take care of the one you already have we can help! Matching you with the perfect pet, pet accessory, or food is why we are here. Our friendly staff are designated pet experts, so they can answer all your questions. Come visit our store or shop online, either way we garuntee a superior expereince for you and your pet. 
                            </Typography>
                        </Grid>
                        <Grid item xs={12}  sx={{display:'flex', justifyContent:'center', alignItems: 'center',}}>
                            <Button variant="contained" sx={{bgcolor: theme.palette.green.main,  ':hover': {bgcolor: 'white', color: theme.palette.green.main, borderColor: theme.palette.green.main, border: 'solid', }}}
                            >
                                <Typography variant='h5' sx={{fontWeight: 'bold',}}>
                                    Shop Now
                                </Typography>
                            </Button>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12} md={6} columnGap={{sm: 2,md: 10}}  sx={{bgcolor: theme.palette.green.light, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <ImageList sx={{ width: 500, height: 550 }} variant="woven" cols={3} gap={8}>
                            {picData.map((pic) => (
                                <ImageListItem key={pic.id}>
                                <img
                                    src={`${pic.img}?w=161&fit=crop&auto=format`}
                                    srcSet={`${pic.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    alt={pic.title}
                                    loading="lazy"
                                    style={{objectFit:'fill'}}
                                />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </>
    )
}

export default Hero