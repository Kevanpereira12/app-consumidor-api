import axios from 'axios';

const apiKey = 'sk-...41Dp'; // Reemplaza con tu clave de API

const prompt = 'Una vez...'; // Tu texto de entrada

axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
  prompt: prompt,
  max_tokens: 100,
  temperature: 0.7
}, {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log(response.data.choices[0].text);
})
.catch(error => {
  console.error(error);
});