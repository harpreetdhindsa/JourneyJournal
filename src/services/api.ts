
//api to fetch countries
export const fetchCountries = async () => {
  try {
  
    const url = "https://restcountries.com/v3.1/all?fields=name,capital,region,flags";
    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    
    const formatted = data.map((country: any) => ({
      name: country.name?.common || "Unknown",
      capital: country.capital ? country.capital[0] : "N/A",
      region: country.region || "N/A",
      flag: country.flags?.png || country.flags?.svg, 
    }));

    return formatted;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};
