import React, { Component } from 'react'
import CardCarousel from './CardCarousel'
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class CardDynamic extends Component {
    render() {
        return (
            <Carousel autoPlay={true} interval={2000} showArrows={false} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true} centerMode={true} centerSlidePercentage={35} width={'60%'}>
               <CardCarousel
                        img={'https://monexia.eu/media/catalog/product/cache/2458851d1af74a37405e378c3897d861/0/3/037257e0a9db4147b6fc75822ba608ed_4_2.png'}
                        title={'Brand Bite: Netflix'}
                        content={'Measure only what you need. Our intuitive dashboard can be customized to track the KPIs most important for you'}
                        buttonTitle={'Entertaiment'}
                        type={'entertaiment'}
                     />

                    <CardCarousel
                        img={'https://monexia.eu/media/catalog/product/cache/2458851d1af74a37405e378c3897d861/0/3/037257e0a9db4147b6fc75822ba608ed_4_2.png'}
                        title={'Brand Bite: Netflix'}
                        content={'Measure only what you need. Our intuitive dashboard can be customized to track the KPIs most important for you'}
                        buttonTitle={'Beauty'}
                        type={'beauty'} 
                    />

                    <CardCarousel
                        img={'https://monexia.eu/media/catalog/product/cache/2458851d1af74a37405e378c3897d861/0/3/037257e0a9db4147b6fc75822ba608ed_4_2.png'}
                        title={'Brand Bite: Netflix'}
                        content={'Measure only what you need. Our intuitive dashboard can be customized to track the KPIs most important for you'}
                        buttonTitle={'Apparel'}
                        type={'apparel'} 
                    />

                    <CardCarousel
                        img={'https://monexia.eu/media/catalog/product/cache/2458851d1af74a37405e378c3897d861/0/3/037257e0a9db4147b6fc75822ba608ed_4_2.png'}
                        title={'Castomizable Dashboard'}
                        content={'Measure only what you need. Our intuitive dashboard can be customized to track the KPIs most important for you'}
                        buttonTitle={'Apparel'}
                        type={'apparel'} 
                    />

                    <CardCarousel
                        img={'https://monexia.eu/media/catalog/product/cache/2458851d1af74a37405e378c3897d861/0/3/037257e0a9db4147b6fc75822ba608ed_4_2.png'}
                        title={'Castomizable Dashboard'}
                        content={'Measure only what you need. Our intuitive dashboard can be customized to track the KPIs most important for you'}
                        buttonTitle={'Beauty'}
                        type={'beauty'} 
                    />
            </Carousel>
        );
    }
};

export default CardDynamic;