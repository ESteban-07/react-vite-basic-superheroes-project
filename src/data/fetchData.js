const API_URL =
  'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

export async function getSuperHeroes() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
