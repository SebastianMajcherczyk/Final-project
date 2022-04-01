import React, {useEffect, useState} from "react";

const ExchangeRates = () => {
        const [exchRates, setRates] = useState([]);
        const [tableDate, setTableDate] = useState()


    useEffect(() => {
        fetch('https://api.nbp.pl/api/exchangerates/tables/a/?format=json')

            .then((response) => {
                if (response.ok === true) return response.json()
                else console.log("Wystąpił błąd")
            })

            .then(data => {
                setRates(data[0].rates);
                setTableDate(data[0].effectiveDate);
            })
            .catch(err => {console.log("Błąd pobierania", err);
            });
    },[]);

    if (exchRates.length === 0) return null;
    return(

        <>
            <section className="exchangetable container" id="exchange">
                    <div className="exchange-table">
                        <table>
                            <thead>
                            <tr><th colSpan = '3'> Kursy średnie NBP z dnia: {tableDate}</th></tr>
                            <tr>
                                <th>Waluta</th>
                                <th>Symbol</th>
                                <th>Kurs</th>
                            </tr>
                            </thead>
                        <tbody>
                        {exchRates.map(function(rate, index) {
                            return <tr key={index}>
                                <td>{rate.currency}</td>
                                <td>{rate.code}</td>
                                <td>{rate.mid} PLN</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )

}

export {ExchangeRates};