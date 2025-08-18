'use client'
import { usePathname } from 'next/navigation';
import { ServiceData } from '../../../components/ServicesData';
import LayoutContainer from '../../../components/LayoutContainer';
import { Image } from '@heroui/image';
import { useState } from 'react';
import { Card } from '@heroui/card';
import { Button, ButtonGroup } from '@heroui/button';
import { Link } from '@heroui/link';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { IoIosArrowDown } from "react-icons/io";

const page = () => {
    const pathname = usePathname();
    let pageId;

    switch (pathname) {
        case '/services/softwash':
            pageId = 0
            break;
        case '/services/roofcleaning':
            pageId = 1
            break;
        case '/services/surfacecleaning':
            pageId = 2
            break;
        case '/services/guttercleaning':
            pageId = 3
            break;
        case '/services/rustandclaystains':
            pageId = 4
            break;
        default:
            break;
    }

    const data = ServiceData[pageId];
    const { title, desc, img, alt } = data;
    const [mainImage, setMainImage] = useState(img);
    const [selectedKeys, setSelectedKeys] = useState(title);


    return (
        <LayoutContainer>
            <div className='pb-6 text-center'>
                <ButtonGroup className='m-auto hidden md:block' variant='bordered' color='secondary'>
                    {ServiceData.map(({ id, title }) => (
                        <Button
                            key={id}
                            as={Link}
                            href={`/services/${id}`}
                        >{title}</Button>
                    ))}
                </ButtonGroup>

                <Dropdown>
                    <DropdownTrigger>
                        <Button 
                            className="capitalize block md:hidden m-auto" 
                            variant="bordered" 
                            color='secondary'
                            endContent={<IoIosArrowDown />}
                        >
                            {selectedKeys}
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Single selection example"
                        selectedKeys={selectedKeys}
                        selectionMode="single"
                        variant="flat"
                        onSelectionChange={setSelectedKeys}
                    >
                        {ServiceData.map(({ id, title }) => (
                            <DropdownItem 
                                key={id}
                                href={`/services/${id}`}
                            >{title}</DropdownItem>
                    ))}
                    </DropdownMenu>
                </Dropdown>
            </div>
            
            
            <div className='flex flex-col items-center'>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-col justify-between'>
                        {alt.map((photo, index) => (
                            <Card 
                                key={index} 
                                isPressable 
                                onPress={()=>setMainImage(photo)}
                            >
                                <Image
                                    alt={`${photo} Image`}
                                    className="object-cover gap-4 h-full"
                                    src={`${photo}`}
                                    width={150}
                                    height={150}
                                />
                            </Card>
                        ))}
                    </div>
                
                    <Image
                        alt={`${title} image`}
                        className="object-contain md:object-cover"
                        src={mainImage}
                        width={700}
                        height={700}
                        
                    />

                </div>

                {/* <div> */}
                    <p className='max-w-2/3 pt-6 pb-12 text-center text-lg'>
                        {desc}
                    </p>
                {/* </div> */}
            </div>
                
        </LayoutContainer>
    );
}

export default page;