import sendRequest from './send-request';
const BASE_URL = '/api/profiles';


export async function getMyProfile() {
    return sendRequest(BASE_URL);
}


export async function updateProfile(id, profile) {
    return sendRequest(`${ BASE_URL }/${ id }`, 'PUT', profile);
  }