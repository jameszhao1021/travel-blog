
import sendRequest from './send-request';
const BASE_URL = '/api/blogs';

export function getNotes() {
    console.log('check get data')
    return sendRequest(`${BASE_URL}/get-blog`);
  }

export function addNote(noteForm) {
  
    return sendRequest(`${BASE_URL}/send-blog`, 'POST', noteForm);
}
  