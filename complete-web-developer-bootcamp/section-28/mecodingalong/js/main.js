const output = document.querySelector(".output");
// const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

// const addNewJoke = async () => {
//   const jokeText = await dadJokes();
//   const newLI = document.createElement("LI");
//   newLI.append(jokeText);
//   jokes.append(newLI);
// };

async function dadJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    }
  };
  const resp = await fetch("https://icanhazdadjoke.com", config);
  const data = await resp.json();
  console.log(data);
  output.innerHTML = data.joke;
}
dadJokes()

button.addEventListener("click", dadJokes);
