import React  from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 bg-white shadow-lg'>

      <div className='flex justify-between items-center px-4 md:px-8 py-6'>

        
        <h1 className='text-2xl font-bold text-[#443199]'>
          AK.
        </h1>

        
        <nav className='hidden md:flex gap-8 font-medium'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#C13383]"
                : "text-[#443199] hover:text-[#E05454] transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#C13383]"
                : "text-[#443199] hover:text-[#E05454] transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-[#C13383]"
                : "text-[#443199] hover:text-[#E05454] transition"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-[#C13383]"
                : "text-[#443199] hover:text-[#E05454] transition"
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#C13383]"
                : "text-[#443199] hover:text-[#E05454] transition"
            }
          >
            Contact
          </NavLink>
        </nav>

        
        <button className='hidden md:block bg-[#C13383] hover:bg-[#E05454] text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer'>
          Resume
        </button>

        
        <button
          className='md:hidden text-3xl text-[#443199]'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center gap-5 py-6 bg-white shadow-md'>

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-[#443199]"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-[#443199]"
          >
            About
          </NavLink>

          <NavLink
            to="/project"
            onClick={() => setMenuOpen(false)}
            className="text-[#443199]"
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            onClick={() => setMenuOpen(false)}
            className="text-[#443199]"
          >
            Skills
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-[#443199]"
          >
            Contact
          </NavLink>

          <button className='bg-[#C13383] hover:bg-[#E05454] text-white px-4 py-2 rounded-md transition'>
            Resume
          </button>

        </div>
      )}

    </header>
  )
}

export default Header