'use client'

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { fontHeader } from '@/config/fonts';

const Banner = () => {
    const pathname = usePathname();

    return (
        <div className="h-48 bg-secondary shadow shadow-primary text-center flex flex-col items-center justify-center p-8 ">
            <h1 className={clsx(
                fontHeader.className,
                "text-6xl text-background uppercase text-shadow-lg text-shadow-primary"
            )}>
                {(() => {
                switch (pathname) {
                    case '/services/ourwork':
                        return 'Our Work'
                        case '/services/contact':
                        return 'Contact Us'
                    case '/services/softwash':
                        return 'Soft Wash'
                    case '/services/roofcleaning':
                        return 'Roof Cleaning'
                    case '/services/surfacecleaning':
                        return 'Surface Cleaning'
                    case '/services/guttercleaning':
                        return 'Gutter Cleaning'
                    case '/services/rustandclaystains':
                        return 'Rust & Clay Stains'
                    default:
                        return 'Our Services';
                }}) ()}
            </h1>
        </div>
    );
}

export default Banner;