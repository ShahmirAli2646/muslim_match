import * as React from 'react';

import { Container } from '@mui/material';
import TotalMembersCard from './TotalMembersCard'
import ActivityPanel from './ActivityPanel'
import MemberCardsSlider from './MemberCardsSlider'
import MetricChart from './metricChart'
import { Grid } from '@mui/material';



class Admin extends React.Component {
    constructor(props) {
        super(props)
         
    }
    
    render() {
        return (
            <Container maxWidth="xl" style={{padding:'50px'}}>
            <Grid container spacing={2}>
                <Grid item xl={3} lg={4} md={12} sm={12}>
                    
                        <TotalMembersCard/>
                    
                </Grid>
                <Grid item xl={6} lg={5} md={12} sm={12} >
                    <MetricChart/>
                </Grid>
                <Grid item xl={3} lg={3} md={12} sm={12}>
                    <ActivityPanel/>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} >
                    <MemberCardsSlider/>
                </Grid>
            </Grid>
            </Container>
        )
    }
}
export default Admin