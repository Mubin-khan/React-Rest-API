import React from 'react';
import './Country.css';

function Country(props) {
    const {name, flag, region, capital} = props.data;
    return (
        <div className="country">
            <div>
                <h3>Name: {name}</h3>
                <p>Capital: {capital} Region: {region}</p>
            </div>
            <div>
                <img src={flag} alt="" />
            </div>
        </div>
    );
}

export default Country;