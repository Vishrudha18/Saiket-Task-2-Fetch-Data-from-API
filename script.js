function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("setup").innerText = data.setup;
            document.getElementById("punchline").innerText = data.punchline;
        })
        .catch(error => {
            document.getElementById("setup").innerText = "Failed to load joke.";
            document.getElementById("punchline").innerText = "";
            console.error(error);
        });
}
