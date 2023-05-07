/** @format */

import Image from "next/image";
import cargoWhite from "../images/cargo-white.svg";
// import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  //   const router = useRouter();

  return (
    <header className='barge bg-black flex justify-between items-center'>
      <Image src={cargoWhite} alt={"LinkBarge"} height='79' width='79' />
      <p className='h1 text-white'>BARGE</p>
      <span>
        <p className='h3 text-white'>
          <Link href='/'>Home</Link>&nbsp;
          <Link href='/login'>Login</Link>&nbsp;
          <Link href='/register'>Register</Link>&nbsp;
          <Link href='/todoLists'>Todo Lists</Link>&nbsp;
          <Link href='/about'>About</Link>
        </p>
      </span>
    </header>
  );
};

export default Header;
