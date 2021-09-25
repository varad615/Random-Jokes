function getjoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((result) => result.json())
    .then((data) => {
        document.getElementById('joke').innerHTML = data.joke;
        console.log(data);
    });
}
