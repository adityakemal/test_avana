import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Box1 from '../components/dashboard/Box1';
import Header from '../components/dashboard/Header';
import Box2 from '../components/dashboard/Box2';



class Dashboard extends Component {
    render() {
        return (
            <>
                <Grid item xs={12} sm={true} className='dashboard'>
                    <Header />
                    <Box1 />
                    <Box2 />
                </Grid>
            </>
        );
    }
}

export default Dashboard;