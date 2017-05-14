
const baseUrl = "https://api.yelp.com/v3/businesses/search?locaction=sanfrancisco&term=";
const accessToken = 'Bearer WPvr-NPSQT0w02IPuXfec-jgwx6UWBvNy8wcyW4Qb7LEkQYIboGR6N-IbqkschjMOI4Rr7MegZbXvnWxIN2IqS_CEB4SC92UDTWW85RshLweD4n5i1CuWboHBMUDWXYx';

export const getBusinessResults = (term) => (
  fetch(baseUrl + term + '&limit=10', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': accessToken
    }
  })
  .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.businesses;
      })
      .catch((error) => {
        console.error(error);
      })
  );
