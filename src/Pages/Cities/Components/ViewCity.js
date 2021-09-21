import produce from 'immer';
import React, { useEffect, useState } from 'react';
import LocationHolder from './LocationHolder';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import {Divider,Button} from '@material-ui/core'
import UpdateLocation from './UpdateLocation';
function ViewCity(props) {
   const [listOfLocations,setListOfLocations]=useState([]);
   const [isUpdateeLocationOpen,setIsUpdateeLocationOpen]=useState(false)
   const [displayedList,setDisplayed]=useState([]);
   const [selectedLocation,setSelectedLocation]=useState();
   useEffect(()=>{
    setDisplayed( props.selectedCity.locations.map((item,index)=>{
            return(   
                <ImageListItem key={index}>
                  <LocationHolder setIsUpdateeLocationOpen={setIsUpdateeLocationOpen} setSelectedLocation={setSelectedLocation} item={item}/>
                </ImageListItem>
                )
        }));
   },[])

   
    return (
        <div>
            <div style={{cursor:'pointer',fontSize:15,fontWeight:'bold'}} onClick={()=>{
                props.setViewCityOpen(false)
            }}>
                View All Cities.
            </div>
            <div style={{textAlign:'center',cursor:'pointer',fontSize:40,marginTop:'2rem'}}>
                {props.selectedCity.name}
            </div>
                         <div style={{textAlign:'center'}}>
                          <h1>Famous Locations</h1>
                          <Divider/>
                          </div>    
                          <div>
                              {
                                  (isUpdateeLocationOpen===true)?(
                                      <div sx={{ width:'100%',padding:'1rem',  backgroundColor:'#c2c8ff'}}>
                                        <div onClick={()=>{
                                            setIsUpdateeLocationOpen(false);
                                        }}
                                        style={{cursor:'pointer',fontSize:18,fontWeight:'bold'}}
                                        >
                                            View All Locations.
                                        </div>
                                        <UpdateLocation selectedLocation={selectedLocation} />
                                      </div>
                                  ):
                                  (
                                      <div>
                          <ImageList sx={{ width:'100%',padding:'1rem',  backgroundColor:'#c2c8ff'}} cols={3} rowHeight={340}>
                                {displayedList}
                          </ImageList>
                                      </div>
                                  )
                              }
                          </div>
                        
        </div>
    );
}

export default ViewCity;