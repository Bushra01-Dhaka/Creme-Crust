import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar  bg-primary bg-opacity-40  fixed z-99 px-6 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost  btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#FFE98A] hover:text-[#1A1A1D]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content uppercase bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="menus">Menu</Link>
            </li>
            <li>
              <a>Reserve</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <Link
                href="login"
                className="btn btn-accent text-primary btn-sm w-full"
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="font-bold text-accent text-xl mx-auto" href="/">
          Crème & Crust
        </Link>
      </div>

      <div className="navbar-end ">
        <div>
          <Link href="/login">
            <button className=" btn btn-accent transition-all duration-75 hover:scale-110 text-primary btn-xs uppercase rounded-full border-0 ">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
