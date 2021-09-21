import React, { useEffect, useState } from 'react';
import { Card,CardContent,Button } from '@mui/material';
function CityHolder(props) {
    const [item,setItem]=useState({name:null,locations:[]});
    
    useEffect(()=>{
        setItem(props.item);
    },[])
    return (
        <Card 
                  >
                      <CardContent style={{textAlign:'center'}}>
                          <div>
                              {item.name}
                          </div>
                          <div style={{marginTop:'1rem'}}>
                              <img height={200} width={320} src="https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs" />
                          </div>
                          <div style={{marginTop:'1rem'}}>
                             {`Number of locations :${item.locations.length}`}
                          </div>
                          <div style={{marginTop:'1rem'}}>
                              <Button color="primary" variant="contained" onClick={()=>{
                                 props.handeIsViewCityOpenEvent(item);
                              }}>View</Button>
                          </div>
                      </CardContent>
                  </Card>
    );
}

export default CityHolder;