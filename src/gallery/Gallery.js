import React, {useMemo} from "react";
import './gallery.scss';
import ImageGallery from 'react-image-gallery';
//const Div = styled.div`

//`


const slideHeight = 400;
const Gallery = () => {
    const images = useMemo(() => {
        return [
            {
                original: require('./1.jpg'),
                thumbnail: require('./1.jpg'),
                thumbnailTitle: 'Pierwszy obrazek',
                originalHeight: slideHeight,
                originalClass: 'slide'

            },
            {
                original: require('./2.jpg'),
                thumbnail: require('./2.jpg'),
                thumbnailTitle: 'Drugi obrazek',
                originalHeight: slideHeight,
                originalClass: 'slide'
            },
            {
                original: require('./3.png'),
                thumbnail: require('./3.png'),
                originalHeight: slideHeight,
                originalClass: 'slide'
            },
            {
                original: require('./4.jpg'),
                thumbnail: require('./4.jpg'),
                originalHeight: slideHeight,
                originalClass: 'slide'
            },
            {
                original: require('./5.jpg'),
                thumbnail: require('./5.jpg'),
                originalHeight: slideHeight,
                originalClass: 'slide'
            },
            {
                original: require('./6.jpg'),
                thumbnail: require('./6.jpg'),
                originalHeight: slideHeight,
                originalClass: 'slide'
            },
            {
                original: require('./7.jpg'),
                thumbnail: require('./7.jpg'),
                originalHeight: slideHeight,
                originalClass: 'slide'
            },
            {
                original: require('./8.jpg'),
                thumbnail: require('./8.jpg'),
                originalHeight: slideHeight,
                originalClass: 'slide'
            },
            // {
            //     original: require('./9.jpg'),
            //     thumbnail: require('./9.jpg'),
            //     originalHeight: slideHeight,
            //     thumbnailHeight: thumblHeight,
            //     originalClass: 'slide'
            // }
        ]
    }, [])
    return(
        <section className="gallery" id="gallery">

            <div className="container">
                <h3>GALLERY</h3>

                {/*<ul className="images">*/}
                {/*    <li className="img img1"><a href="2.jpg"><img src={require('./2.jpg')} alt="1"/></a> </li>*/}
                {/*    <li className="img img2"><a href="3.jpg"><img src={require('./3.png')} alt="2"/></a></li>*/}
                {/*    <li className="img img3"><a href="4.jpg"><img src={require('./4.jpg')} alt="3"/></a></li>*/}
                {/*    <li className="img img4"><a href="5.jpg"><img src={require('./5.jpg')} alt="4"/></a></li>*/}
                {/*    <li className="img img5"><a href="6.jpg"><img src={require('./6.jpg')} alt="5"/></a></li>*/}
                {/*    <li className="img img6"><a href="7.jpg"><img src={require('./7.jpg')} alt="6"/></a></li>*/}
                {/*    <li className="img img7"><a href="8.jpg"><img src={require('./8.jpg')} alt="7"/></a></li>*/}
                {/*    <li className="img img8"><a href="9.jpg"><img src={require('./9.jpg')} alt="8"/></a></li>*/}
                {/*</ul>*/}
            </div>
            <ImageGallery items={images} lazyLoad={true} showNav={true} showFullscreenButton={false} showBullets={true} showThumbnails={true}  />
        </section>

    )
}

export {Gallery};