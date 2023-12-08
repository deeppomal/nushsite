import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom'
function Footer() {
    return ( 
        <div className="w-full h-24 flex items-center justify-center">
            <div className='rounded-full bg-gray-950 flex items-center justify-center p-1 mx-3 cursor-pointer'
            onClick={()=>window.open('https://www.instagram.com/what.nush.makes/', '_blank')}>
                <InstagramIcon className='text-white' />
            </div>
            <div className='rounded-full bg-gray-950 flex items-center justify-center p-1 mx-3 cursor-pointer'
            onClick={()=>window.open('mailto:nushmakes@gmail.com','_blank')}>
                <EmailIcon className='text-white' />
            </div>
            <div className='rounded-full bg-gray-950 flex items-center justify-center p-1 mx-3 cursor-pointer'
            onClick={()=>window.open('tel:+919978990184','_blank')}>
                <PhoneIcon className='text-white' />
            </div>
        </div>  
     );
}

export default Footer;