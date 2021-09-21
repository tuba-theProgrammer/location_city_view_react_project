import { Card, CardContent, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {Button} from '@material-ui/core'
function LocationHolder(props) {
    const [locationId,setLocationId]=useState();
    const [locationData,setLocationData]=useState({});
    useEffect(()=>{
        setLocationId(props.item)
    fetch(`https://api.photodino.com/locations/locations/${props.item}/`)
    .then(res => res.json())
    .then(data => {
        console.log(data);   
        setLocationData(data);
        props.setSelectedLocation(data);
    })
    },[]);
    
    return (
        <div>
            <Card>
                <CardContent>
                   <div>
                       {`Name ${locationData.name}`}
                   </div>
                   <div style={{marginTop:'1.5rem'}}>
                       {`Rent: ${locationData.rent}`}
                   </div>
                   <div style={{marginTop:'1.5rem'}}>
                       {`Street Name: ${locationData.street_name}`}
                   </div>
                   <div style={{marginTop:'1.5rem'}}>
                       {`Street Number: ${locationData.street_number}`}
                   </div>
                   <div style={{marginTop:'1.5rem'}}>
                       {`Postal Code ${locationData.postal_code}`}
                   </div>
                   <div style={{marginTop:'1.5rem'}}>
                       {`Status ${locationData.status}`}
                   </div>
                   <div style={{marginTop:'1.5rem'}}>
                       {`Phone ${locationData.phone}`}
                   </div>
                </CardContent>
                <Divider/>
                <div style={{textAlign:'center',marginTop:'1rem',paddingBottom:'1rem'}}>
                    <Button color="primary" variant="contained" onClick={
                        ()=>{
                            props.setIsUpdateeLocationOpen(true);
                        }
                    }>Update</Button>
                </div>
            </Card>
        </div>
    );
}

export default LocationHolder;