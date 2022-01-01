import Geocode from 'react-geocode';


export const getToken = () => {
    const adminToken = localStorage.getItem('$admin_');
    const userToken = localStorage.getItem('$user_');
    if (adminToken) return adminToken
    if(userToken) return userToken
  }

  export const clearTokens = () => {

    localStorage.removeItem('$user_')
    localStorage.removeItem('$admin_')

  }

export const geoCodeConfig =() => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY ?? ''
  Geocode.setApiKey(apiKey);
  Geocode.setLanguage('en');
  Geocode.enableDebug();
}