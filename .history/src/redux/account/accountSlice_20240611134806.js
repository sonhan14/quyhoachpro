import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: {
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: ""
  },
  status: 'idle',
};


export const accountSlice = createSlice({
  name: 'account',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    doLoginAction: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isAuthenticated= true,
      state.isLoading= false,
      state.user= action.payload
    },

    doLGetAccountAction: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.isAuthenticated= true,
        state.isLoading= false,
        state.user= action.payload.user
      },

      doLogoutAction: (state,action) => {
        localStorage.removeItem('access_token');
        state.isAuthenticated= false,
        state.user = {
          email: "",
          phone: "",
          fullName: "",
          role: "",
          avatar: "",
          id: ""
        }
      },

      doUpdateUserInfoAction: (state, action) => {
        state.user.avatar = action.payload.avatar,
        state.user.phone = action.payload.phone,
        state.user.fullName = action.payload.fullName
      },

      doUploadAvatarAction: (state, action) => {
        state.tempAvatar = action.payload.avatar;
      }
   
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
     
  },
});

export const { doLoginAction,doLGetAccountAction,doLogoutAction, doUpdateUserInfoAction, doUploadAvatarAction } = accountSlice.actions;



export default accountSlice.reducer;
