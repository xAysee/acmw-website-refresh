import Nav from '../Nav';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles, Paper } from '@material-ui/core';
import indexHeader from '../../images/test.png'
import footer from '../../images/footer.png'

const useStyles = makeStyles({
    paperContainer: {
        /*height: '350px',*/
        backgroundImage: `url(${indexHeader})`,
        backgroundSize: '100% 100%',
        boxShadow: 'none',
        borderRadius: '0px',
        display: 'block',
  maxWidth:'230px',
  maxHeight:'500px',
  width: 'auto',
  height: 'auto',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    columns: {
        width: '100%',
        margin: '0px'
    },
    headerText: {
        whiteSpace: 'nowrap',
        width: '450px'
    },
    text: {
        width: '450px',
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

function Index() {
    const classes = useStyles()

    const welcomeMessage = `
        The Missouri S&T ACM-W chapter aims to 
        facilitate a thriving community of women in 
        computing through the organizing of great 
        activities, networking, and mentorship 
        programs. We aim to address the issue of 
        retention of women in computer science by 
        creating a support system for academic and 
        professional pursuits and empower our 
        members to pursue their goals through 
        knowledge and education about women’s 
        contribution to technology. This group is 
        open to all students (male or female) 
        that wish to promote women in computing.`;

    const eventsMessage = `
        We provide social, educational, and outreach
        activities for women in the Computer Science
        department, in the university, and in the
        surrounding community. Here's some upcoming events:`;


    return(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Paper className={classes.paperContainer} style={{ maxWidth: '100%', width: 'auto', height: '450px' }}>
                <Nav /*header='header-menuHome.png'*/ />
            </Paper>
            <Grid className={classes.columns} container spacing={10} style={{ paddingTop: '5px', flex: '1' }}>
                <Grid item xs={6} style={{ paddingRight: '75px' }}>
                    <div className={classes.textContainer}>
                        <div>
                            <Typography className={classes.headerText} variant='h4'>Welcome</Typography>
                            <Typography className={classes.text} variant='body1'>
                                {welcomeMessage}
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{ paddingLeft: '75px', alignContent: 'center' }}>
                    <Typography className={classes.headerText} variant='h4'>
                        ACM-W Event Calendar
                    </Typography>
                    <Typography className={classes.text} variant='body1'>
                        {eventsMessage}
                    </Typography>
                    {/* Add events preview */}
                </Grid>
            </Grid>  
            <Paper className={classes.footerContainer}></Paper>
        </div>
    );
}

export default Index;