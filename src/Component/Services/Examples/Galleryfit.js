import React from "react";
import ImageBase from "./ImageBase";

class Galleryfit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            spacing: 20
        };

        this.doGallerySize = this.doGallerySize.bind(this);

    }

    doGallerySize = () => {

        const
            gallery = document.querySelector('.Galleryfit'),
            galleryPages = document.getElementsByClassName('galleryPage'),
            gallWidth = getComputedStyle(gallery).getPropertyValue('width').match(/\d+/),
            findRatio = (a, b) => a / b;

        for (let i = 0; i < galleryPages.length; i++) {

            const images = document.querySelectorAll(`#galleryPage${i} img`),
                thisGalleryPage = document.querySelectorAll(`#galleryPage${i}`);
            let sum = 0,
                spacing = this.state.spacing,
                spaces = images.length - 1;

            images.forEach(thisImage => {
                sum += findRatio(thisImage.naturalWidth, thisImage.naturalHeight);
            });

            let finalHeight = (gallWidth - (spacing * spaces)) / sum,
                mobileHeight = (gallWidth - (5 * spaces)) / sum;

            if (window.matchMedia("(min-device-width: 1224px)").matches) {
                images.forEach(thisImage => {
                    thisImage.style.height = finalHeight + "px";
                });
                thisGalleryPage.forEach(thisPage => {
                    thisPage.style.height = finalHeight + "px";
                    thisPage.style.marginBottom = spacing + "px";
                });
            } else if (window.matchMedia("(max-device-width: 1224px)").matches) {
                images.forEach(thisImage => {
                    thisImage.style.height = mobileHeight + "px";
                });
                thisGalleryPage.forEach(thisPage => {
                    thisPage.style.height = mobileHeight + "px";
                    thisPage.style.marginBottom = 5 + "px";
                });
            }

        }

    };

    componentDidMount() {
        setTimeout(() => { this.doGallerySize(); }, 500);
        window.addEventListener('resize', this.doGallerySize);
    }

    sliderHandler = (event) => {
        this.setState({spacing: event.target.value});
        this.doGallerySize();
    }

   render() {

       return (
           <div className={this.props.isOpen ? 'portOpen' : 'portClosed'}>
               <div className="Galleryfit">

                   <h3>GALLERYFIT EXAMPLE</h3>

                   <div className="sliderContainer verySmallText">
                       <div>Slide to change margins</div>
                       <input className="slider" type="range" min="5" max="45" step="1"
                              value={this.state.spacing}
                              onChange={this.sliderHandler} />
                       <div>{this.state.spacing}</div>
                   </div>

                   <div className="galleryContainer">
                       <div className="galleryPage" id="galleryPage0">
                           <img alt="from Unsplash" id={ImageBase[0].id} src={ImageBase[0].src} />
                           <img alt="from Unsplash" id={ImageBase[1].id} src={ImageBase[1].src} />
                           <img alt="from Unsplash" id={ImageBase[2].id} src={ImageBase[2].src} />
                       </div>

                       <div className="galleryPage" id="galleryPage1">
                           <img alt="from Unsplash" id={ImageBase[3].id} src={ImageBase[3].src} />
                           <img alt="from Unsplash" id={ImageBase[4].id} src={ImageBase[4].src} />
                           <img alt="from Unsplash" id={ImageBase[5].id} src={ImageBase[5].src} />
                           <img alt="from Unsplash" id={ImageBase[6].id} src={ImageBase[6].src} />
                       </div>

                       <div className="galleryPage" id="galleryPage2">
                           <img alt="from Unsplash" id={ImageBase[7].id} src={ImageBase[7].src} />
                           <img alt="from Unsplash" id={ImageBase[8].id} src={ImageBase[8].src} />
                           <img alt="from Unsplash" id={ImageBase[9].id} src={ImageBase[9].src} />
                       </div>

                       <div className="galleryPage" id="galleryPage3">
                           <img alt="from Unsplash" id={ImageBase[10].id} src={ImageBase[10].src} />
                           <img alt="from Unsplash" id={ImageBase[11].id} src={ImageBase[11].src} />
                           <img alt="from Unsplash" id={ImageBase[12].id} src={ImageBase[12].src} />
                       </div>

                       <div className="galleryPage" id="galleryPage4">
                           <img alt="from Unsplash" id={ImageBase[13].id} src={ImageBase[13].src} />
                           <img alt="from Unsplash" id={ImageBase[14].id} src={ImageBase[14].src} />
                       </div>

                       <div className="accentTextTwo redText smallText"><p><i>images courtesy of Unsplash.com</i></p></div>
                   </div>

               </div>
           </div>
       )
   }
}

export default Galleryfit