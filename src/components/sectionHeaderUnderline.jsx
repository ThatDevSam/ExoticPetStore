
import { useTheme } from '@mui/material/styles'

function Underline () {

    //Initialize theme from the theme provider.
    const theme = useTheme()

    return(
        <>
            {/*Section heading underline */}
            <div style={{width: '6rem', height: '0.25rem', background: theme.palette.green.main, marginLeft: 'auto', marginRight: 'auto' }}></div>
        </>
    )
}

export default Underline