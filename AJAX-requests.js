// GET Request using fetch

fetch(URL).then(function(response) {
  return response.json().then(function(data) {
    console.log(data);
  });
});
