/** @format */
"use client";
import Image from "next/image";
import logo from "../images/logo.jpg";
import Link from "next/link";
import useUser from "csc-start/hooks/useUser";
const Header = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <header className='barge bg-logo-yellow flex justify-between items-center'>
      <Link href='/'>
        <Image src={logo} alt={"logo"} height='79' width='79' />
      </Link>
      {user && (
        <p className='h2 text-blue items-center'>
          Hello, {user.bargeMeta.name}
        </p>
      )}
      <p className='h1 text-blue'>
        <Link
          className='hover:text-cloud-purple duration-300 transition-all'
          href='/'
        >
          BARGE
        </Link>
      </p>
    </header>
  );
};

export default Header;
