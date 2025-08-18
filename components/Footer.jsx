import { Link } from "@heroui/link";
import { siteConfig } from '@/config/site';

const Footer = () => {
    return (
        <footer>
            <p className='uppercase text-xs text-center'>
                &copy; {new Date().getFullYear()} {siteConfig.name} |  Powered by <Link className='text-xs text-[#1E3A8A]' href="https://blueprintwebdev.com">Bivens Blueprint, LLC</Link>
            </p>
        </footer>
    );
}

export default Footer;