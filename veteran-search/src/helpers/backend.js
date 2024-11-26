const backend = 'http://localhost:3000/';

export const search = async (name) => {
  return await fetch(`${backend}search?name=${name}`)
  .then(res => {
    switch (res.status) {
      case 200:
        return res.json();
      case 204:
        alert(`No results for search input: ${name}`)
        break;
      default:
        alert(`backend service returned unexpected error code. Response status = ${res.status}`)
        break;
    }
  })
  .catch(error => console.error(error));
}
