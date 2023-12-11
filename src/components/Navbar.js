import { Link } from 'react-router-dom'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Footer from './Footer';
function Navbar() {
    const [isMenuVisible,setIsVisible] = useState(false)

    return ( 
        <div className="h-24 w-full z-10 border-b-2 border-b-black flex items-center lg:px-7 justify-between fixed top-0 bg-white">
            <div className="h-20 w-20 cursor-pointer ml-3">
                <img src='logo.png' className='h-full w-full ' />
            </div>
            <div className="lg:flex items-center hidden">
                <Link className="mx-4 cursor-pointer" to={'/'}><p className="text-lg font-semibold hover:border-b-2 border-gray-950">Menu</p></Link>
                <Link className="mx-4 cursor-pointer" to={'/gallery'}><p className="text-lg font-semibold hover:border-b-2 border-gray-950">Gallery</p></Link>
                <Link className="mx-4 cursor-pointer" to={'/hampers'}><p className="text-lg font-semibold hover:border-b-2 border-gray-950">Hampers</p></Link>
                <Link className="mx-4 cursor-pointer mr-28" to={'/about'}><p className="text-lg font-semibold hover:border-b-2 border-gray-950">Who is Nush?</p></Link>
                <div className="border-gray-900 border-2 px-9 py-1 cursor-pointer hover:bg-gray-950 hover:text-white"
                onClick={()=>window.open('https://www.instagram.com/what.nush.makes/', '_blank')}>
                    <p className="font-semibold">ORDER</p>
                </div>
            </div>
            <div className='lg:hidden flex justify-end '>
                {
                    !isMenuVisible &&
                    <div className='mr-3'>
                        <MenuIcon className='cursor-pointer' style={{fontSize:35}} 
                        onClick={()=>setIsVisible(!isMenuVisible)}/>
                    </div>
                    
                }
            </div>
            <div
                className={`top-0 right-0 w-full h-full fixed z-30 bg-white flex  justify-center  ease-in-out duration-300 ${
                    isMenuVisible ? "translate-y-0 " : "-translate-y-full"
                } p-5`}
                >
                <div className='w-full'>
                    <div className='w-full flex justify-end'>
                        <CloseIcon className='text-red-500' style={{fontSize:40}} onClick={()=>setIsVisible(!isMenuVisible)}/>
                    </div>
                    <Link className="mx-4 cursor-pointer" to={'/'}><p className="font-semibold text-lg text-center hover:border-b-2 border-gray-950">Menu</p></Link>
                    <Link className="mx-4 cursor-pointer" to={'/gallery'}><p className="font-semibold text-lg text-center hover:border-b-2 border-gray-950">Gallery</p></Link>
                    <Link className="mx-4 cursor-pointer" to={'/hampers'}><p className="font-semibold text-lg text-center hover:border-b-2 border-gray-950">Hampers</p></Link>
                    <Link className="mx-4 cursor-pointer mr-28" to={'/about'}><p className="font-semibold text-lg text-center hover:border-b-2 border-gray-950">Who is Nush?</p></Link>
                    <div className='bg-black h-0.5 w-full' />
                    <Footer />
                </div>
            </div>
        </div>
     );
}

export default Navbar;