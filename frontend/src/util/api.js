
export const api = 'http://localhost:3001';

export const headers = {
  'Authorization': 'blah'
};

export function fetchCategories() {
  return fetch(`${api}/categories`, { headers })
    .then((res) => res.json())
    .then(data => data.categories);
}
