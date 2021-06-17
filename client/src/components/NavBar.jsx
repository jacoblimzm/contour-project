import { UserIcon } from "@heroicons/react/solid"

const NavBar = () => {
    return ( 
        <div className="bg-blue-600 min-h-screen text-blue-100 w-56">

        <a href="#">
            <UserIcon  className="w-24 h-24"/>
            <span className="">Xanpool</span>
        </a>
        <nav>

        </nav>
        </div>
     );
}
 
export default NavBar;