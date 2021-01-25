import { makeStyles, Paper, Grid, Avatar } from '@material-ui/core';

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

function Officers() {
    const classes = useStyles();
    return(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Paper className={classes.paperContainer}>
                <Nav />
            </Paper>
            <div style={{ flex: '1' }}>
                <h1>Officers Page</h1>
                <Grid container>
                    <Grid item xs={1}/>
                    <Grid item xs={10} sm={2}>
                        {/* <Avatar></Avatar> */}
                        Leopold
                    </Grid>
                    <Grid item xs={10} sm={2}>
                        {/* <Avatar></Avatar> */}
                        Catherine
                    </Grid><Grid item xs={10} sm={2}>
                        {/* <Avatar></Avatar> */}
                        Jordyn
                    </Grid><Grid item xs={10} sm={2}>
                        {/* <Avatar></Avatar> */}
                        Midori
                    </Grid><Grid item xs={10} sm={2}>
                        {/* <Avatar></Avatar> */}
                        Divya
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={2} />
                    <Grid item xs={8} sm={2}>
                        {/* <Avatar></Avatar> */}
                        Allison
                    </Grid>
                    <Grid item xs={8} sm={2}>
                        {/* <Avatar></Avatar> */}
                        Mary
                    </Grid>
                    <Grid item xs={8} sm={2}>
                        {/* <Avatar></Avatar> */}
                        Ayla
                    </Grid>
                    <Grid item xs={8} sm={2}>
                        {/* <Avatar></Avatar> */}
                        Rui
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </div>
            <Paper className={classes.footerContainer}></Paper>
        </div>
    );
}

export default Officers;