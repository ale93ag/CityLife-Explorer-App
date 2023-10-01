// fetchData.js

export async function getData(city) {
    const getScore = await fetch(
      `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`
    );
  
    const dataScore = await getScore.json();
  
    return dataScore;
  }
  