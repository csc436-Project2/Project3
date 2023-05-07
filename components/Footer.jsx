import Image from "next/image";
import cargoBlack from '../images/cargo-black.svg'


const Footer = () => {
    return <footer className="barge flex justify-between items-center">
        <p className="h2">Copyright 2023</p>
        <Image 
            src={cargoBlack} 
            alt="LinkBarge" 
            width={44}
            height={37}
        />
    </footer>;
}

export default Footer;