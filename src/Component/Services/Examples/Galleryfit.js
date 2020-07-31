import React from "react";
import ImageBase from "./imageBase";

class Galleryfit extends React.Component {

    constructor(props) {
        super(props);

        this.doGallerySize = this.doGallerySize.bind(this);

    }

    doGallerySize = () => {

        const
            gallLength = document.getElementsByClassName('galleryPage').length,
            gallWidth = window.innerWidth / 100 * 70,
            findRatio = (a, b) => a / b;

        for (let i = 0; i < gallLength; i++) {

            let sum = 0,
                finalHeight = 0;
            const images = document.querySelectorAll(`#galleryPage${i} img`),
                galleryPage = document.querySelectorAll(`#galleryPage${i}`);

            images.forEach(thisImage => {
                sum += findRatio(thisImage.naturalWidth, thisImage.naturalHeight);
            });

            galleryPage.forEach(thisPage => {

                finalHeight = gallWidth / sum;
                thisPage.style.height = finalHeight + "px";

            });

       }

   };

   componentDidMount() {
       setTimeout(() => {
           this.doGallerySize();
       }, 500);
       window.addEventListener('resize', this.doGallerySize);
   }

   render() {
       return (
           <div className="Galleryfit">

               <h3>GALLERYFIT EXAMPLE</h3>

               <ImageBase />

           </div>
       )
   }
}

export default Galleryfit