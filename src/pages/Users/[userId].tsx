import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export async function getStaticProps() {
    const param = useParams
    const response = await fetch(`https://fakestoreapi.com/users/${param}`);
    const data = await response.json();

    return {
        props: {
            data,
        },
    }
}

export async function getStaticPaths() {
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: false, // can also be true or 'blocking'
    }
}


export default function DetailUser({}) {

    const {id} = useParams()
    const userDetail = useSelector((state: RootState) => state.users.userDetail)
    const dispatch = useDispatch(); 

console.log("param", id);
    
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
                        <td >user.id</td>
                        <td >user.email</td>
                        <td >user.name.firstName user.name.lastName</td>
                        <td >user.address.street user.address.number, user.address.city</td>
                        <td >user.phone</td>
                        <td >
                            <button>Detail</button>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

// export const getStaticProps: GetStaticProps = async (params) => {
//     const { data } = await axios.get(`https://fakestoreapi.com/users/${params.userId}`);
//     const user = data;
//     return {
//         props: {
//             user,
//         },
//     };
// };

// export const getStaticPaths: GetStaticPaths = async () =>{
//     const response = await fetch(`https://fakestoreapi.com/users`);
//     const data = await response.json()
//     const paths = data.map((user: { id: any; }) => {
//         return {
//             params: { userId: `${user.id}`}
//         }
//     })

//     return {
//         paths: paths,
//         fallback: true
//     }
// }



