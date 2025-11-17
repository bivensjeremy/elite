import SectionHeader from './SectionHeader';
import { siteConfig } from '@/config/site';
import HoneyBookWidget from './HoneyBookWidget';
import { Button } from '@heroui/button';
import { Avatar } from '@heroui/avatar';
import { Link } from '@heroui/link';
import { footerData } from '@/config/data';
import ContactForm from './ContactForm'

const CTA = ({ componentPack }) => {
    const { title, desc, buttonText } = componentPack;
    return (
        <section className='text-center pt-12'>
            <Avatar src='/elite_logo.webp' className='mx-auto w-24 h-24' />
            <SectionHeader title={title} />

            <p className='mb-8'>{desc}</p>

            {/* <Button
                as={Link}
                isExternal
                color="primary"
                size="lg"
                href={siteConfig.company.lead}
                variant="solid"
                className="font-semibold"
                >
                {buttonText}
            </Button> */}

            <div className="px-3 pt-3 md:pb-12 mx-auto max-w-1/3">
                {/* <HoneyBookWidget /> */}
                <ContactForm />
            </div>

            <div className="flex justify-center gap-4 text-2xl text-primary pt-3">
                {footerData.map(({ id, link, image: Icon, color }) => (
                    <Link isExternal key={id} href={link}>
                        <Icon 
                            size={16}
                            // color={color} 
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default CTA;