
import sendRequest from './send-request';
const BASE_URL = '/api/blogs';

export function getMyBlogs() {
    
    return sendRequest(BASE_URL);
  }

export function createBlog(blogForm) {
  console.log('check adding feature')
    return sendRequest(BASE_URL, 'POST', blogForm);
}
  