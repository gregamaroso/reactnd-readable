/**
 * README: https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server/README.md
 */

const api = 'http://localhost:3001';
const headers = {
  'Authorization': 'blah'
};

/**
 * Multi-requests
 */

export function getMultiPromise(multi = []) {
  return Promise.all(multi);
}

export function getMulti(multi = []) {
  return getMultiPromise(multi)
    .then(responses => {
      let isError = false;
      let messages = [];

      // const isError = responses.some(element => !element.ok);
      responses.forEach(res => {
        if (!res.ok) {
          isError = true;
          messages.push(res.statusText);
        }
      });

      if (isError) {
        throw Error(messages.join("\n"));
      }

      return responses;
    })
    .then(responses => Promise.all(responses.map(res => res.json())));
}

/**
 * Categories
 */

export function getCategoriesPromise() {
  return fetch(`${api}/categories`, { headers });
}

export function getCategory(path = '') {
  return getCategories()
    .then((res) => res.find(r => r.path === path));
}

export function getCategories() {
  return getCategoriesPromise()
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    })
    .then((res) => res.json());
}

/**
 * Posts
 */

export function getPostsPromise(category = '') {
  return fetch(`${api}/${category}/posts`, { headers });
}

export function getPosts(category = '') {
  return getPostsPromise(category)
    .then((res) => res.json());
}

export function getPost(id) {
}

export function updatePost(id) {
}

/**
 * Comments
 */
