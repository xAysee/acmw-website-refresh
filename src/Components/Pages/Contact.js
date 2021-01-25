import { makeStyles, Paper } from '@material-ui/core';

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

function Contact() {
    const classes = useStyles();
    return(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Paper className={classes.paperContainer}>
                <Nav />
            </Paper>
            <div style={{ flex: '1' }}>
                <h1>Contact Us Page</h1>
            </div>
            
            <Paper className={classes.footerContainer}></Paper>
        </div>
    );
}

export default Contact;