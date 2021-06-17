import { UserIcon } from "@heroicons/react/solid";

const NavBar = () => {
  return (
    <div className="bg-purple-600 min-h-screen text-blue-100 w-56 py-4 px-2">
      <div className="flex">
        <div className="mx-auto space-y-2 mb-4">
          <UserIcon className="w-24 h-24 text-white" />
          <p className="text-2xl font-bold">Xanpool</p>
        </div>
      </div>

      <nav>
          <ul>
              <li  className="py-2.5 px-4 hover:bg-blue-500 hover:text-white rounded">
                  <a href="#">Accounts</a>
              </li>
              <li  className="py-2.5 px-4 hover:bg-blue-500 hover:text-white rounded">
                  <a href="#">Settings</a>
              </li>
              <li  className="py-2.5 px-4 hover:bg-blue-500 hover:text-white rounded">
                  <a href="#">Contact</a>
              </li>
          </ul>
      </nav>
    </div>
  );
};

export default NavBar;
