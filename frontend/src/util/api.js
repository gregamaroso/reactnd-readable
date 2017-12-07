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

  getPostsPromise(extraHeaders = {}) {
    const { base, headers } = this;
    return fetch(`${base}/posts`, {
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      ...extraHeaders
    });
  },

  getPostsByCategoryPromise(category) {
    const { base, headers } = this;
    return fetch(`${base}/${category}/posts`, { headers });
  },

  getPostPromise(id, extraHeaders = {}) {
    const { base, headers } = this;
    return fetch(`${base}/posts/${id}`, {
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      ...extraHeaders
    });
  },

  getAddCommentPromise(extraHeaders = {}) {
    const { base, headers } = this;

    return fetch(`${base}/comments`, {
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      ...extraHeaders
    });
  },

  getCommentPromise(id, extraHeaders = {}) {
    const { base, headers } = this;
    return fetch(`${base}/comments/${id}`, {
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      ...extraHeaders
    });
  },

  getCommentsByPostIdPromise(postid) {
    const { base, headers } = this;
    return fetch(`${base}/posts/${postid}/comments`, { headers });
  },

  /**
   * Combo Requests
   */

 // Retrieve all categories and posts
 //
 // Returns:
 // {
 //    categories: [{}, {}]
 //    posts: [{}, {}, {}]
 // }
 getCategoriesAndPosts() {
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
      .then((res) => res.json())
      .then((res) => res.categories);
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
  getPosts(category = '') {
    const pp = category.length ?
      this.getPostsByCategoryPromise(category) :
      this.getPostsPromise();

    return pp
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json());
  },

  getPost(id) {
  },

  createPost(post) {
    const headers = {
      method: 'POST',
      body: JSON.stringify(post)
    };

    return this.getPostsPromise(headers)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json());
  },

  updatePost(id, post) {
    const headers = {
      method: 'PUT',
      body: JSON.stringify(post)
    };

    return this.getPostPromise(id, headers)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json());
  },

  voteOnPost(id, direction) {
    // Sanitize the direction variable, defaulting to up
    direction = (direction === 'down') ? 'downVote' : 'upVote';

    const headers = {
      method: 'POST',
      body: JSON.stringify({
        option: direction,
      })
    };

    return this.getPostPromise(id, headers)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json());
  },

  /**
   * Comments
   */
  getCommentsByPostId(postid) {
    return this.getCommentsByPostIdPromise(postid)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json());
  },

  createComment(comment) {
    const headers = {
      method: 'POST',
      body: JSON.stringify(comment)
    };

    return this.getAddCommentPromise(headers)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => Object.assign({}, res, comment));  // combine response with original data
  },

  updateComment(id, comment) {
    const headers = {
      method: 'PUT',
      body: JSON.stringify({
        timestamp: new Date().valueOf(),
        body: comment.body,
      })
    };

    return this.getCommentPromise(id, headers)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json());
  },

  voteOnComment(id, direction) {
    // Sanitize the direction variable, defaulting to up
    direction = (direction === 'down') ? 'downVote' : 'upVote';

    const headers = {
      method: 'POST',
      body: JSON.stringify({
        option: direction,
      })
    };

    return this.getCommentPromise(id, headers)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json());
  },
}

export default API;
