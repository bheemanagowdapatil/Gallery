import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Gallery.css'
import img1 from './Img/img1.jpg';
import img2 from './Img/img2.jpg';
import img3 from './Img/img3.jpg';
import img4 from './Img/img4.jpg';
import img5 from './Img/img5.jpg';
import img6 from './Img/img6.jpg';

const Gallery = () => {

    let data = [
        {
          id : 1,
        imgSrc: img1,
    
        },
        {
          id : 1,
        imgSrc: img2,
    
        },
        {
          id : 1,
        imgSrc: img3,
    
        },
        {
          id : 1,
        imgSrc: img4,
    
        },
        {
            id : 1,
          imgSrc: img5,
      
          },
          {
            id : 1,
          imgSrc: img6,
      
          },

      ]
      const [model, setModel] = useState(false);
      const [tempimgSrc, setTempImgSrc] = useState ('')
      const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
      
      }
    return(
        <>
        <div className={model ? "model open" : "model"}>
            <img src={tempimgSrc} />
            <CloseIcon  onClick={() => setModel(false)}/>
        </div>
         
         <div className="gallery">
                {data.map(( item,index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt='' style={{width:'100%'}} />
                        </div>

                    )
                })}

            </div>
        
     
        </>
       
    )

}

export default Gallery