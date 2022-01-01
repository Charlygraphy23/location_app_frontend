import axiosInstance from './http';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signIn: (email: string, password: string) => {
    return axiosInstance.post('/user/sign-in', { email, password });
  },

  getAdminProfile: () => {
    return axiosInstance.get('/user/get-profile');
  },

  getAddressInfo : (payload : any) => {
    return axiosInstance.post('/user/check-radius', payload);
  }
};
