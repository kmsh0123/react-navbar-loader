import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {CiMenuFries} from "react-icons/ci";
import {MdClose} from "react-icons/md";

const Navbar = () => {
  const menuLinks = [
    {name : "HOME",link : "/"},
    {name : "ABOUT",link : "/about"},
    {name : "CONTACT",link : "/contact"},
  ]
  const [open,setOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler border border-0" onClick={()=>setOpen(!open)} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      {open ? <MdClose className="my-1"/> :  <CiMenuFries className="my-1"/>}
    </button>
    <div className={open ? "collapse navbar-collapse" : "collapse navbar-collapse"} id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        {
          menuLinks.map(menuLink=>(
              <NavLink key={menuLink.name} className="nav-link" to={menuLink.link}>{menuLink.name}</NavLink>
          ))
        }
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar