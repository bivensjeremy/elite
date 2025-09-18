import { Link } from "@heroui/link";
import { siteConfig } from '@/config/site';

const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-center py-3">
			<Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://blueprintwebdev.com"
                title="BlueprintWebDev.com homepage"
            >
				<p className='text-xs text-center bg-background'>
                &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
			</Link>
		</footer>
    );
}

export default Footer;