// aa59c5071607be3e07573c2df601f3ff13eb17891ab99fe6296f9015;

function json(url) {
  return fetch(url).then((res) => res.json());
}

let apiKey = "your_api_key";
json(`https://api.ipdata.co?api-key=${apiKey}`).then((data) => {
  console.log(data.ip);
  console.log(data.city);
  console.log(data.country_code);
  // so many more properties
});
