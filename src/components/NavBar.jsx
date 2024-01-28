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
    <div className=" mx-auto bg-[#242021] hover:text-white  h-22 sticky top-0 z-10 ">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div className="">
          <img src={akram}  onClick={() => navigate('/')} className="logo_dimentions cursor-pointer" alt="" />
        </div>
        <div className="sm:flex justify-evenly gap-4 hidden">
          <a className="routes  text_decoration_none  cursor-pointer trans sm:text-lg text-sm" href="#">Home</a>
          <a className="routes  text_decoration_none   cursor-pointer trans sm:text-lg text-sm" href="#about">About</a>
          <a className="routes  text_decoration_none   cursor-pointer trans sm:text-lg text-sm" href="#projects" >Projects</a>
          <a className="routes  text_decoration_none   cursor-pointer trans sm:text-lg text-sm" href="#contact">Contact</a>
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
                <MenuItem onClick={handleClose} ><a  href="#" className="routes_color  hover:text-black  cursor-pointer trans sm:text-lg text-sm  text_decoration_none" >Home</a> </MenuItem>
                <MenuItem onClick={handleClose} ><a href="#about" className="routes_color  hover:text-black  cursor-pointer trans sm:text-lg text-sm text_decoration_none" >About</a> </MenuItem>
                <MenuItem onClick={handleClose} ><a href="#projects" className="routes_color  hover:text-black  cursor-pointer trans sm:text-lg text-sm text_decoration_none" >Projects</a> </MenuItem>
                <MenuItem onClick={handleClose} ><a href="#contact" className="routes_color  hover:text-black  cursor-pointer trans sm:text-lg text-sm text_decoration_none">Contact</a></MenuItem>
              </Menu>
        </div>
       
      </div>
      <div>
        <div className="board">
        
        </div>
      </div>
    </div>
  );
}

export default NavBar;
