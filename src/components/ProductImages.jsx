import { useState } from "react"
import{
    Grid,
    CardActionArea,
    Card,
    CardMedia,
} from '@mui/material'

//Component that manages the single product image and the smaller images beneath it.
function ProductImages (props) {

    let imgData = [
        {
            img: `${props.img}`,
            src: `${props.descrp}`,
        },
        {
            img: '../src/assets/ProductImages/ProductImage1.png',
            src: 'Stock Image'
        },
        {
            img: '../src/assets/ProductImages/ProductImage2.png',
            src: 'Stock Image'
        },
        {
            img: '../src/assets/ProductImages/ProductImage3.png',
            src: 'Stock Image'
        }
    ]

    const [mainImage, setMainImage] = useState(imgData[0])

    
    return(
        <>
            {/* Main image */}
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2}}>
                <Card sx={{}}>
                        <CardMedia
                        component="img"
                        image={mainImage.img}
                        alt={mainImage.descrp}
                        aria-label={mainImage.descrp}
                        sx={{ objectFit: 'contain', maxHeight: 300, maxWidth: 'auto'}}
                        />
                </Card>
            </Grid>

            {/* Secondary images */}
            <Grid container item xs={10} columnSpacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {imgData.map((img, index) => 
                    <Grid item xs={3} >
                        <Card sx={{}}>
                            <CardActionArea
                                onClick={() => setMainImage(imgData[index])}
                            >
                                <CardMedia
                                component="img"
                                image={img.img}
                                alt={img.descrp}
                                aria-label={img.descrp}
                                sx={{ objectFit: 'contain', maxHeight: 100, maxWidth: 'auto'}}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default ProductImages