'use client'
import { usePathname } from 'next/navigation';
import { Image } from '@heroui/image';
import { useEffect, useMemo, useState } from 'react';
import { Button, ButtonGroup } from '@heroui/button';
import { Link } from '@heroui/link';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from 'next-themes';
import { websiteData } from '../../../config/data';
import ServicesCards from '../../../components/ServicesCards';

const page = () => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    
    const { theme } = useTheme();
    const isBranded = theme === 'dark';

    const slug = pathname.split('/').filter(Boolean).pop();

    // const themeData = useMemo(() => {
        const themeData = isBranded ? websiteData.branded : websiteData.unbranded;
    // }, [isBranded]);

    const { services } = themeData;

    if (!mounted) return null;

    // Safe destructuring after hooks
const matchedService = services?.serviceData?.find(
    (service) => service.id === slug
);

if (!matchedService) {
    console.warn(`No service found for slug: ${slug}`);
    return <ServicesCards services={services} />
}

const { title, desc, img } = matchedService;

    return (
        <div>
            <div className='py-6 text-center'>
                <ButtonGroup className='m-auto hidden md:block' variant='bordered' color='secondary'>
                    {services.serviceData.map(({ id, title }) => (
                        <Button
                            key={id}
                            as={Link}
                            href={`/pages/${id}`}
                        >{title}</Button>
                    ))}
                </ButtonGroup>

                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            className="md:hidden m-auto whitespace-nowrap flex items-center gap-2"
                            variant="bordered"
                            color="secondary"
                            endContent={<IoIosArrowDown />}
                        >
                            {title}
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Single selection example"
                        selectionMode="single"
                        variant="flat"
                    >
                        {services.serviceData.map(({ id, title }) => (
                            <DropdownItem 
                                key={id}
                                href={`/pages/${id}`}
                            >{title}</DropdownItem>
                    ))}
                    </DropdownMenu>
                </Dropdown> 
            </div>
            
            <div className='flex flex-col items-center px-3'>
                <h3 className='max-w-2/3 font-bold text-center text-2xl mb-4'>
                    {title}
                </h3>

                <div className='text-center flex m-auto mb-6'>                
                    <Image
                        alt={`${title} image`}
                        className='rounded-2xl object-cover m-auto'
                        src={img}
                        width={400}
                        height={600}
                    />
                </div>

                <p className='w-full md:w-1/2 text-center text-xl bg-secondary py-3 rounded-lg text-primary-foreground'>
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default page;