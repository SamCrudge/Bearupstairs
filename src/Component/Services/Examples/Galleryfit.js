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

    sliderHandler = (event) => {
        this.setState({spacing: event.target.value});
        this.doGallerySize();
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

            let finalHeight = (gallWidth - (spacing * spaces)) / sum;

            images.forEach(thisImage => {
                thisImage.style.height = finalHeight + "px";
            });

            thisGalleryPage.forEach(thisPage => {
                thisPage.style.height = finalHeight + "px";
                thisPage.style.marginBottom = spacing + "px";
            });

            console.log(this.state.spacing);
       }

   };

    componentDidMount() {
       setTimeout(() => { this.doGallerySize(); }, 500);
       window.addEventListener('resize', this.doGallerySize);
   }

   render() {

       return (
           <div className={this.props.isOpen ? 'portOpen' : 'portClosed'}>
               <div className="Galleryfit">

                   <h3>GALLERYFIT EXAMPLE</h3>

                   <div className="sliderContainer">
                       <input className="slider" type="range" min="1" max="40" step="1" value={this.state.spacing} onChange={this.sliderHandler} />
                   </div>

                   <div className="galleryContainer">
                       <div className="galleryPage" id="galleryPage0">
                           <img alt="from Unsplash" src={ImageBase[0]} />
                           <img alt="from Unsplash" src={ImageBase[1]} />
                           <img alt="from Unsplash" src={ImageBase[2]} />
                       </div>

                       <div className="galleryPage" id="galleryPage1">
                           <img alt="from Unsplash" src={ImageBase[3]} />
                           <img alt="from Unsplash" src={ImageBase[4]} />
                           <img alt="from Unsplash" src={ImageBase[5]} />
                           <img alt="from Unsplash" src={ImageBase[6]} />
                       </div>

                       <div className="galleryPage" id="galleryPage2">
                           <img alt="from Unsplash" src={ImageBase[7]} />
                           <img alt="from Unsplash" src={ImageBase[8]} />
                           <img alt="from Unsplash" src={ImageBase[9]} />
                       </div>

                       <div className="galleryPage" id="galleryPage3">
                           <img alt="from Unsplash" src={ImageBase[10]} />
                           <img alt="from Unsplash" src={ImageBase[11]} />
                           <img alt="from Unsplash" src={ImageBase[12]} />
                       </div>

                       <div className="galleryPage" id="galleryPage4">
                           <img alt="from Unsplash" src={ImageBase[13]} />
                           <img alt="from Unsplash" src={ImageBase[14]} />
                       </div>

                       <div className="accentTextTwo redText smallText"><p><i>images courtesy of Unsplash.com</i></p></div>
                   </div>

               </div>
           </div>
       )
   }
}

export default Galleryfit