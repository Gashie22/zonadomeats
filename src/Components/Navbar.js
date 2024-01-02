/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import logo1 from "../Assets/logo2.PNG"
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from 'react-scroll'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      url:"/home"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      url:"about"
    },
    {
      text: "Directions",
      icon: <CommentRoundedIcon />,
      url:"testimonial"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      url:"footer"
    },
    {
      text: "Services",
      icon: <ShoppingCartRoundedIcon />,
      url:"work"
    },
  ];
  return (
    <nav name='navbar' className=" bg-white  flex justify-between items-center w-full p-2 m-0 ease-out duration-700">
      <div className="">
        <a className=" text-yellow-500 text-2xl border-b-2 border-yellow-500 underline font-bold hover:bg-orange-600 rounded-md " href="/"><img className=" w-[180px] h-[100px]" src={logo1} alt="" /></a>
      </div>
      <div className=" navbar-links-container flex justify-center items-center px-9  ">
        <a className="border-4 border-transparent active:border-blue duration-300 hover:  hover:bg-orange-600 rounded-md border-b-2 " href=""><Link to="home"  smooth={true} duration={500} >Home</Link></a>
        <a className="border-4 border-transparent active:border-blue duration-300 hover:  hover:bg-orange-600 rounded-md border-b-2" href=""><Link to="about" smooth={true} duration={500} >About</Link></a>
        <a className="border-4 border-transparent active:border-blue duration-300 hover:  hover:bg-orange-600 rounded-md border-b-2" href=""><Link to="testimonial" smooth={true} duration={500} >Location</Link></a>
        <a className="border-4 border-transparent active:border-blue duration-300 hover:  hover:bg-orange-600 rounded-md border-b-2" href=""><Link to="contact" smooth={true} duration={500} >Contact</Link></a>
        <a className="border-4 border-transparent active:border-blue duration-300 hover:  hover:bg-orange-600 rounded-md border-b-2" href=""><Link to="work" smooth={true} duration={500} >Services</Link></a>
       
      </div>
      <div>
      <button className="hidden md:primary-button">Bookings Now</button>

      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link to={item.url} className="border-4 border-transparent active:border-blue duration-300">
                    <ListItemText primary={item.text} />
                  </Link>
                  
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
