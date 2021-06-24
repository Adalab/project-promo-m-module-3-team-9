function getDataFromApi(json) {
  return fetch("http://localhost:4000/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export default getDataFromApi;
