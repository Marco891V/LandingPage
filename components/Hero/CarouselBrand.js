import React, { Component } from 'react'
import CardCarousel from './CardCarousel'
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class CarouselBrand extends Component {
    render() {
        return (
            <Carousel autoPlay={true} interval={2000} showArrows={false} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true} centerMode={true} centerSlidePercentage={50} width={'100%'}>
               <div style={{padding: '10px'}}>
                <img src="https://i0.wp.com/www.micromd.com/wp-content/uploads/2019/11/esolutions-logo-400x150.png?fit=400%2C150&ssl=1"></img>
                </div>
                <div style={{padding: '10px'}}>
                <img src="https://i0.wp.com/www.micromd.com/wp-content/uploads/2019/11/trizetto-logo-400x150.png?ssl=1"></img>
                </div>
                <div style={{padding: '10px'}}>
                <img src="https://i0.wp.com/www.micromd.com/wp-content/uploads/2019/11/micromd-logo-400x150-1.png?ssl=1"></img>
                </div>
                <div style={{padding: '10px'}}>
                <img src="https://www.mimesi.com/wp-content/uploads/2017/11/tgcom24.jpg"></img>
                </div>
                <div style={{padding: '10px'}}>
                <img src="https://ntsinformatica.it/images/case_history/VORPA_400X150.png"></img>
                </div>
                <div style={{padding: '10px'}}>
                <img src="https://embio.it/pub/media/wysiwyg/logo_template_newletter/Greengold-logo-400x150.png"></img>
                </div>
                <div style={{padding: '10px'}}>
                <img src="https://www.arredoingrostore.it/wp-content/uploads/2021/07/ARREDO-INGROSTORE-logo-rettangolare-stosa-triveneto2-400x150.png"></img>
                </div>
                <div style={{padding: '10px'}}>
                <img src="https://www.fv-visualboutique.it/wp-content/uploads/2021/02/Casa-di-cura-privata-sanRossore_piccolo.png"></img>
                </div>
                <div style={{padding: '10px'}}>
                <img src="https://ancnazionale.it/wp-content/uploads/2018/06/logo-mysolution-e1530194382580.jpg"></img>
                </div>
                <div style={{padding: '10px'}}>
                <img src="https://www.mimesi.com/wp-content/uploads/2017/11/tgcom24.jpg"></img>
                </div>
            </Carousel>
        );
    }
};

export default CarouselBrand;