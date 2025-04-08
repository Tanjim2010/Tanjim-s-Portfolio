import { FaGithub } from "react-icons/fa";
import './navbar.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#FBF8EF] border-t-2 border-border-color">
      <div className="max-w-[1290px] mx-auto footer sm:footer-horizontal items-center p-4">
        <aside className="grid-flow-col items-center">
          <Link to={'/'} className='hidden md:block animate__animated animate__bounceInDown'>
            <div className="relative inline-block">
              {/* Border container */}
              <div className="absolute inset-0 border-4 border-dashed border-text-color rounded-full animate-spin-slow"></div>
              <img className='w-[80px] hover:w-[78px] rounded-full p-1 image' src='https://i.ibb.co.com/d4BwfDTP/Adobe-Express-file.png' alt="" />
            </div>
          </Link>
          <p>Copyright © {new Date().getFullYear()} Md Tanjim Hossen All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://x.com/MdTanjimHossen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://github.com/Tanjim2010"><FaGithub className="text-2xl"></FaGithub></a>
          <a href="https://www.facebook.com/profile.php?id=61551814694251">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
