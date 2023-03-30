import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserList, getListUser } from "@/redux/Slice/userSlice";
import { useEffect } from "react";
import Style from '@/styles/ListUser.module.css'
import router from "next/router";


export const ListUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    users,
    pending,
    error,
  } = useAppSelector(getListUser);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [])


  if (pending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>error</div>
  }

  return (
    <div>
      <h2>List Users</h2>
      <table className={Style.table}>
        <thead>
          <tr className={Style.tr}>
            <th className={Style.th}>ID</th>
            <th className={Style.th}>Email</th>
            <th className={Style.th}>Name</th>
            <th className={Style.th}>Address</th>
            <th className={Style.th}>Phone</th>
            <th className={Style.th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr className={Style.tr} key={user.id}>
              <td className={Style.td}>{user.id}</td>
              <td className={Style.td}>{user.email}</td>
              <td className={Style.td}>{user.name.firstName} {user.name.lastName}</td>
              <td className={Style.td}>{user.address.street}, {user.address.number}, {user.address.city}</td>
              <td className={Style.td}>{user.phone}</td>
              <td className={Style.td}>
                <button onClick={() => router.push(`/UserDetail/${user.id}`)}>Detail</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}