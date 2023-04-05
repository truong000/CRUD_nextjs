import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserList, getListUser } from "@/redux/Slice/userSlice";
import { useEffect } from "react";
import Style from '@/styles/ListUser.module.css'
import Link from "next/link";
import { useRouter } from "next/router";
import ModalDialog from "@/components/ButtonPopup";
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'


const Users: React.FC = () => {
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

  const router = useRouter()

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
                <button><Link href={`/users/${user.id}`}>Detail</Link></button>
                <button onClick={() => router.push(`/users/${user.id}`)}>HEEH</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      <ModalDialog />
    </div>
  );
}

export default Users;