import React from "react";
import ImageBase from './ImageBase';

class Flexi extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            spacing: 15
        };

        this.doGallerySize = this.doGallerySize.bind(this);

    }

    sliderHandler = (event) => {
        this.setState({spacing: event.target.value});
        this.doGallerySize();
    }

    doGallerySize = () => {

        const
            gallery = document.querySelector('.Flexi'),
            flexiCols = document.querySelector('.flexiCols'),
            images = Array.from(document.querySelectorAll('.flexiCols img')),
            galleryWidth = getComputedStyle(gallery).getPropertyValue('width').match(/\d+/),
            columnWidth = galleryWidth / 4,
            spacing = this.state.spacing,
            findRatio = (a, b) => a / b;

        let imgWHRatios = images.map(function(img) { return findRatio(img.naturalWidth, img.naturalHeight); }),
            imgHWRatios = images.map(function(img) { return findRatio(img.naturalHeight, img.naturalWidth); }),
            ratioWHSum = imgWHRatios.reduce((a, b) => a + b, 0),
            ratioHWSum = imgHWRatios.reduce((a, b) => a + b, 0),
            ratio = Math.max(ratioWHSum / ratioHWSum, ratioHWSum / ratioWHSum);

        if (window.matchMedia("(min-device-width: 1224px)").matches) {
            flexiCols.style.maxHeight = galleryWidth * ratio + (images.length * spacing / 2) + "px";
            images.forEach(thisImage => {
                thisImage.style.width = columnWidth - spacing + "px";
                thisImage.style.marginBottom = spacing + "px";
            });
        } else if (window.matchMedia("(max-device-width: 1224px)").matches) {
            flexiCols.style.maxHeight = galleryWidth * ratio + (images.length * 5 / 2) + "px";
            images.forEach(thisImage => {
                thisImage.style.width = columnWidth - 5 + "px";
                thisImage.style.marginBottom = 5 + "px";
            });
        }


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

                    <div className="sliderContainer verySmallText">
                        <div>Slide to change margins</div>
                        <input className="slider" type="range" min="10" max="40" step="1"
                               value={this.state.spacing}
                               onChange={this.sliderHandler} />
                        <div>{this.state.spacing}</div>
                    </div>

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