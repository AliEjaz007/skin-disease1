import { auth } from '../firebase/firebaseConfig';

const API_URL = 'http://localhost:5000/api';

export const uploadImage = async (file, analysisResult) => {
  try {
    const token = await auth.currentUser?.getIdToken();
    if (!token) throw new Error('No authentication token available');

    const formData = new FormData();
    formData.append('image', file);
    formData.append('analysisResult', JSON.stringify(analysisResult));

    const response = await fetch(`${API_URL}/images`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    if (!response.ok) throw new Error('Failed to upload image');
    return await response.json();
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const getUserImages = async () => {
  try {
    const token = await auth.currentUser?.getIdToken();
    if (!token) throw new Error('No authentication token available');

    const response = await fetch(`${API_URL}/images`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) throw new Error('Failed to fetch images');
    return await response.json();
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export const getImageById = async (imageId) => {
  try {
    const token = await auth.currentUser?.getIdToken();
    if (!token) throw new Error('No authentication token available');

    const response = await fetch(`${API_URL}/images/${imageId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) throw new Error('Failed to fetch image');
    return await response.blob();
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
}; 