import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <>
                <Grid container spacing={2} className='header'>
                    <Grid item xs={12} sm={2}><div className="item"></div></Grid>
                    <Grid item xs={12} sm={true}></Grid>
                    <Grid item xs={12} sm={2}><div className="item"></div></Grid>
                    <Grid item xs={12} sm={1}><div className="item"></div></Grid>
                </Grid>

                <Grid container spacing={2} className='header'>
                    <Grid item xs={12} sm={4}><div className="item"></div></Grid>
                    <Grid item xs={12} sm={true}></Grid>
                    <Grid item xs={12} sm={3}><div className="item"></div></Grid>
                    <Grid item xs={12} sm={2}><div className="item"></div></Grid>
                </Grid>
            </>
        );
    }
}

export default Header;