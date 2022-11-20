import { Link } from "react-router-dom";

function Navbar({ mode, changeMode }) {
  return (
    <div
      className={`${mode === "light" ? "bg-gray-100" : "dark : bg-slate-900"} sticky top-0 `}
    >
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <li
            className={`flex title-font font-medium list-none items-center${
              mode === "light " ? "text-slate-900" : "white"
            } mb-4 md:mb-0 cursor-pointer`}
          >
            <span
              className={`ml-3 text-xl hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                mode === "light" ? "text-slate-900" : "white"
              }`}
            >
              <Link to="/">Hind News</Link>
            </span>
          </li>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center list-none cursor-pointer">
            <li
              className={`mr-5 hover:text-${
                mode === "light" ? "dark : gray-900" : "white"
              }`}
            >
              <Link to="/sports"> Sports </Link>
            </li>
            <li
              className={`mr-5 hover:text-${
                mode === "light" ? "dark : gray-900" : "white"
              }`}
            >
              <Link to="/business">Buisness </Link>
            </li>
            <li
              className={`mr-5 hover:text-${
                mode === "light" ? " dark:gray-900" : "white"
              }`}
            >
              <Link to="/entertainment">Entertainment </Link>
            </li>
            <li
              className={`mr-5 hover:text-${
                mode === "light" ? "dark : gray-900" : "white"
              }`}
            >
              <Link to="/health">Health </Link>
            </li>
          </nav>
          
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9  rounded-full float-left h-5 align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm ml-60"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={changeMode}
                />
                <label
                  className={`form-check-label inline-block text-${
                    mode === "light" ? "gray-900" : "white"
                  } `}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {" "}
                  Switch Mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
