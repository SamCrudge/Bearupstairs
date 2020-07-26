import React from "react";

class Galleryfit extends React.Component {

    constructor(props) {
        super(props);

        this.doGallerySize = this.doGallerySize.bind(this);

    }

    doGallerySize = () => {

        const	gallLength = document.getElementsByClassName('galleryPage').length,
            gallWidth = window.innerWidth / 100 * 70,
            findRatio = (a, b) => a / b;

        for (let i = 0; i < gallLength; i++) {

            let sum = 0,
                finalHeight = 0;
            const images = document.querySelectorAll(`#galleryPage${i} img`),
                galleryPage = document.querySelectorAll(`#galleryPage${i}`),
                numOfImages = images.length;

            images.forEach(thisImage => {
                sum += findRatio(thisImage.naturalWidth, thisImage.naturalHeight);
            });

            galleryPage.forEach(thisPage => {

                finalHeight = gallWidth / sum;

                if (numOfImages === 3) {
                    thisPage.style.height = finalHeight + "px";
                } else if (numOfImages === 2) {
                    thisPage.style.height = finalHeight * 1.015 + "px";
                } else if (numOfImages === 1) {
                    thisPage.style.height = finalHeight * 1.03 + "px";
                    images[0].style.width = "100%";
                } else if (numOfImages > 3) {
                    thisPage.style.height = finalHeight * (1 - ((numOfImages - 3) * 0.015)) + "px";
                }

                if (numOfImages < sum) {
                    if (numOfImages === 1) {
                        thisPage.style.marginBottom = "-" + finalHeight * 0.015 * 0.5 + "px";
                    } else if (numOfImages === 2) {
                        thisPage.style.marginBottom = finalHeight * 0.015 * 0.5 + "px";
                    } else if (numOfImages > 2) {
                        thisPage.style.marginBottom = (finalHeight * 0.015) * (numOfImages - 1) + "px";
                    }
                } else if (numOfImages > sum) {
                    if (numOfImages === 1) {
                        thisPage.style.marginBottom = finalHeight * 0.015 * 0.5 + "px";
                    } else if (numOfImages === 2) {
                        thisPage.style.marginBottom = "-" + finalHeight * 0.015 * 0.5 + "px";
                    } else if (numOfImages >= 3) {
                        thisPage.style.marginBottom = finalHeight * 0.015 * 0.5 + "px";
                    }
                }
/*
                if ((numOfImages/sum) > 1.33) {
                    thisPage.style.marginBottom = "-" + finalHeight * 0.015 * 0.5 + "px";
                } else if ((numOfImages/sum) <= 1.33 && (numOfImages/sum) > 1) {
                    thisPage.style.marginBottom = finalHeight * 0.03 * numOfImages + "px";
                } else if ((numOfImages/sum) <= 1) {
                    thisPage.style.marginBottom = (finalHeight * 0.015) * (numOfImages - 1) + "px";
                }
*/
           });

       }

   };

   componentDidMount() {
       setTimeout(() => {
           this.doGallerySize();
       }, 100);
   }

   render() {
       return (
           <div className="Galleryfit">
               <div className="galleryPage" id="galleryPage0">
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1594220452487-6d3046e91787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" />
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1593344352545-ffb4a9512528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80" />
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1586606445486-833e11c0d459?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" />
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1593699153969-4b3a1aff4066?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
               </div>

               <div className="galleryPage" id="galleryPage1">
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1594056970135-20f149c17c41?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" />
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1557487218-4574772f0b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" />
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1593551646156-6051bfeecb83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
               </div>

               <div className="galleryPage" id="galleryPage2">
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1445264718234-a623be589d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" />
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1575226291244-25e8d23fa972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1593390605369-ca78cc53312e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" />
               </div>

               <div className="galleryPage" id="galleryPage3">
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1593901138884-02ee723a96f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80" />
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1593720588474-eedab5ac8724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1281&q=80" />
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1593886569138-50b4b0c0f3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
               </div>

               <div className="galleryPage" id="galleryPage4">
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1593604977097-8ee5f2fda183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" />
                   <img alt="from Unsplash" src="https://images.unsplash.com/photo-1589746680328-25b4109b4287?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
               </div>

           </div>
       )
   }
}

export default Galleryfit