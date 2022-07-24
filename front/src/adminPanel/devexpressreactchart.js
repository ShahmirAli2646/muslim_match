import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Legend,
  Title
} from '@devexpress/dx-react-chart-material-ui';



const Devexpressreactchart =  (dataObj) => {
 {console.log('what am i recieving' , dataObj)}
 const data = [
  { argument: 'members', value: dataObj.members },
  { argument: 'likes', value: dataObj.likes },
  { argument: 'matches', value: dataObj.matches },
  { argument: 'views', value: dataObj.views },
];
    return(
    
    <Paper>
    <Chart
      data={data}
    > 
    <Legend position="top"
                    horizontalAlignment="center"
                    verticalAlignment="top" />
         
      <ArgumentAxis />
      <ValueAxis />

      <LineSeries valueField="value" argumentField="argument" />

    </Chart>
  </Paper>
    )
}
  


export default Devexpressreactchart