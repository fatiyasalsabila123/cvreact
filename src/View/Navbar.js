import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=' bg-gray-800 text-white p-2'>
      <div className='flex ml-10'>
        <div className='flex gap-8 text-[20px] font-black'>
        <NavLink to={"/cv"}><i class="far fa-address-book"></i> CuriculumVitae</NavLink>
        <NavLink to={"/about"}><i class="far fa-address-card"></i> About</NavLink>
        <NavLink to={"/project"}><i class="fas fa-tasks-alt"></i> Project</NavLink>
        </div>

        </div>
    </div>
  )
}

export default Navbar