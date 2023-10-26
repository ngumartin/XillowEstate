import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='font-bold text-lg sm:text-2xl flex flex-wrap'>
                    <span className='text-slate-500 '>Xillow</span>
                    <span className='text-slate-800'>Estates</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input className='text-md sm:text-xl bg-transparent focus:outline-none w-24 sm:w-64' type="text" placeholder='Search...' />
                <FaSearch className='text-slate-600' />
            </form>
            <ul className='flex gap-4 text-xl'>
                    <Link to='/'>
                <li className='hidden sm:inline text-slate-800 hover:underline'>
                    Home
                </li>
                    </Link>
                    <Link to='/about'>
                <li className='hidden sm:inline text-slate-800 hover:underline'>
                    About
                </li>
                    </Link>
                    <Link to='/sign-in'>
                <li className='text-slate-800 hover:underline'>
                    {' '}
                    Sign in
                </li>
                    </Link>
            </ul>
        </div>
    </header>
  )
}
