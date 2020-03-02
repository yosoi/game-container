export default function() {
  return fetch(
    "https://3bghmn7i1g.execute-api.us-east-2.amazonaws.com/dev/"
  ).then(
    (response) => response.json()
  ).then((data) => {
    return data;
  });
}
