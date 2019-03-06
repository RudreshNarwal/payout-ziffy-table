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
const divStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#eec3f7',
    position: 'relative',
    boxSizing: 'borderBox',
    left: '-2%',
    top: '-5%',
    margin: '0px 0px 0px 0px',
    padding: '0px 0px 0px 0px',
};
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
          
          <div style={divStyle}>
            <img style={{padding: '10px'}} src={People} alt="" /> 
          </div>
          <h2>346</h2>
          <p>Total Payouts </p>
          
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Card className={classes.Card}
            onMouseOver={this.toggleRaised2}
            onMouseOut={this.toggleRaised2}
            raised={this.state.raised2}>

          <div style={{ width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#d4a9f9',
                        position: 'relative',
                        boxSizing: 'borderBox',
                        left: '-2%',
                        top: '-5%',
                        margin: '0px 0px 0px 0px',
                        padding: '0px 0px 0px 0px',}}> 
             <img style={{padding: '12px'}} src={Purse} alt=""/>
          </div>   
          <h2>346</h2>
          <p>Total Payouts Completed </p>
          
          
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card className={classes.Card}
             onMouseOver={this.toggleRaised3}
            onMouseOut={this.toggleRaised3}
            raised={this.state.raised3} >

          <div style={{width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#f9d495',
                        position: 'relative',
                        boxSizing: 'borderBox',
                        left: '-2%',
                        top: '-5%',
                        margin: '0px 0px 0px 0px',
                        padding: '0px 0px 0px 0px',}}>
            <img style={{padding: '10px'}} src={Wrench} alt=""/>
          </div>
          <h2>346</h2>
          <p>Pending Service Requests </p>
          
          
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card className={classes.Card}
              onMouseOver={this.toggleRaised4}
            onMouseOut={this.toggleRaised4}
            raised={this.state.raised4}>
          <div style={{width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#f79ba6',
                        position: 'relative',
                        boxSizing: 'borderBox',
                        left: '-2%',
                        top: '-5%',
                        margin: '0px 0px 0px 0px',
                        padding: '0px 0px 0px 0px',}}>
            <img style={{padding: '12px'}} src={Shape} alt=""/>
          </div> 
          <h2>346</h2>
          <p>Finance Rejections </p>
          
          
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card className={classes.Card}
              onMouseOver={this.toggleRaised5}
            onMouseOut={this.toggleRaised5}
            raised={this.state.raised5} >
          <div style={{width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#abccf2',
                        position: 'relative',
                        boxSizing: 'borderBox',
                        left: '-2%',
                        top: '-5%',
                        margin: '0px 0px 0px 0px',
                        padding: '0px 0px 0px 0px',}}>          
            <img style={{padding: '10px 10px 10px 14px'}} src={Under} alt=""/>
          </div> 
          <h2>346</h2>
          <p>Total Amount Payable </p>
          
          
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card className={classes.Card}
              onMouseOver={this.toggleRaised6}
            onMouseOut={this.toggleRaised6}
            raised={this.state.raised6}>
          <div style={{width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#cbefa2',
                        position: 'relative',
                        boxSizing: 'borderBox',
                        left: '-2%',
                        top: '-5%',
                        margin: '0px 0px 0px 0px',
                        padding: '0px 0px 0px 0px',}}>
            <img style={{padding: '12px 10px'}} src={Path} alt=""/>
          </div>  
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
