import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
const sampleData=[
    {
        imageUrl:"https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs"
    },
    {
        imageUrl:"https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
    },
    
]
function CustomCarousel(props) {
    return (
        <div>
        <Carousel>
            {
                sampleData.map((item,index)=>{
                    return (
                        <div>
                            <img height={500} width={'100%'} src={item.imageUrl}/>
                        </div>
                    )
                })
            }
        </Carousel>
        </div>
    );
}

export default CustomCarousel;