import { useState } from "react"
import{
    Box, 
    Container,
    Grid,
    Button,
} from '@mui/material'

function ProductImages (props) {
    const [mainImage, setMainImage] = useState(images[0])
    return(
        <>
            {/* Main image */}
            <Grid item xs={12}>
                <Box sx={{flexGrow: 1}}>
                    
                </Box>
            </Grid>
        </>
    )
}

export default ProductImages