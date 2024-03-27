import sendRequest from './send-request';
const BASE_URL = '/api/blogs';

export function getMyBlogs() {
    return sendRequest(BASE_URL);
}

export function getSelectedBlogs(continent) {
  return sendRequest(`${ BASE_URL }/${ continent }`);
}

export function createBlog(blogForm) {
  console.log('check adding feature');
    return sendRequest(BASE_URL, 'POST', blogForm);
}

export async function deleteBlog(id) {
  return sendRequest(`${ BASE_URL }/${ id }`, 'DELETE');
}

export async function updateBlog(id, blog) {
  return sendRequest(`${ BASE_URL }/${ id }`, 'PUT', blog);
}

export function getBlogDetails(blogId) {
  return sendRequest(`${BASE_URL}/detail/${blogId}`);
}

export function createBlogComment(blogId, comment) {
  return sendRequest(`${BASE_URL}/${blogId}/comments`, 'POST', comment);
}

export function deleteComment(id) {
  return sendRequest(`/api/comments/${id}`, 'DELETE');
}

export function updateBlogComment( id, updatedData) {
  return sendRequest(`/api/comments/${id}`, 'PUT', updatedData);
}