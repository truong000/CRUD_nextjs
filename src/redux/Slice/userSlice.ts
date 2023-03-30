import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";


interface NameInterface {
  firstName: string;
  lastName: string;
}

interface AddressInterface {
  city: string;
  street: string;
  number: number;
}

interface IUser {
  id: number;
  email: string;
  name: NameInterface;
  address: AddressInterface;
  phone: string;
}

interface UsersState {
  users: Array<IUser>;
  pending: boolean;
  error: boolean;
}

const initialState: UsersState = {
  users:[] as IUser[],
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
    
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserList.pending, state => {
        state.pending = true;
      })
      .addCase(fetchUserList.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.users = [];
        payload.forEach((element:any) => {
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
      .addCase(fetchUserList.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const getListUser = (state: RootState) => state.users

export default userSlice.reducer;