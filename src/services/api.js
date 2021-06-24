function getDataFromApi(json) {
  return fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => response.json());
}

export default getDataFromApi;
