import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";


export interface NameInterface {
  firstName: string;
  lastName: string;
}

export interface AddressInterface {
  city: string;
  street: string;
  number: number;
}

export interface IUser {
  id: number;
  email: string;
  name: NameInterface;
  address: AddressInterface;
  phone: string;
}
 
export interface UsersState {
  users: Array<IUser>;
  userDetail: IUser
  pending: boolean;
  error: boolean;
}

export const initialState: UsersState = {
  users: [] as IUser[],
  userDetail: {
    id: 0,
    email: '',
    name: {
      firstName: '',
      lastName: '',
    },
    address: {
      city: '',
      street: '',
      number: 0,
    },
    phone: ''
  },
  pending: false,
  error: false,
};

export const fetchUserList = createAsyncThunk('user/getUserList', async () => {
  const response = await axios.get('https://fakestoreapi.com/users');
  return response.data;
})


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
    addUser(state, action) {
      state.users.push({
        id: action.payload.id,
        email: action.payload.email,
        name: {
          firstName: action.payload.name.firstname,
          lastName: action.payload.name.lastname,
        },
        address: {
          city: action.payload.address.city,
          street: action.payload.address.street,
          number: action.payload.address.number,
        },
        phone: action.payload.phone,
      })
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserList.pending, state => {
        state.pending = true;
      })
      .addCase(fetchUserList.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.users = [];
        payload.forEach((element: any) => {
          state.users.push({
            id: element.id,
            email: element.email,
            name: {
              firstName: element.name.firstname,
              lastName: element.name.lastname,
            },
            address: {
              city: element.address.city,
              street: element.address.street,
              number: element.address.number,
            },
            phone: element.phone,
          });
        });
      })
  },
});


export const { getUserDetail } = userSlice.actions

export const getListUser = (state: RootState) => state.users

export default userSlice.reducer;