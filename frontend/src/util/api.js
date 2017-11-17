/**
 * README: https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server/README.md
 */

const api = 'http://localhost:3001';
const headers = {
  'Authorization': 'blah',
};

/**
 * Promises
 */

function getCategoriesPromise() {
 return fetch(`${api}/categories`, { headers });
}

function getPostsPromise() {
 return fetch(`${api}/posts`, { headers });
}

function getPostsByCategoryPromise(category) {
  return fetch(`${api}/${category}/posts`, { headers });
}

/**
 * Categories
 */

// Retrieve a single category object based on the 'path' key
//
// Returns:
// {
//    category: {}
// }
export function getCategory(path) {
  return getCategories()
    .then((res) => res.find(r => r.path === path));
}

// Retrieve all categories
//
// Returns:
// {
//    categories: [{}, {}, {}]
// }
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

// Retrieve all posts
//
// Returns:
// {
//    posts: [{}, {}, {}]
// }
export function getPosts() {
  return getPostsPromise()
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    })
    .then((res) => res.json());
}

// Retrieve all posts for a given category
//
// Returns:
// {
//    category: {}
//    posts: [{}, {}, {}]
// }
export function getPostsByCategory(categoryPath = 'nonexistentcategory') {
  const promises = [
    getCategoriesPromise(),
    getPostsByCategoryPromise(categoryPath),
  ]

  return Promise.all(promises)
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
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(responses => {
      const [ categories, posts ] = responses;
      const category = categories.categories.find(cat => cat.path === categoryPath);

      return {
        posts,
        category,
      };
    });
}

export function getPost(id) {
}

export function updatePost(id) {
}

/**
 * Comments
 */
