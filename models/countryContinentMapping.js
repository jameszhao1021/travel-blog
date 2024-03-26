const axios = require('axios');

async function countryContinentMapping() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data;
        const countryContinentMapping = {};

        await countries.forEach(country => {
            const name = country.name.common;
            let continent 
            if (country.region == 'Americas'){
                if(country.subregion == 'South America'){
                    continent = country.subregion;
                } else {
                continent = 'North America';
                }
            }else{
                continent= country.region
            }
            countryContinentMapping[name] = continent;
        });

 console.log(countryContinentMapping)
        return countryContinentMapping;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return {};
    }
}

module.exports = countryContinentMapping();