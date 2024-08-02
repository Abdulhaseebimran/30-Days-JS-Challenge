// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const jokeUrl = "https://official-joke-api.appspot.com/random_joke";

async function getRandomJoke() {
  try {
    const response = await axios.get(jokeUrl);
    const joke = response.data;

    console.log(`Here's a joke for you: ${joke.setup} - ${joke.punchline}`);
  } catch (error) {
    console.error("Error fetching the joke:", error);
  }
}

getRandomJoke();
