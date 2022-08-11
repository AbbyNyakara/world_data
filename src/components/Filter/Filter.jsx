import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import './Filter.scss';
import { fetchSearchedCountryDetail } from '../../features/CountriesSlice';

const Filter = () => {
  const [ term, setTerm ] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch an action to the store;
    dispatch(fetchSearchedCountryDetail(term))
    setTerm('')
  }

  return (
    <div className="filter">
      <form className="form__input" onSubmit={submitHandler} >
        <input type="search" name="search" id="search" placeholder="Search for a country" onChange={(e) => setTerm(e.target.value)} value={term}/>
        <button type='submit' className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>

      <div className='filter__regions'>
        <select name="select" id="select" className='select'>
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      
    </div>
    
  )
}

export default Filter

