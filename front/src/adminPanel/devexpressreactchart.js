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

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
];

const Devexpressreactchart =  () => {
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