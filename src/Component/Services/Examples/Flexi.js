import React from "react";
import ImageBase from './ImageBase';

class Flexi extends React.Component {

    constructor(props) {
        super(props);

        this.doGallerySize = this.doGallerySize.bind(this);

    }

    doGallerySize = () => {

        const
            gallery = document.querySelector('.Flexi'),
            flexiCols = document.querySelector('.flexiCols'),
            images = Array.from(document.querySelectorAll('.flexiCols img')),
            galleryWidth = getComputedStyle(gallery).getPropertyValue('width').match(/\d+/),
            findRatio = (a, b) => a / b;

        let imgWHRatios = images.map(function(img) { return findRatio(img.naturalWidth, img.naturalHeight); }),
            imgHWRatios = images.map(function(img) { return findRatio(img.naturalHeight, img.naturalWidth); }),
            ratioWHSum = imgWHRatios.reduce((a, b) => a + b, 0),
            ratioHWSum = imgHWRatios.reduce((a, b) => a + b, 0),
            ratioWH = ratioWHSum / ratioHWSum,
            ratioHW = ratioHWSum / ratioWHSum,
            ratio = Math.max(ratioWH, ratioHW);

        flexiCols.style.height = galleryWidth * ratio + "px";

    }

    componentDidMount() {
        setTimeout(() => {
            this.doGallerySize();
        }, 500);
        window.addEventListener('resize', this.doGallerySize);
    }

    render() {

        const images = ImageBase.map((item, i) => {
            return <img key={item} src={ImageBase[i]} alt="from Unsplash" />
        });

        return (
            <div className={this.props.isOpen ? 'portOpen' : 'portClosed'}>
                <div className="Flexi">

                    <h3>FLEXI EXAMPLE</h3>

                    <div className="galleryContainer flexiCols">
                        {images}
                    </div>

                    <div className="accentTextTwo redText smallText"><p><i>images courtesy of Unsplash.com</i></p></div>

                </div>
            </div>
        )
    }
}

export default Flexi