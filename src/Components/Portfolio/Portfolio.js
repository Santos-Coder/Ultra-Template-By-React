import React , { useState , useEffect } from 'react';
import { Port , PortSpn , PortTit , PortUl , PortUlLi , Img , ImgBox , ImgOver , OverSpn} from  './style.js';
import axios from 'axios';

const Portfolio = () => {

    const [ Image , setImage ] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then( res => { setImage(res.data.portfolio) } ) 
    } , [] ) 

    const PortImg = Image.map( (imgItem) => {
        return (
                <ImgBox key={imgItem.id}>
                    <Img src={imgItem.image} alt="" />
                    <ImgOver>
                        <OverSpn>
                            Show Image
                        </OverSpn>
                    </ImgOver>
                </ImgBox>
        )
    })
    return (
        <Port>
            <PortTit><PortSpn>My</PortSpn> Portfolio</PortTit>
            <PortUl>
                <PortUlLi active>All</PortUlLi>
                <PortUlLi>HTML</PortUlLi>
                <PortUlLi>Photoshop</PortUlLi>
                <PortUlLi>Wordpress</PortUlLi>
                <PortUlLi>Mobile</PortUlLi>
            </PortUl>

            <div className="box">
                {PortImg}                
            </div>
            
        </Port>
    )
}

export default Portfolio;