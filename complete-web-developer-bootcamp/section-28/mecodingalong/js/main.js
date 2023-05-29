const jokes = document.querySelector(".list-jokes");
const button = document.querySelector(".button");

// function to fetch dad jokes api
async function dadJokes() {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const resp = await fetch("https://icanhazdadjoke.com", config);
    const data = await resp.json();
    return data.joke;
  } catch (e) {
    console.log("Error!", e);
  }
}

// function to create new li's
async function newJoke() {
  const jokeText = await dadJokes();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
}

button.addEventListener("click", newJoke);
