import db from '../../config/database/index';

import {
  fetchAllPhotosHelper,
  fetchPrimaryPhotoHelper,
  addPhotoHelper,
  deletePhotoHelper,
  updatePrimaryPhotoHelper
} from './photoSQLHelpers';

export const fetchAllPhotosQuery = async userId => {
  try {
    const queryString = fetchAllPhotosHelper();
    const { rows } = await db.query(queryString, [userId]);
    return rows;
  } catch (err) {
    console.log('Error on fetchAllPhotosQuery', err);
  }
};

export const fetchPrimaryPhotoQuery = async userId => {
  try {
    const queryString = fetchPrimaryPhotoHelper();
    const { rows } = await db.query(queryString, [userId]);
    console.log('Successfully used fetchPrimaryPhotoQuery');
    return rows[0];
  } catch (err) {
    console.log('Error with fetchPrimaryPhotoQuery', err);
  }
};

export const addPhotoQuery = async ({ body }) => {
  try {
    const { url, id } = body;
    const queryString = addPhotoHelper()
    const data = await db.query(queryString, [url,id]);
    return data
  } catch (err) {
    console.error
  }
};

export const deletePhotoQuery = async (req) => {
  try {
    const queryString = deletePhotoHelper(req.params);
    const { rows } = await db.query(queryString, [req.params.photoId])
    return rows
  } catch (err) {
    console.error
  }
};

export const updatePrimaryPhotoQuery = async ({ userId, photoId }) => {
  try {
    const queryString = updatePrimaryPhotoHelper();
    console.log('this is first query', queryString[0]);
    const temp = await db.query(queryString[0], [userId]);
    console.log('this is second query', queryString[1]);
    const { rows } = await db.query(queryString[1], [userId, photoId]);
    console.log(rows);
    return rows[0];
  } catch (err) {
    console.log('Error with updatePrimaryPhotoQuery:', err);
  }
};
