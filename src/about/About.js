import React from "react";
import './about.scss';

const About = () => {
    return (
        <div className="container about" id="about">
            <div className="about-left">
                <h3> 100%</h3>
                <h5> Kompleksowego wsparcia dla klienta</h5>
                <p>Ponad 20 lat doświadczenia w branży księgowej i informatycznej. Liczne wdrożenia i realizacje.</p>
                <a href="#" > Read More</a>
            </div>
            <div className="about-right">
                <h3 className='capabilities'>Możliwości</h3>
                <div className="abt-top">
                <div className=" ab-lft">
                    <h4>Przykładowe realizacje indywidualne.</h4>
                    <p> 1. Import faktur zakupu i sprzedaży
                        2. Import dokumentów magazynowych
                        3. Import wyciągów bankowych
                        4. Zestawienia wysyłane cyklicznie do ustalonych odbiorców
                        5. Dostęp online do wybranych danych</p>
                </div>
                <div className="ab-lft">
                    <h4>Modele i zasady współpracy</h4>
                    <p>Lorem ipsum dolor sit amet, conse etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magn aliquam erat volutpat massa dolore.</p>
                </div>
                </div>

                <div className="abt-bottom">
                    <div className="ab-lft">
                        <h4>Wsparcie w zakresie księgowości i programowania</h4>
                        <p>Lorem ipsum dolor sit amet, conse etuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magn aliquam erat volutpat massa dolore.</p>
                    </div>
                    <div className="ab-lft">
                        <h4>COMMUNICATIONS</h4>
                        <p>Lorem ipsum dolor sit amet, conse etuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magn aliquam erat volutpat massa dolore Lorem ipsum dolor sit amet, conse etuer
                            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                            magn aliquam erat volutpat massa dolore.</p>
                    </div>

                </div>
            </div>



        </div>

    )

}

export {About};