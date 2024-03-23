import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

function CountrySelectForm({handleChange, newBlog, setNewBlog, selectedCountry, setSelectedCountry}) {
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    // Fetch list of countries from the API
    async function fetchCountries(){
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryOptions = response.data.map(country => ({
          value: country.name.common,
          label: country.name.common
        }));
        countryOptions.sort((a, b) => a.label.localeCompare(b.label));

        setCountries(countryOptions);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  function handleCountryChange (selectedOption) {
    setSelectedCountry(selectedOption);

    handleChange({ target: { name: 'country', value: selectedOption.value } })
  };

  return (
    // <div>
    //   <h2>Choose a Country</h2>
      <Select
        name='country'
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countries}
        placeholder="Select a country..."
      />
      /* {selectedCountry && (
        <p>Selected country: {selectedCountry.label}</p>
      )} */
    // </div>
  );
}

export default CountrySelectForm;