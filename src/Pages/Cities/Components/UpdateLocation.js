import { Card, CardContent, colors, Divider, Grid } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { Headings } from '../../../Support/Headings/Headings';
import { lightBorder } from '../../../Theme/borders';
import { SimpleTextField } from '../../../Support/TextFields/TextFields';
import { SimpleLinks } from '../../../Support/Link/Links';
import { SimpleButton } from '../../../Support/Buttons/Buttons';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function UpdateLocation(props) {
    // {
    //     "id": 55,
    //     "location_events": [],
    //     "booked_days": [],
    //     "name": "Wesel Hotel",
    //     "rent": "283.92",
    //     "email": "mikekostolzin@aol.de",
    //     "phone": "+49(0)3847188103",
    //     "coordinates": "53.062,6.793",
    //     "street_number": "90",
    //     "street_name": "Naserallee",
    //     "postal_code": "69789",
    //     "status": "Available",
    //     "time_added": "2021-09-20T13:20:02.607551Z",
    //     "city": 6
    // }
    const [Name,setName]=useState();
    const [Rent,setRent]=useState();
    const [Email,setEmail]=useState();
    const [PhoneNum,setPhoneNum]=useState();
    const [Coordinate,setCoordinates]=useState();
    const [StreetNum,setStreetNum]=useState();
    const [StreetName,setStreetName]=useState();
    const [PostalCode,setPostalCode]=useState();
    const [Status,setStatus]=useState();
    const [City,setCity]=useState();
    const [listOfCities,setListOfCities]=useState([]);
    useEffect(()=>{
    fetch('https://api.photodino.com/locations/cities/')
    .then(res => res.json())
    .then(data => {
        setListOfCities(data);
    });
    
    setName(props.selectedLocation.name);
    setRent(props.selectedLocation.rent);
    setEmail(props.selectedLocation.email);
    setPhoneNum(props.selectedLocation.phone);
    setCoordinates(props.selectedLocation.coordinates);
    setStreetNum(props.selectedLocation.street_number);
    setStreetName(props.selectedLocation.street_name);
    setPostalCode(props.selectedLocation.postal_code);
    setStatus(props.selectedLocation.status);
    setCity(props.selectedLocation.city);
    },[])

    const handelLocationInEvent = (event)=>{
        let location_id = '164'
        const formData = new FormData();
            formData.append('id',props.selectedLocation.id)
            formData.append('name' ,Name)
            formData.append('rent', Rent)
            formData.append('email', Email)
            formData.append('phone' ,PhoneNum)
            formData.append('coordinates', Coordinate)
            formData.append('street_number', StreetNum)
            formData.append('street_name', StreetName)
            formData.append('postal_code', PostalCode)
            formData.append('city', City)
            formData.append('status',Status)
        
       const options = {
           method:'PUT',
           headers: {
               'Content-Type': 'application/json'
           },
           body: formData
       }
       fetch(`https://api.photodino.com/locations/locations/164/`)
       .then(res => res.json())
       .then(data => {console.log(data)})
    }

    const handelStatusChange = (event) => {
    
      setStatus(event.target.value);
    };
    const handelCityChange = (event) => {
        setCity(event.target.value);
      };
    return (
        <div style={{paddingRight:'5rem',paddingLeft:'5rem',height:1500}}>
            
        <div style={{padding:'1rem'}}>
                   <Headings text={"Update location"} fontSize={30} fontWeight={'bold'}/>
        </div>
               <Divider/>
               <Grid container>
                   <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                       
                            <SimpleTextField 
                                   value={Name}
                                   setValue={setName}
                                   label="Name"
                                   fullWidth
                               />
                   </Grid>
                   <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                                                 <SimpleTextField 
                                   value={Rent}
                                   setValue={setRent}
                                   label="Rent"
                                   fullWidth
                                   
                               />
                   </Grid>

                   <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                                                  <SimpleTextField 
                                   value={Email}
                                   setValue={setEmail}
                                   label="Email"
                                   fullWidth
                                   
                               />
                   </Grid>
                   <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                                                  <SimpleTextField 
                                   value={PhoneNum}
                                   setValue={setPhoneNum}
                                   label="Phone"
                                   fullWidth
                                   
                               />
                   </Grid>
                   <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                
                               <SimpleTextField 
                                   value={Coordinate}
                                   setValue={setCoordinates}
                                   label="Coordinates"
                                   fullWidth
                                   
                               />
                   </Grid>

                   <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                   
                               <SimpleTextField 
                                   value={StreetNum}
                                   setValue={setStreetNum}
                                   label="Street Number"
                                   fullWidth
                                   
                               />
                   </Grid>
                   <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                
                               <SimpleTextField 
                                   value={StreetName}
                                   setValue={setStreetName}
                                   label="Street Name"
                                   fullWidth
                                   
                               />
                   </Grid>
                   <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                   
                               <SimpleTextField 
                                   value={PostalCode}
                                   setValue={setPostalCode}
                                   label="Postal Code"
                                   fullWidth
                                   
                               />
                   </Grid>

                   <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                   
                               <SimpleTextField 
                                   value={MediaKeyStatusMap}
                                   setValue={setStatus}
                                   label="Status"
                                   fullWidth
                                   
                               />
                   </Grid>
                   <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                                                 <SimpleTextField 
                                   value={City}
                                   setValue={setCity}
                                   label="City"
                                   fullWidth
                                   
                               />
                   </Grid>
                   <Grid item xs={12}>
                   <FormControl sx={{ m: 3, minWidth: 300 }}>
                         <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                         <Select
                           labelId="demo-simple-select-helper-label"
                           id="demo-simple-select-helper"
                           value={Status}
                           label="Status"
                           onChange={handelStatusChange}
                           style={{width:620}}
                         >
                         <div>
                         <MenuItem value={10} onClick={handelStatusChange}>Available</MenuItem>
                             </div>  
                         <div>
                         <MenuItem value={20}>UnAvailable</MenuItem>
                         <div>
                             </div>  
                             <MenuItem value={30}>Active</MenuItem>
          
                             </div>  
                         </Select>
                         <FormHelperText>With label + helper text</FormHelperText>
                       </FormControl>
                   </Grid>
                   
                   <Grid item xs={12}>
                   <FormControl sx={{ m: 3, minWidth: 300 }}>
                         <InputLabel id="demo-simple-select-helper-label">Cities</InputLabel>
                         <Select
                           labelId="demo-simple-select-helper-label"
                           id="demo-simple-select-helper"
                           value={City}
                           label="City"
                           onChange={handelCityChange}
                           style={{width:620}}
                         >
         
                        {
                            listOfCities.map((item,index)=>{
                                return <div> <MenuItem  value={index}>{item.name}</MenuItem></div>
                            })
                        }
                           
                          
          
                         </Select>
                         <FormHelperText>With label + helper text</FormHelperText>
                       </FormControl>
                   </Grid>
                   <Grid item xs={12} style={{textAlign:'right'}}>
                              <SimpleButton
                                   name="POST"
                                   handelClick={(e)=>{
                                     
                                       handelLocationInEvent(e);
                                   }}
                              />
                   </Grid>
                 
               </Grid>
              
</div>
    );
}

export default UpdateLocation;