/** @format */

import Image from "next/image";
import logo from "../images/logo.jpg";
import ActionsFooter from "./ActionsFooter";

const Footer = () => {
  return (
    <footer className='barge mb-10 bg-logo-yellow'>
      <div className=' flex justify-between items-center'>
        <p className='h2 text-blue'>Copyright 2023</p>
        <Image src={logo} alt='logo' width={44} height={37} />
      </div>
      <ActionsFooter />
    </footer>
  );
};

export default Footer;
