import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import People from './multiple-users-silhouette.png';
import Purse from './purse.png';
import Wrench from './open-wrench-tool-silhouette.png';
import Shape from './Shape.png';
import Under from './_.png';
import Path from './Path.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  Card: {
    padding: theme.spacing.unit * 2,
    textAlign: 'auto',
    height: '130px',
    color: theme.palette.text.secondary,
  },
});

class Test extends Component {
  
    state = {
        raised:false,
        raised2:false,
        raised3:false,
        raised4:false,
        raised5:false,
        raised6:false
      }
    
      toggleRaised = () => this.setState({raised:!this.state.raised});
      toggleRaised2 = () => this.setState({raised2:!this.state.raised2});
      toggleRaised3 = () => this.setState({raised3:!this.state.raised3});
      toggleRaised4 = () => this.setState({raised4:!this.state.raised4});
      toggleRaised5 = () => this.setState({raised5:!this.state.raised5});
      toggleRaised6 = () => this.setState({raised6:!this.state.raised6});

  render(){  
  const { classes } = this.props;


  return (
    <div className={classes.root}>
     <div zDepth={-1} style={{ margin: '20px 36px 36px 36px', position: 'relative' }}>
      <Grid container spacing={24} >
        <Grid item xs={6} sm={2}>
          <Card className={classes.Card}
            onMouseOver={this.toggleRaised} 
            onMouseOut={this.toggleRaised} 
            raised={this.state.raised}>
          

          <img src={People} alt="" /> 
          <h2>346</h2>
          <p>Total Payouts </p>
          
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Card className={classes.Card}
            onMouseOver={this.toggleRaised2}
            onMouseOut={this.toggleRaised2}
            raised={this.state.raised2}>

         
          <img src={Purse} alt=""/>
          <h2>346</h2>
          <p>Total Payouts Completed </p>
          
          
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card className={classes.Card}
             onMouseOver={this.toggleRaised3}
            onMouseOut={this.toggleRaised3}
            raised={this.state.raised3} >

          
          <img src={Wrench} alt=""/>
          <h2>346</h2>
          <p>Pending Service Requests </p>
          
          
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card className={classes.Card}
              onMouseOver={this.toggleRaised4}
            onMouseOut={this.toggleRaised4}
            raised={this.state.raised4}>

          <img src={Shape} alt=""/> 
          <h2>346</h2>
          <p>Finance Rejections </p>
          
          
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card className={classes.Card}
              onMouseOver={this.toggleRaised5}
            onMouseOut={this.toggleRaised5}
            raised={this.state.raised5} >

          <img src={Under} alt=""/> 
          <h2>346</h2>
          <p>Total Amount Payable </p>
          
          
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card className={classes.Card}
              onMouseOver={this.toggleRaised6}
            onMouseOut={this.toggleRaised6}
            raised={this.state.raised6}>

          <img src={Path} alt=""/>
          <h2>346</h2>
          Total Amount Paid 
          
          
          </Card>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}
}

export default withStyles(styles)(Test);
