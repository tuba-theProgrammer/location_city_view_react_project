import { Card, CardContent, Grid } from '@mui/material';
import React, { useEffect,useState } from 'react';
import CustomCarousel from './CustomCarousel';
import {Divider} from '@material-ui/core'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from '@mui/material';
import produce from 'immer';
import CityHolder from './CityHolder';
import ViewCity from '../../Cities/Components/ViewCity';
function Home(props) {
   const [isViewCityOpen,setViewCityOpen]=useState(false);
   const [listOfCities,setListOfCities]=useState([]); 
   const [displayedList,setDisplayed]=useState([]);
   const [selectedCity,setSelectedCity]=useState({});
   const [currentPage,setCurrentPage]=useState(0);
   const [numberOfPages,setNumberOfPages]=useState(0);
   const [startIndex,setStartIndex]=useState(0);
   const [endIndex,setEndIndex]=useState(9);
   
   useEffect(()=>{
    fetch('https://api.photodino.com/locations/cities/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setListOfCities(data)
    })
   },[])
   useEffect(()=>{
    setNumberOfPages(Math.ceil((listOfCities.length/9)));
   },[listOfCities])
   useEffect(()=>{
    updateList(startIndex,(listOfCities.length>=endIndex) ? endIndex : listOfCities.length);
   },[endIndex,numberOfPages])

const handeIsViewCityOpenEvent=(selectedCity)=>{
    setViewCityOpen(true);
    setSelectedCity(selectedCity)
}

const updateList = (startIndex,endIndex)=>{
    setDisplayed(listOfCities.map((item,index)=>{
        if(((index)>=startIndex)&&((index)<endIndex))
        {
            return(   
                <ImageListItem key={index}>
                  <CityHolder  handeIsViewCityOpenEvent={handeIsViewCityOpenEvent} item={item}/>
                </ImageListItem>
                )   
        }
    }));
 }
   const handeLoadMore=(e)=>{
       
        setEndIndex(endIndex+9);
   }

    return (
        <div>
            <Grid container style={{marginTop:'3rem'}}>
              <Grid item xs={12}>
                  <CustomCarousel/>
                  <Grid container>
                
                      <Grid item xs={1}></Grid>
                      <Grid item xs={10}>
                          {/* List of cities */}
                          {
                              (isViewCityOpen===true) ? (
                                  <div>
                                    <ViewCity setViewCityOpen={setViewCityOpen} selectedCity={selectedCity}/>
                                  </div>
                              ):(
                                  <div>
                          <div>
                          <div>
                          <div style={{textAlign:'center'}}>
                          <h1>Famous cities</h1>
                          <Divider/>
                          </div>    
                          <ImageList sx={{ width:'100%',padding:'1rem', height:'100%' ,backgroundColor:''}} cols={3} rowHeight={340}>
                                {displayedList}
                          </ImageList>
                          </div>
                          <div style={{textAlign:'center'}}>
                                <Button color="primary" variant="contained" onClick={handeLoadMore}>Load more</Button>
                          </div>
                          </div>
                                  </div>
                              )
                          }
                      </Grid>
                      <Grid item xs={1}></Grid>
                  </Grid>
              </Grid>

           </Grid>
        </div>
          
    );
}

export default Home;
