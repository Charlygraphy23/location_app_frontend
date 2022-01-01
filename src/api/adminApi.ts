import axiosInstance from './http';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signIn: (email: string, password: string) => {
    return axiosInstance.post('/admin/sign-in', { email, password });
  },

  updateCity: (cityName:string , lat :number , lng : number) => {
    return axiosInstance.put('/admin/update-city', { cityName , lat , lng });
  },

  getAdminProfile: () => {
    return axiosInstance.get('/admin/profile');
  },
};
