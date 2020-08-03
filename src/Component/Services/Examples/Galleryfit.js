import React from "react";

class Galleryfit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            spacing: 20,

            images: [
                {
                    id: 'galleryPage0',
                    urls: [
                        { id: 0, src: require("../../../Assets/unsplash/photo-1557487218-4574772f0b8c.jpg") },
                        { id: 1, src: require("../../../Assets/unsplash/photo-1575226291244-25e8d23fa972.jpg") },
                        { id: 2, src: require("../../../Assets/unsplash/photo-1586606445486-833e11c0d459.jpg") },
                        ]
                },{
                    id: 'galleryPage1',
                    urls: [
                        { id: 3, src: require("../../../Assets/unsplash/photo-1596189183161-619b3b2c7bb7.jpg") },
                        { id: 4, src: require("../../../Assets/unsplash/photo-1593720588474-eedab5ac8724.jpg") },
                        { id: 5, src: require("../../../Assets/unsplash/photo-1593699153969-4b3a1aff4066.jpg") },
                        { id: 6, src: require("../../../Assets/unsplash/photo-1593901138884-02ee723a96f7.jpg") },
                    ]
                },{
                    id: 'galleryPage2',
                    urls: [
                        { id: 7, src: require("../../../Assets/unsplash/photo-1595970276486-c790e2305f95.jpg") },
                        { id: 8, src: require("../../../Assets/unsplash/photo-1596019294199-d45dfbaba89a.jpg") },
                        { id: 9, src: require("../../../Assets/unsplash/photo-1596135187959-562c650d98bc.jpg") },
                    ]
                },{
                    id: 'galleryPage3',
                    urls: [
                        { id: 10, src: require("../../../Assets/unsplash/photo-1596174621919-3cd8eedaa316.jpg") },
                        { id: 11, src: require("../../../Assets/unsplash/photo-1596176074334-5b08d4513dc7.jpg") },
                        { id: 12, src: require("../../../Assets/unsplash/photo-1596184208929-63d2f2a700ef.jpg") },
                    ]
                },{
                    id: 'galleryPage4',
                    urls: [
                        { id: 13, src: require("../../../Assets/unsplash/photo-1593390605369-ca78cc53312e.jpg") },
                        { id: 14, src: require("../../../Assets/unsplash/photo-1593551646156-6051bfeecb83.jpg") },
                    ]
                },
            ]
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
        window.addEventListener('drop', this.doGallerySize);
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

                       {this.state.images.map((item, i) =>
                           <div className="galleryPage" id={this.state.images[i].id}>
                               {this.state.images[i].urls.map((img, j) =>
                                   <img src={this.state.images[i].urls[j].src} alt="from Unsplash" />
                               )}
                           </div>
                       )}

                       <div className="accentTextTwo redText smallText"><p><i>images courtesy of Unsplash.com</i></p></div>

                   </div>

               </div>
           </div>
       )
   }
}

export default Galleryfit