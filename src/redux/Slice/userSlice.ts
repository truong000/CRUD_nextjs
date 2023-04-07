import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { client } from "@/api/client";
import { json } from "stream/consumers";


export interface NameInterface {
  firstname: string;
  lastname: string;
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
  userDetail: IUser;
  pending: boolean;
  error: boolean;
}

export const initialState: UsersState = {
  users: [] as IUser[],
  userDetail: {
    id: 0,
    email: '',
    name: {
      firstname: '',
      lastname: '',
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

    addUser: (state, action) => {
      const newUser: IUser = {
        id: action.payload.id,
        email: action.payload.email,
        name: {
          firstname: action.payload.firstname,
          lastname: action.payload.lastname
        },
        address: {
          city: action.payload.city,
          street: action.payload.street,
          number: action.payload.number
        },
        phone: action.payload.phone
      };

      state.users.push(newUser);

      console.log('newUser', newUser)

      axios.post<UsersState>(
        'https://fakestoreapi.com/users',
        {
          email: state.userDetail.email,
          username: '',
          password: '',
          name: {
            firstname: state.userDetail.name.firstname,
            lastname: state.userDetail.name.lastname
          },
          address: {
            city: state.userDetail.address.city,
            street: state.userDetail.address.street,
            number: state.userDetail.address.number,
            zipcode: '',
            geolocation: {
              lat: '',
              long: ''
            }
          },
          phone: state.userDetail.phone
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
    },
    editUser: (state, action) => {
      const {id, email, firstname, lastname, city, street, number, phone} = action.payload
      const existingUser = state.users.find((user) => user.id === id)
      if (existingUser) {
        existingUser.name.firstname = firstname,
        existingUser.name.lastname = lastname,
        existingUser.email = email,
        existingUser.address.number = number,
        existingUser.address.street = street,
        existingUser.address.city = city,
        existingUser.phone = phone
      }

      console.log('state', existingUser?.id, existingUser?.name.firstname, existingUser?.name.lastname)

    },
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
              firstname: element.name.firstname,
              lastname: element.name.lastname,
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


export const { addUser, editUser } = userSlice.actions

export const getListUser = (state: RootState) => state.users

export default userSlice.reducer;