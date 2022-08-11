import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCountryDetail, getSelectedCountry } from '../../features/CountriesSlice';
import './Country.scss';

const Country = () => {

  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCountryDetail(name))
  }, [])

  const countryData = useSelector(getSelectedCountry);
  console.log(countryData)

return (
  // <div></div>
  <>
    {
    countryData && <div className="renderCountry">
    <Link to="/">
      <button className='back_button'> <i className="fa-solid fa-arrow-left"></i> Back</button>
    </Link>
    
    <div className="country">
    
    <div className="country__flag">
      <img src={countryData[0]?.flags?.svg} alt="" />
    </div>

    <div className="country__details">
      <div className="main">
        <div className="left">
          <h1>{countryData[0]?.name.common}</h1>
          <p>Population: {countryData[0]?.population}</p>
          <p>Region: {countryData[0]?.region}</p>
          <p>Sub-Region: {countryData[0]?.subregion}</p>
          <p>Capital: {countryData[0]?.capital[0]}</p>
        </div>

        <div className="right">
          <p>Currencies: {countryData[0]?.currencies[0]}</p> 
          <p>Languages: {countryData[0]?.languages[0]}</p>
        </div>
      </div>
      
      <div className="border_countries">
        <p className='border__country'>Continents: <span>{countryData[0]?.continents[0]}</span></p>
      </div>
    </div>
  </div>
  </div>
  }
  </>
  

  
  
)
}

export default Country