import sendRequest from './send-request';
const BASE_URL = '/api/search';

export async function searchBlogs(searchTerm) {
    // Construct the query string with the search term
    const url = `${ BASE_URL }?searchTerm=${ searchTerm }`;
    // console.log(url);
    return sendRequest(url);
  }