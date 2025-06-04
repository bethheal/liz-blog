import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="items-center justify-between p-5 bg-blue-800 text-blue-200  flex ">
       < span className="font-medium text-2xl text-blue-100">LOGO </span>
       <div>
        <ul className='flex space-x-4'>
            <li>
                <Link to="/"> Home </Link>
            </li>
             <li>
                <Link to="/blog"> Blog </Link>
            </li>
             <li>
                <Link to="/about"> About  </Link>
            </li>
             <li>
                <Link to="/contact"> Contact </Link>
            </li>
           
                



        </ul>
       </div>
    </div>
  )
}

export default Navbar