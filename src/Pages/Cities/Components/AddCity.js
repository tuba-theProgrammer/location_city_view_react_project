import { Headings } from '../../../Support/Headings/Headings';
import { lightBorder } from '../../../Theme/borders';
import { SimpleTextField } from '../../../Support/TextFields/TextFields';
import { SimpleLinks } from '../../../Support/Link/Links';
import { SimpleButton } from '../../../Support/Buttons/Buttons';
import { Card, CardContent, colors, Divider, Grid } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
function AddCity(props) {
    const [Code,setCode]=useState();
    const [Name,setName]=useState();
    const [response,setResponse]=useState('');
   const handelCityInEvent = (event)=>{
        const data = { 
                  name: Name,
                  code: Code
                }
       const options = {
           method:'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       }
       fetch('https://api.photodino.com/locations/cities/',options)
       .then(res => res.json())
       .then((data) => {
        
            alert(data.code[0]);
       
       })
    }
    return (
        <div style={{paddingLeft:'5rem',paddingRight:'5rem',marginTop:'4rem'}}>
            
                     <div style={{padding:'1rem'}}>
                                <Headings text={"Add new city"} fontSize={30} fontWeight={'bold'}/>
                            </div>
                            <Divider/>
                            <Grid container>
                                <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                                    
                                <Headings text={"Code"} fontSize={18} fontWeight={'bold'}/>
                                            <SimpleTextField 
                                                value={Code}
                                                setValue={setCode}
                                                label="Code"
                                                fullWidth
                                            />
                                </Grid>
                                <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                                <Headings text={"Name"} fontSize={18} fontWeight={'bold'}/>
                                            <SimpleTextField 
                                                value={Name}
                                                setValue={setName}
                                                label="Name"
                                                fullWidth
                                                
                                            />
                                </Grid>
                                <Grid item xs={12} style={{textAlign:'right'}}>
                                           <SimpleButton
                                                name="Put"
                                                handelClick={(e)=>{
                                                  
                                                    handelCityInEvent(e);
                                                }}
                                           />
                                </Grid>
                               
                            </Grid>
                           
        </div>
    );
}

export default AddCity;