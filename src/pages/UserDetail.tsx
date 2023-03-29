export default function DetailUser() {
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
}