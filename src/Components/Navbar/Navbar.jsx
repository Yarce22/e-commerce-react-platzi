import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex justify-center items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
          to='/'
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/'
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/electronics'
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/jewelery'
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/mens-clothing'
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            men clothing
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/womens-clothing'
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            women clothing
          </NavLink>
        </li>
      </ul>
      <ul className="flex justify-center items-center gap-3">
        <li className="text-black/60">
          alejomira96@gmail.com
        </li>
        <li>
          <NavLink
          to='/my-orders'
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/my-account'
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/sign-in'
          className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          🛒 0
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;