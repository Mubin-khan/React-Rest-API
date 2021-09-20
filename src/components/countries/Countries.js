import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Country from '../country/Country';
import './Countries.css';

function Countries(props) {
   const [countries, setCountries] = useState([]);
   useEffect( () =>{
       fetch('https://restcountries.eu/rest/v2/all')
       .then(res => res.json())
       .then(data => setCountries(data))
   },[])

    return (
        <div>
            <h2 style={{color:"coral"}}>See All Countries Below</h2>
            <div className="countries">
                {
                    countries.map(country => <Country data={country}></Country>)
                }
            </div>      
        </div>
    );
}

export default Countries;