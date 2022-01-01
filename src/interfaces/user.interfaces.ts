export interface UserStoreTypes {
    loading: boolean;
    error: false;
    errorMessage: string;
    token: string;
    profile: ProfileTypes;
    pageLoading : boolean;
    addressFound : Status
  }

  enum Status { 
    NONE = -1,
    NOT_FOUND = 0,
    FOUND = 1
  }
  
  export type ProfileTypes = {
    firstName: string;
    lastName: string;
  };
  