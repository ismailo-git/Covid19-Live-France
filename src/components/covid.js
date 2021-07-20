import React, {useEffect, useState }from 'react';
import './covid.css';

export const Covid = () => {
        const [data, setData] = useState([]);

        const getCovidData = async () => {
            try {
                const response = await fetch('https://coronavirusapi-france.vercel.app/FranceLiveGlobalData');
                
                const Data = await response.json();
                console.log(Data.FranceGlobalLiveData[0]);
                setData(Data.FranceGlobalLiveData[0]);

            } catch(error){
                console.log(error);
            }
        }
        useEffect(() => {
            getCovidData();
        }, []);

    return (
        <div className="container">
            <h1>Covid-19 France en Live<span class="ping"></span></h1>
            <div class="box-container">
                <div className="box">
                    <h3>Pays : <span>{data.nom}</span></h3>
                </div>
                <div className="box">
                    <h3>Patients hospitalisés : <span>{data.hospitalises}</span></h3>
                </div>
                <div className="box">
                    <h3>Patients en réanimation : <span>{data.reanimation}</span></h3>
                </div>
                <div className="box">
                    <h3>Nouveaux patients hospitalisés: <span>{data.reanimation}</span></h3>
                </div>
                <div className="box">
                    <h3>Nouveaux patients en réanimation : <span>{data.nouvellesReanimations}</span></h3>
                </div>
                <div className="box">
                    <h3>Déces à l'hôpital: <span className="deces">{data.deces}</span></h3>
                </div>
                <div className="box">
                    <h3>Retours à domicile : <span className="retabli">{data.gueris}</span></h3>
                </div>
            </div>
        </div>
    )
}
