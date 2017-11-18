/**
 * README: https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server/README.md
 */

const API = {
  base: 'http://localhost:3001',

  headers: {
    'Authorization': 'blah',
  },

  /**
   * Promises
   */

  getCategoriesPromise() {
    const { base, headers } = this;
    return fetch(`${base}/categories`, { headers });
  },

  getPostsPromise() {
    const { base, headers } = this;
    return fetch(`${base}/posts`, { headers });
  },

  getPostsByCategoryPromise(category) {
    const { base, headers } = this;
    return fetch(`${base}/${category}/posts`, { headers });
  },

  /**
   * Categories
  */

  // Retrieve a single category object based on the 'path' key
  //
  // Returns:
  // {
  //    category: {}
  // }
  getCategory(path) {
    return this.getCategories()
      .then((res) => res.find(r => r.path === path));
  },

  // Retrieve all categories
  //
  // Returns:
  // {
  //    categories: [{}, {}, {}]
  // }
  getCategories() {
    return this.getCategoriesPromise()
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json());
  },

  /**
   * Posts
   */

  // Retrieve all posts
  //
  // Returns:
  // {
  //    posts: [{}, {}, {}]
  // }
  getPosts() {
    const promises = [
      this.getCategoriesPromise(),
      this.getPostsPromise(),
    ];

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

        return {
          posts,
          categories: categories.categories,
        };
      });
  },

  // Retrieve all posts for a given category
  //
  // Returns:
  // {
  //    categories: [{}]
  //    posts: [{}, {}, {}]
  // }
  getPostsByCategory(categoryPath = 'nonexistentcategory') {
    const promises = [
      this.getCategoriesPromise(),
      this.getPostsByCategoryPromise(categoryPath),
    ];

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
          categories: [ category ],
        };
      });
  },

  getPost(id) {
  },

  updatePost(id) {
  },

  /**
   * Comments
   */
}

export default API;
