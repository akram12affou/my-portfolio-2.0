import akram from "../assets/akram-logo.png";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className=" mx-auto bg_color hover:text-white  h-16">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div className="">
          <img src={akram} className="logo_dimentions" alt="" />
        </div>
        <div className="sm:flex justify-evenly gap-4 hidden">
          <span className="routes_color  hover:hover:text-slate-400  cursor-pointer trans sm:text-lg text-sm">Home</span>
          <span className="routes_color  hover:hover:text-slate-400  cursor-pointer trans sm:text-lg text-sm">About</span>
          <span className="routes_color  hover:hover:text-slate-400  cursor-pointer trans sm:text-lg text-sm"> Projects</span>
          <span className="routes_color  hover:hover:text-slate-400  cursor-pointer trans sm:text-lg text-sm">Contact</span>
        </div>
        <div className='sm:hidden '>
 <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
               <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
        </div>
       
      </div>
    </div>
  );
}

export default NavBar;
