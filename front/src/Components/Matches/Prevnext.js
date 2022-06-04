import * as React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActions } from '@mui/material';
const Prevnext = ({tier , pagination})=>{
const [count, setCount] = React.useState(1);

React.useEffect(() => {
    
  });
const handleLeftClick = ()=>{
    if(count!==1){
        const newCount = count - 1
        setCount(newCount)
        console.log('left click call' , tier , count)
        pagination(tier , newCount)
    }
}
const handleRightClick = ()=>{
    const newCount = count + 1
    setCount(newCount)
    console.log('right click call' , tier , count)
    pagination(tier , newCount)
}
    return(
        <CardActions style={{ justifyContent: 'center' }}>
        {console.log('help me whats up')}
        <IconButton onClick={handleLeftClick}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Typography style={{
        background: '#efefef',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        textAlign: 'center',
        paddingTop: '3px',}}>{count}</Typography>
    <IconButton onClick={handleRightClick} style={{ marginLeft: 0 }}>
      <KeyboardArrowRightIcon />
    </IconButton>
    </CardActions>
        
    )
}

export default Prevnext