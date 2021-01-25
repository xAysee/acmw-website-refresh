import { styled, Typography, Paper, makeStyles } from '@material-ui/core';
import Nav from '../Nav';

const useStyles = makeStyles({
    
})

function GWC() {
    const mailingList = `
    The Missouri S&T ACM-W chapter aims to facilitate a thriving community of women in
    computing through the organizing of greatr activities, networking, and mentorship.`

    const eventsMessage = `
        We provide social, educational, and outreach
        activities for women in the Computer Science
        department, in the university, and in the
        surrounding community. Here's some upcoming events:`;

    const projectsMessage = `
    Here are some awesome projects that ACM-W has been a part of.`

    return(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Paper>
                <Nav />
            </Paper>
            <h1>GWC Page</h1>
            {/* Add background asset */}
            <Paper>
                <Typography variant='h4'>Join our College Loop!</Typography>
                <Typography variant='body1'>{mailingList}</Typography>
                {/* Add email intake */}
            </Paper>

            <Paper>
                <Typography variant='h4'>GWC Upcoming Events</Typography>
                <Typography variant='body1'>{eventsMessage}</Typography>
                {/* Add events preview */}
            </Paper>

            <Paper>
                <Typography variant='h4'></Typography>
                <Typography variant='body1'>{eventsMessage}</Typography>
            </Paper>
            
            <Paper>
                <Typography variant='h4'>Projects</Typography>
                <Typography variant='body1'>{projectsMessage}</Typography>
                {/* Add projects preview */}
            </Paper>
            
            <Paper>
                Footer
            </Paper>
            {/* Add social media and email in bottom right */}
        </div>
    );
}

export default GWC;

