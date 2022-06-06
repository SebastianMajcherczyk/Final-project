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
                    <ul>
                        <li>Import faktur zakupu i sprzedaży</li>
                        <li>Import dokumentów magazynowych </li>
                        <li>Import wyciągów bankowych</li>
                        <li>Zestawienia wysyłane cyklicznie do ustalonych odbiorców </li>
                        <li>Dostęp online do wybranych danych</li>
                    </ul>
                </div>
                <div className="ab-lft">
                    <h4>Modele i zasady współpracy</h4>
                    <p>Wszystkie usługi wykonujemy na zasadzie B2B.</p>
                    <p>Jesteśmy do dyspozycji między 9-16 od poniedziałku do czwartku.</p>
                </div>
                </div>

                <div className="abt-bottom">
                    <div className="ab-lft">
                        <h4>Wsparcie w zakresie księgowości i programowania</h4>
                        <ul>
                            <li>Współpraca z biurem rachunkowym.</li>
                            <li>Informatyzacja procesów księgowych w firmie.</li>
                        </ul>
                    </div>
                    <div className="ab-lft">
                        <h4>Komunikacja</h4>
                        <p>Większość tematów realizujemy za pomocą teamviera.</p>
                        <p>Lubimy też telefon i maila.</p>
                    </div>

                </div>
            </div>



        </div>

    )

}

export {About};