import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel 
                style={{margin: '100px 100px'}} 
                showThumbs={false} 
                showStatus={false} 
                emulateTouch={true}
                infiniteLoop={true} 
                width={'100%'}>
                <div>
                    <img src="http://2.bp.blogspot.com/-UmoeCydFsuk/VeGxqFmJTxI/AAAAAAAAFmY/pxqw_nCau-4/s1600/socrate-sapere.jpg" />
                </div>
                <div>
                    <img src="https://www.frasidadedicare.it/frasidadedicare/wp-content/uploads/2020/07/frasi-socrate.jpg" />
                </div>
                <div>
                    <img src="https://www.aforismicelebri.com/wp-content/uploads/2021/01/socrate-muovere-se-stesso-citazione.jpg" />
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;
