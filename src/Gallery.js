import React from "react";


const Gallery = () => {
    return(
        <section className="gallery" id="gallery">

            <div className="container">
                <h3>GALLERY</h3>
                <ul className="images">
                    <li className="img img1"><a href="media/2.jpg"><img src={require('./media/2.jpg')} alt="1"/></a> </li>
                    <li className="img img2"><a href="media/3.jpg"><img src={require('./media/3.jpg')} alt="2"/></a></li>
                    <li className="img img3"><a href="media/4.jpg"><img src={require('./media/4.jpg')} alt="3"/></a></li>
                    <li className="img img4"><a href="media/5.jpg"><img src={require('./media/5.jpg')} alt="4"/></a></li>
                    <li className="img img5"><a href="media/6.jpg"><img src={require('./media/6.jpg')} alt="5"/></a></li>
                    <li className="img img6"><a href="media/7.jpg"><img src={require('./media/7.jpg')} alt="6"/></a></li>
                    <li className="img img7"><a href="media/8.jpg"><img src={require('./media/8.jpg')} alt="7"/></a></li>
                    <li className="img img8"><a href="media/9.jpg"><img src={require('./media/9.jpg')} alt="8"/></a></li>
                </ul>
            </div>
        </section>
    )
}

export {Gallery};