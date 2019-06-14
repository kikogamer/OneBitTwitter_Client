import axios from 'axios';
import API from '../../api.js';
import { UPDATE_IMAGE_PREVIEW } from './constants';


export function updateUserInfo({ id, name, email, description, photo }) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const params = { "user": { name, email, description, photo } }
  const request = API.put(`/users/${id}`, params, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => {
        window.Materialize.toast('Success in user update', 4000, 'green');
      },
      error => {
        window.Materialize.toast('Problem in user update', 4000, 'red');
      }
    );
  };
}

export function updateUserPassword({ id, password, password_confirmation }) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const params = { "user": { password, password_confirmation } }
  const request = API.put(`/users/${id}`, params, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => {
        window.Materialize.toast('Success in password update', 4000, 'green')
      },
      error => {
        window.Materialize.toast('Problem in password update', 4000, 'red')
      }
    );
  };
}

export function updateImagePreview(image_preview) {
  return {
    type: UPDATE_IMAGE_PREVIEW,
    payload: image_preview
  }
}