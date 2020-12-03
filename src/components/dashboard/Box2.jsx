import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

class Box2 extends Component {
    render() {
        return (
            <Grid container className='box1' spacing={2}>
                <Grid className='boxes' item xs={12} sm={6}><div className="item"></div></Grid>
                <Grid className='boxes' item xs={12} sm={6}><div className="item"></div></Grid>
            </Grid>
        );
    }
}

export default Box2;