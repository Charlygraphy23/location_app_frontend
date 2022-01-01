export interface AdminStoreTypes {
  loading: boolean;
  error: false;
  errorMessage: string;
  token: string;
  profile: ProfileTypes;
  pageLoading : boolean;
}

export type ProfileTypes = {
  firstName: string;
  lastName: string;
  city: string;
};
