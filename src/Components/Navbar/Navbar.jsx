import 'animate.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { IoMenu } from 'react-icons/io5';
import './navbar.css';

const Navbar = () => {
    const links = <>
        <li><Link className='lg:px-5 px-2 py-2 hover:bg-[#c9c8c85f] rounded-sm' to={'/'}>Home</Link></li>
        <li><Link className='lg:px-5 px-2 py-2 hover:bg-[#c9c8c85f] rounded-sm' to={'/about-me'}>About Me</Link></li>
        <li><Link className='lg:px-5 px-2 py-2 hover:bg-[#c9c8c85f] rounded-sm' to={'my-skills'}>My Skills</Link></li>
        <li><Link className='lg:px-5 px-2 py-2 hover:bg-[#c9c8c85f] rounded-sm' to={'my-projects'}>My Projects</Link></li>
        <li><Link className='lg:px-5 px-2 py-2 hover:bg-[#c9c8c85f] rounded-sm' to={'contact'}>Contact Me</Link></li>
    </>;

    return (
        <div className='flex justify-between items-center pt-10 pb-5'>
            <div>
                <Link to={'/'} className='hidden md:block animate__animated animate__bounceInDown'>
                    <div className="relative inline-block">
                        {/* Border container */}
                        <div className="absolute inset-0 border-4 border-dashed border-text-color rounded-full animate-spin-slow"></div>
                        <img className='w-[80px] hover:w-[78px] rounded-full p-1 image' src='https://i.ibb.co.com/d4BwfDTP/Adobe-Express-file.png' alt="" />
                    </div>
                </Link>
                <div className='md:hidden block'>
                    <button className="btn bg-[#fcf6e4] border-none text-text-color btn-circle" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                        <IoMenu />
                    </button>

                    <ul className="dropdown menu w-52 bg-[#fcf6e4] rounded-box mt-4 shadow-sm"
                        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                        {links}
                    </ul>
                </div>
            </div>
            <ul className='md:flex hidden md:block lg:gap-5 gap-2'>
                {links}
            </ul>

            <div className="tooltip" data-tip="Download Resume">
                <Button className={'animate__animated animate__pulse animate__infinite'} type={'outline'}>Resume</Button>
            </div>
        </div>
    );
};

export default Navbar;
