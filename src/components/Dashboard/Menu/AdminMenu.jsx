import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'

const AdminMenu = () => {
    return (
        <>
            <MenuItem
                label='Manage Users'
                address='manage-users'
                icon={FaUserCog}
            />
        </>
    )
}

export default AdminMenu