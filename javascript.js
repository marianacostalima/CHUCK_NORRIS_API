// Função assíncrona para buscar uma piada do Chuck Norris da API
async function fetchChuckNorrisJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        const data = await response.json();
        return data.value;
    } catch (error) {
        console.error('Error fetching joke:', error);
        return 'An error occurred while fetching the joke.';
    }
}
// Função assíncrona para exibir uma piada do Chuck Norris
async function displayChuckNorrisJoke() {
    const jokeElement = document.getElementById('chuckNorrisJoke');
    jokeElement.textContent = 'Fetching joke...'; // Define o texto enquanto busca a piada

    const joke = await fetchChuckNorrisJoke(); // Busca a piada
    jokeElement.textContent = joke;  // Exibe a piada no elemento do HTML
}
// Função para exibir a dica de clique para obter uma piada
function showClickHint() {
    const askJokeButton = document.getElementById('askJokeButton');
    askJokeButton.style.display = 'none'; // Esconde o botão "Quer ouvir uma piada?"

    const clickHint = document.getElementById('clickHint');
    clickHint.style.display = 'block'; // Exibe a dica de clique

    const getJokeButton = document.getElementById('getJokeButton');
    getJokeButton.style.display = 'block'; // Exibe o botão "Get Joke"
}
// Obtém o botão "Get Joke" e adiciona um ouvinte de evento para exibir a piada
const getJokeButton = document.getElementById('getJokeButton');
getJokeButton.addEventListener('click', displayChuckNorrisJoke);
// Obtém o botão "Quer ouvir uma piada?" e adiciona um ouvinte de evento para exibir a dica
const askJokeButton = document.getElementById('askJokeButton');
askJokeButton.addEventListener('click', showClickHint);