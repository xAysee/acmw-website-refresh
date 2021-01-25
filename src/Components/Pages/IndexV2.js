import Nav from '../Nav';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { Box, makeStyles, Paper } from '@material-ui/core';
import ACMWIcon from '../../images/wIcon.png';
import footer from '../../images/footerAlt.png';

const useStyles = makeStyles({
    textContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    columns: {
        width: '100%',
        margin: '0px'
    },
    text: {
        width: '350px',
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

function IndexV2() {
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
            <Nav />
            <div style={{ flex: '1' }}>
                <Grid container spacing={7} style={{ width: '100%' }}>
                    <Grid item xs={6}>
                        <div style={{ height:'500px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <div>
                                <Typography>
                                    <Box fontFamily='Segoe UI Black' fontStyle='italic' fontSize={125}>
                                        S&T
                                    </Box>
                                </Typography>
                                <Typography >
                                    <Box fontFamily='Segoe UI Black' fontSize={75}>
                                        ACM-W
                                    </Box>
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={{ borderRadius: '0px', boxShadow: 'none' }}>
                            <img src={ACMWIcon}></img>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid className={classes.columns} container spacing={10}>
                    <Grid item xs={6}>
                        <div className={classes.textContainer}>
                            <div>
                                <Typography className={classes.text} variant='h4'>Welcome</Typography>
                                <Typography className={classes.text} variant='body1'>
                                    {welcomeMessage}
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ alignContent: 'center' }}>
                        <Typography className={classes.text} variant='h4'>ACM-W Event Calendar</Typography>
                        <Typography className={classes.text} variant='body1'>
                            {eventsMessage}
                        </Typography>
                        {/* Add events preview */}
                    </Grid>
                </Grid>
            </div>
            <Paper className={classes.footerContainer}>Footer</Paper>
        </div>
    );
}

export default IndexV2;