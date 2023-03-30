import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListUser } from './Users';



export default function Home() {

  return (
    <>
      <div>
        <h2>Column 2</h2>
        <div>
          <ListUser />
        </div>
      </div>
    </>
  );
}