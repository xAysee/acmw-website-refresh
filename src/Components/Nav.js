import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ACMW from '../images/fullLogo.png';


const useStyles = makeStyles({
    appBarContainer:{
        //removes default styling on buttons
        background: 'transparent',
        boxShadow: 'none',
        
    },
    pointer: {
        //allows the image to be clickable
        maxWidth: '100px',
        maxHeight: '75px',
        width: 'auto',
        height: 'auto',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    buttonGroup: {
        //defines a width for the button group to allow use of float
        width: '100%',
        paddingLeft: '100px',
        paddingRight: '50px',
        paddingTop: '30px',
    },
    buttons: {
        //aligns the buttons right
        float: 'right'
    }
})

function Nav(props) {
    const classes = useStyles();
    const history = useHistory();
    
    const index = () => {
        history.push('/');
    }
    const indexV2 = () => {
        history.push('/indexV2');
    }
    const gwc = () => {
        history.push('/girls-who-code');
    }
    const events = () => {
        history.push('/events');
    }
    const officers = () => {
        history.push('/officers');
    }
    const contact = () => {
        history.push('/contact-us');
    }

    console.log(props.header);
    
    return(
        <AppBar className={classes.appBarContainer} position='static'>
            <Toolbar>
                {/* <Avatar className={classes.pointer} src={ACMW} alt='' onClick={index}/> */}
                <div className={classes.buttonGroup}>
                <img className={classes.pointer} src={ACMW} onClick={index} />
                    <div className={classes.buttons}>
                        <Button onClick={index}>Home</Button>
                        <Button onClick={indexV2}>Home V2</Button>
                        <Button onClick={gwc}>Girls Who Code</Button>
                        <Button onClick={events}>Events</Button>
                        <Button onClick={officers}>Officers</Button>
                        <Button onClick={contact}>Contact US</Button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Nav;