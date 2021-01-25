import { makeStyles, Typography, Paper } from '@material-ui/core';

import Nav from '../Nav';
import header from '../../images/header-menuOther.png';
import footer from '../../images/footer.png'

const useStyles = makeStyles({
    paperContainer: {
        height: '175px',
        backgroundImage: `url(${header})`,
        backgroundSize: '100% 100%',
        boxShadow: 'none',
        borderRadius: '0px'
    },
    footerContainer: {        
        width: '100%',
        minHeight: '5vh',   
        backgroundImage: `url(${footer})`,
        backgroundSize: 'cover',
        boxShadow: 'none',
        borderRadius: '0px'
    }
})

function Events() {
    const classes = useStyles();
    return(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Paper className={classes.paperContainer}>
                <Nav />
            </Paper>
            <div style={{ flex: '1' }}>
                <Typography variant='h2' style={{ paddingLeft: '100px' }}>Events</Typography>
            </div>
            {/* Add calendar */}
            {/* Add text */}
            {/* Add event list*/}
            <Paper className={classes.footerContainer}></Paper>
        </div>
    );
}

export default Events;