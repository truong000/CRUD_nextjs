import { IUser, getUserDetail } from "@/redux/Slice/userSlice";
import { RootState } from "@/redux/store";
import { get } from "http";

import React from "react";

interface UserProps {
    user: IUser;
}

function DetailUser({user}: UserProps) {

    return (

        <div>
            <h2>List Users</h2>
            <table >
                <thead>
                    <tr >
                        <th >ID</th>
                        <th >Email</th>
                        <th >Name</th>
                        <th >Address</th>
                        <th >Phone</th>
                        <th >Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr >
                        <td >{user.id}</td>
                        <td >{user.email}</td>
                        <td >{user.name.firstName} {user.name.lastName}</td>
                        <td >{user.address.street} {user.address.number}, {user.address.city}</td>
                        <td >{user.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default DetailUser;

export async function getStaticPaths() {
    const response = await fetch('https://fakestoreapi.com/users');
    const users = await response.json();

    const paths = users.map((user: IUser) => ({
        params: {userId: user.id.toString()},
    }));

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }: { params: { userId: string } }) {
    const res = await fetch(
        `https://fakestoreapi.com/users/${params.userId}`
    );
    const user = await res.json();

    return {props: {user}};
}




