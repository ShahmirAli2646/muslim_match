import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Description = () => {
    return (
      <div style={{background:'#009da0' , padding:'0px' , textAlign:'center'}}>
          <h1 style={{display:'inline-block' , fontSize:28 , textAlign:'center' , color:'#d3d3d3' , fontFamily:'fantasy' , fontWeight:'normal'}}>
              The Free Mariage Agency
          </h1>
          <h2 style={{fontSize:25 , fontFamily:'fantasy' , color:'#d3d3d3' , fontWeight:'normal'}}>
          Pure Muslim Match is only for practising Muslims who pray 5x a day
          </h2>
          <p style={{fontSize:"large" , fontFamily:'fantasy' , color:'#bfbfbf' , fontStyle:'italic' , fontWeight:'normal'}}>
          Pure Muslim Match is 100% free.  However, if you want to make a donation to support your Muslim brothers and sisters complete half of their deen, your donations are welcome!  Visit our donations page for more information insha’Allah.
          </p>
          <div style={{display:'flex' , justifyContent:'center'}}>

          
          <Stack spacing={10} direction="row">
      <Button style={{background:'#e5598f' , fontSize:'18px' , border:'5px solid white' , borderRadius:'0px' , color:'#fff' , textTransform:'lowercase' , textDecoration:'none'}} variant="outlined">Register</Button>
      <Button style={{background:'#00c4d6' , fontSize:'18px' , color:'#fff' , borderRadius:'0px' , border:'4px solid white' , textTransform:'lowercase' , textDecoration:'none'}} variant="outlined">Donate</Button>

    </Stack>
    </div>

    <h3 style={{fontFamily:'fantasy' , fontWeight:'normal' ,color:'#fff' , fontSize:'large'}}>
    وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
    </h3>
    <p style={{color:'#ededed' , fontWeight:'normal' , fontStyle:'italic' , fontSize:20}}>
    And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy.  Indeed in that are signs for a people who give thought. 
    </p>
    <h3 style={{color:'#ededed' , fontWeight:'normal' , fontStyle:'italic' , fontSize:25}}>
    [The Noble Qur’an 30:21]
    </h3>

      </div>
    )
}

export default Description