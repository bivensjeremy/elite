'use client'

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { websiteData } from '@/config/data';

const Banner = () => {
    const pathname = usePathname();
    const { resolvedTheme } = useTheme();
    const isBranded = resolvedTheme === 'dark';

    const { services } = isBranded ? websiteData.branded : websiteData.unbranded;

    const slug = pathname.split('/').filter(Boolean).pop();

    const staticRoutes = {
        about: 'About',
        contact: 'Contact Blueprint Web Dev'
    };

    const matchedService = services.serviceData.find(
        (service) => service.id === pathname
    );

    const title = staticRoutes[slug] || (matchedService && matchedService.title) || 'Our Services';

    return (
        <div className="h-48 bg-primary text-center flex flex-col items-center justify-center p-8">
            <h1 className={clsx(
                "font-bold text-6xl text-background uppercase text-shadow-lg text-shadow-primary max-w-3xl"
            )}>
                {title}
            </h1>
        </div>
    );
}

export default Banner;