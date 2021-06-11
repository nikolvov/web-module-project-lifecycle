import React from 'react';
import {
    createMuiTheme,
    withStyles,
    Grid,
    Button,
    Container,
    Typography,
    TextField
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {blue} from '@material-ui/core/colors';
import {fade} from '@material-ui/core/styles/colorManipulator';
const theme = createMuiTheme();
const styles={
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 0),
    },
    heroButtons: {
      marginTop: theme.spacing(0),
    },
    startButton:{
        '&:hover': {
            backgroundColor:blue[300]
          }
    },
    mainContainer:{
        backgroundColor:fade(blue[50],0.5),
        minHeight: '100vh',
    }
};
const defaultLink = '/nikolvov';
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            userName:''
        }
    }
    onChange=(e)=>{
        this.setState({
            userName:e.target.value
        });
    }
    render(){
        const {classes} = this.props;
        const {userName} = this.state;
        const {onChange} = this;
        return(
        <Container className={classes.mainContainer}>
            <div className={classes.heroContent}>
                <Container maxWidth='sm'>
                    <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                        GitHub UserCards
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Type in a GitHub user and see a cardlist of their followers. 
                    </Typography>
                </Container>
            </div>
            <div className={classes.heroButtons}>
                <Grid container spacing={2} alignItems='center' direction='column'>
                    <Grid item>
                        <TextField value={userName} onChange={onChange} label={'GitHub User Name'} variant='outlined' />
                    </Grid>
                    <Grid item>
                        <Button className={classes.startButton} component={Link} to={userName?`/${userName}`:defaultLink} variant='contained' color='primary'>
                            {userName?'Search':'Enter'}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
        );
    }
}
export default withStyles(styles)(Home);