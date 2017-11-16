/**
 * README: https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server/README.md
 */

NOT USED

import { api, headers } from './api';

export function fetchCategories() {
  return fetch(`${api}/categories`, { headers })
    .then((res) => res.json());
}
