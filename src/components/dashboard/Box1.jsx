import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

class Box1 extends Component {
    render() {
        return (
            <Grid container className='box1' spacing={2}>
                <Grid className='boxes' item xs={12} sm={6}><div className="item"></div></Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={2} className='boxes'>
                        <Grid item xs={12} sm={6}><div className="item"></div></Grid>
                        <Grid item xs={12} sm={6}><div className="item"></div></Grid>
                        <Grid item xs={12} sm={6}><div className="item"></div></Grid>
                        <Grid item xs={12} sm={6}><div className="item"></div></Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Box1;