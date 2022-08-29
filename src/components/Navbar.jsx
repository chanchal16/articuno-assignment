import React from 'react'

export const Navbar = () => {
  return (
    <nav>
        <div className="app-container displayFlex justifyBetween itemsCenter p1">
            <a to="/" className="app-logo displayFlex itemsCenter">
                <GiUbisoftSun className="mr1"/>
                <span className='text-yellow-500'>E-</span>Shop
            </a>

            <ul className=" displayFlex listNoStyle gridGap4 itemsCenter">
                <li>
                    <NavLink end to="/" className="displayFlex itemsCenter" title="Home">
                        <AiOutlineHome />
                    </NavLink>
                </li>

                <li>
                    <NavLink end to="/leaderboard" className="displayFlex itemsCenter" title="View Leaderboard">
                        <AiOutlineBarChart />
                    </NavLink>
                </li>

                <li>
                    <NavLink end to={"/profile"} className="displayFlex itemsCenter" title="View Profile">
                        <AiOutlineUser />
                    </NavLink>
                </li>

                <li>
                    <button type="button" onClick={logout} className=" displayFlex itemsCenter bgTransparent borderNone" title="Logout">
                        <AiOutlineLogout />
                    </button>
                </li>

            </ul>
        </div>    
    </nav>
  )
}
