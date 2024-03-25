import sendRequest from './send-request';
const BASE_URL = '/api/galleries';

export function getMyGalleries() {
    
    return sendRequest(BASE_URL);
  }

export function createGallery(galleryForm) {
  console.log('check adding feature');
    return sendRequest(BASE_URL, 'POST', galleryForm);
}

export function getGalleryDetails(galleryId) {
  return sendRequest(`${BASE_URL}/${galleryId}`);
}
  