const axios = require('axios');

async function countryContinentMapping() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data;
        const countryContinentMapping = {};

        countries.forEach(country => {
            const name = country.name.common;
            const continent = country.region || country.subregion || "Unknown";
            countryContinentMapping[name] = continent;
        });


        return countryContinentMapping;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return {};
    }
}

module.exports = countryContinentMapping();