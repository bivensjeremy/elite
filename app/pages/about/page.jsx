// import Image from 'next/image';
import { Image } from '@heroui/image';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { siteConfig } from '../../../config/site';

const AboutPage = () => {

    return (
        <div className="">
            <div className='grid grid-cols-1 md:grid-cols-2 p-3'>
                <div className='relative w-3/4 mx-auto'>
                    <Image
                        src='/image_09.jpg'
                        alt={`image of me`}
                        // fill
                        className='rounded-tr-[72px] rounded-bl-[72px] object-cover shadow-xl/30'
                    />
                </div>

                <div className='flex flex-col justify-between'>
                    <h2 className="font-semibold text-center text-4xl md:text-5xl mb-4 text-primary max-w-3/4 mx-auto">
                            About This Project
                    </h2>
                    <div>
                        <p className='text-justify max-w-3/4 mx-auto mb-3'>
                            This website is a draft project developed by Blueprint Web Dev to demonstrate what a multi-page template site could look like for your business. It&apos;s designed to showcase both structure and style, with customizable sections like services, testimonials, and calls to action. The built-in theme switcher lets you toggle between a fully branded experience and a minimalist unbranded frame—giving you a clear sense of how your content and identity might adapt across different visual approaches. This prototype is part of our effort to make high-quality, scalable web design accessible and tailored to your needs.
                        </p>

                        <p className='text-justify max-w-3/4 mx-auto mb-3'>
                            If you are ready to get this layout for your business, click the button below and we can start the conversation. 
                        </p>
                    </div>
                    

                    <div className='text-center mx-auto mb-3'>
                        <Button
                            as={Link}
                            isExternal
                            color="primary"
                            href={siteConfig.company.lead}
                            variant="solid"
                            radius='sm'
                        >
                            Let's Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;