import React from "react";

const newState = { spacing: '', galleryWidth: '', images: [] };
let str = JSON.stringify(newState);

class Galleryfit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            spacing: 20,
            galleryWidth: "gallerySmall",

            images: [
                {
                    id: 'galleryPage0',
                    urls: [
                        require("../../../Assets/unsplash/photo-1557487218-4574772f0b8c.jpg"),
                        require("../../../Assets/unsplash/photo-1575226291244-25e8d23fa972.jpg"),
                        require("../../../Assets/unsplash/photo-1586606445486-833e11c0d459.jpg"),
                    ]
                },{
                    id: 'galleryPage1',
                    urls: [
                        require("../../../Assets/unsplash/photo-1596189183161-619b3b2c7bb7.jpg"),
                        require("../../../Assets/unsplash/photo-1593720588474-eedab5ac8724.jpg"),
                        require("../../../Assets/unsplash/photo-1593699153969-4b3a1aff4066.jpg"),
                        require("../../../Assets/unsplash/photo-1593901138884-02ee723a96f7.jpg"),
                    ]
                },{
                    id: 'galleryPage2',
                    urls: [
                        require("../../../Assets/unsplash/photo-1595970276486-c790e2305f95.jpg"),
                        require("../../../Assets/unsplash/photo-1596019294199-d45dfbaba89a.jpg"),
                        require("../../../Assets/unsplash/photo-1596135187959-562c650d98bc.jpg"),
                    ]
                },{
                    id: 'galleryPage3',
                    urls: [
                        require("../../../Assets/unsplash/photo-1596174621919-3cd8eedaa316.jpg"),
                        require("../../../Assets/unsplash/photo-1596176074334-5b08d4513dc7.jpg"),
                        require("../../../Assets/unsplash/photo-1596184208929-63d2f2a700ef.jpg"),
                    ]
                },{
                    id: 'galleryPage4',
                    urls: [
                        require("../../../Assets/unsplash/photo-1593390605369-ca78cc53312e.jpg"),
                        require("../../../Assets/unsplash/photo-1593551646156-6051bfeecb83.jpg"),
                    ]
                },
            ]
        };

    }

    doGallerySize = () => {

        const
            gallery = document.querySelector('.Galleryfit'),
            galleryPages = document.getElementsByClassName('galleryPage'),
            gallWidth = getComputedStyle(gallery).getPropertyValue('width').match(/\d+/),
            findRatio = (a, b) => a / b;

        gallery.style.width = gallWidth;

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
        window.addEventListener('dragenter', this.doGallerySize);
        window.addEventListener('drop', this.doGallerySize);
    }

    sliderHandler = (event) => {
        this.setState({spacing: event.target.value});
        this.doGallerySize();
    }

    widthHandler = (event) => {
        this.setState({galleryWidth: event.target.value});
        setTimeout(() => { this.doGallerySize(); }, 700);
    }

    onDragStart = (event) => {
        event.dataTransfer.setData("moved", event.target.id);
    }

    onDragEnter = (event) => {
        event.preventDefault();

    }

    onDragOver = (event) => {
        event.preventDefault();
        let rect = event.target.getBoundingClientRect(),
            x = event.clientX - rect.left;
        if (event.target.tagName === 'DIV') {
            return false;
        } else if (event.target.tagName === 'IMG') {
            event.target.parentNode.classList.add('parentMarker');
            if (x <= rect.width/2) {
                event.target.classList.remove('afterMarker');
                event.target.classList.add('beforeMarker');
            } else if (x > rect.width/2) {
                event.target.classList.remove('beforeMarker');
                event.target.classList.add('afterMarker');
            }
        }
    }

    onDragExit = (event) => {
        event.preventDefault();
        if (event.target.tagName === 'DIV') {
            return false;
        } else if (event.target.tagName === 'IMG') {
            event.target.parentNode.classList.remove('parentMarker');
            event.target.classList.remove('beforeMarker');
            event.target.classList.remove('afterMarker');
        }
    }

    onDrop = (event) => {
        event.preventDefault();
        let moved = event.dataTransfer.getData("moved"),
            movedItem = document.getElementById(moved),
            rect = event.target.getBoundingClientRect(),
            x = event.clientX - rect.left;
        if (event.target === movedItem) {
            event.target.parentNode.classList.remove('parentMarker');
            event.target.classList.remove('beforeMarker');
            event.target.classList.remove('afterMarker');
        } else {
            if (event.target.tagName === 'DIV') {
                return false;
            } else if (event.target.tagName === 'IMG') {
                event.target.parentNode.classList.remove('parentMarker');
                event.target.parentNode.appendChild(movedItem);
                if (x <= rect.width / 2) {
                    event.target.parentNode.insertBefore(movedItem, event.target);
                    event.target.classList.remove('beforeMarker');
                    event.target.classList.remove('afterMarker');
                } else if (x > rect.width / 2) {
                    event.target.parentNode.insertBefore(movedItem, event.target.nextSibling);
                    event.target.classList.remove('beforeMarker');
                    event.target.classList.remove('afterMarker');
                }
            }
        }
    }

    saveGallery = () => {
        const parent = document.getElementById('galCon').children,
            children = Array.from(parent);
        newState.spacing = this.state.spacing;
        newState.galleryWidth = this.state.galleryWidth;
        for (let i = 0; i < children.length; i++) {
            let childNodes = Array.from(children[i].children);
            newState.images.push({
                id: children[i].id,
                urls: [childNodes]
            });
        }
        // this.makeTextFile(newState);
    }
    /*
        makeTextFile = (text) => {
            let textFile = '';
            let data = new Blob([text], {type: 'text/plain'});
            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }
            textFile = window.URL.createObjectURL(data);
            console.log(text);
            return textFile;
        };
    */
    render() {

        return (

            <div className={this.props.isOpen ? 'portOpen' : 'portClosed'}>
                <div className="Galleryfit" id={this.state.galleryWidth}>
                    <h3>GALLERYFIT EXAMPLE</h3>

                    <div className="sliderContainer verySmallText">

                        <div className="redText shadowText">TEST IT OUT!</div>

                        <div>Drag images to reorder</div>

                        <div>
                            <div>Select margin width</div>
                            <input className="slider" type="range" min="5" max="85" step="1"
                                   value={this.state.spacing}
                                   onChange={this.sliderHandler} />
                            <div>{this.state.spacing}</div>
                        </div>

                        <div>
                            <div>Select gallery size</div>
                            <form className="widthForm verySmallText">
                                <label><input type="radio" id="small" value="gallerySmall"
                                              checked={this.state.galleryWidth === "gallerySmall"}
                                              onChange={this.widthHandler}
                                />small</label>
                                <label><input type="radio" id="medium" value="galleryMedium"
                                              checked={this.state.galleryWidth === "galleryMedium"}
                                              onChange={this.widthHandler}
                                />medium </label>
                                <label><input type="radio" id="large" value="galleryLarge"
                                              checked={this.state.galleryWidth === "galleryLarge"}
                                              onChange={this.widthHandler}
                                />full</label>
                            </form>
                        </div>
                        {/*
                        <div className="saveButton">
                            <input type="button" onClick={this.saveGallery} value="SAVE GALLERY" />
                        </div>
                        */}
                    </div>

                    <div className="galleryContainer" id="galCon">

                        {this.state.images.map((item, i) =>

                            <div className="galleryPage" key={i} title={i} id={this.state.images[i].id}
                                 onDragEnter={ (event) => this.onDragEnter(event) }
                                 onDragOver={ (event) => this.onDragOver(event) }
                                 onDragExit={ (event) => this.onDragExit(event) }
                                 onDrop={ (event) => this.onDrop(event) }>

                                {this.state.images[i].urls.map((img, j) =>

                                    <img key={j} name={j} id={this.state.images[i].urls[j]} src={this.state.images[i].urls[j]} alt="from Unsplash"
                                         onDragStart={ (event) => this.onDragStart(event) }/>

                                )}

                            </div>

                        )}

                    </div>

                    <div className="accentTextTwo redText smallText"><p><i>images courtesy of Unsplash.com</i></p></div>

                </div>
            </div>
        )
    }
}

export default Galleryfit