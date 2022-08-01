import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  SplineSeries,
  Legend,
  Title,
  Label,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';
import '../App.css'


const Devexpressreactchart =  ({dataObj}) => {
  const toolTipContent = ({text , targetItem}) => {
      return(
       <React.Fragment>
         {targetItem.point === 1 ? (
          <label>{'Total Likes : ' + text}</label>
         ): targetItem.point === 0 ? (
           <label>{'Total Members : ' + text}</label>
         ) : targetItem.point === 2 ? (
          <label>{'Total Matches : ' + text}</label>
         ) : targetItem.point === 3 ? (
          <label>{'Total Views : ' + text}</label>
         ) : ''}
       </React.Fragment>
        
      )
  }
  const titleComponent = ({text}) => {
    return(
      <div style={{display:'flex' , justifyContent:'space-evenly' , width:'100%'}}>
      <h3 style={{color: 'orchid' }}>Application Insight Graph</h3>
      </div>
    )
  }
  
 const customizeText = () => {
  return `members`;
}
    return(
    
    <Paper>
    {dataObj!==undefined?(
        <Chart
        data={dataObj}
      > 

                    
           
        <ArgumentAxis showLabels={true}>
         
        </ArgumentAxis>
        <ValueAxis  showLabels={true} />
  
        <SplineSeries  color='orange' valueField="value" argumentField="Argument" >
         
        </SplineSeries>
        <EventTracker />
        <Tooltip contentComponent={toolTipContent} />
        <Title textComponent={titleComponent} />
  
      </Chart>
    ):''}  
   
  </Paper>
    )
}
  


export default Devexpressreactchart