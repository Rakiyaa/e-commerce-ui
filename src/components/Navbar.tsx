import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between">
            {/* LEFT */}
            <Link href="/" className="flex items-center">
                <Image 
                 src="/logo.png" 
                 alt="Sehera" 
                 width={36} 
                 height={36} 
                 className="w-6 h-6 md:w-9 md:h-9"
                />
                <p className="text-md font-me">SEHERA</p>
            </Link>
            {/* RIGHT */}

        </nav>
    )  
} 

export default Navbar  