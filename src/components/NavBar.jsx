import { useState } from "react";
import akram from "../assets/akram-logo.png";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()
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
          <img src={akram}  onClick={() => navigate('/')} className="logo_dimentions cursor-pointer" alt="" />
        </div>
        <div className="sm:flex justify-evenly gap-4 hidden">
          <span className="routes    cursor-pointer trans sm:text-lg text-sm" onClick={() => navigate('/')}>Home</span>
          <span className="routes    cursor-pointer trans sm:text-lg text-sm" onClick={() => navigate('/projects')}>Projects</span>
          <span className="routes    cursor-pointer trans sm:text-lg text-sm" onClick={() => navigate('/about')}>About</span>
          <span className="routes    cursor-pointer trans sm:text-lg text-sm" onClick={() => navigate('/contact')}>Contact</span>
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
               <MenuIcon className="text-white"/>
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
                <MenuItem onClick={handleClose} ><span className="routes_color  hover:text-black  cursor-pointer trans sm:text-lg text-sm " onClick={() => navigate('/')}>Home</span> </MenuItem>
                <MenuItem onClick={handleClose} ><span className="routes_color  hover:text-black  cursor-pointer trans sm:text-lg text-sm" onClick={() => navigate('/about')}>About</span> </MenuItem>
                <MenuItem onClick={handleClose} ><span className="routes_color  hover:text-black  cursor-pointer trans sm:text-lg text-sm" onClick={() => navigate('/projects')}>Projects</span> </MenuItem>
                <MenuItem onClick={handleClose} ><span className="routes_color  hover:text-black  cursor-pointer trans sm:text-lg text-sm" onClick={() => navigate('/contact')}>Contact</span></MenuItem>
              </Menu>
        </div>
       
      </div>
    </div>
  );
}

export default NavBar;
