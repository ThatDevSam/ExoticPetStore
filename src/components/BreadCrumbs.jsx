
import { useTheme } from '@mui/material/styles'
import{
    Backdrop,
    CircularProgress,
    Box, 
    Container,
    Grid,
    Typography,
    Button,
    Breadcrumbs,
} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

function Breadcrumbs () {
    return(
        <>
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
        </Breadcrumbs>
        </>
    )
}

export default Breadcrumbs