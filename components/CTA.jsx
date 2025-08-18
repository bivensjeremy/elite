import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';
import { siteConfig } from '@/config/site';

const CTA = () => {

    return (
        <section id="Contact">
            <SectionHeader title="Get a Free Estimate" />

            <div className="px-12 md:pb-12 flex flex-col md:flex-row mx-auto">
                <div className="w-full md:w-lg">
                    <ContactForm />
                </div>

                <div className="mx-auto pb-6">
                    <div className="max-w-lg">
                        <h4 className="font-bold text-2xl pb-4">Head Office</h4>
                        <p>Address: {siteConfig.company.address}</p>
                        <p className='pt-4'>Tel: {siteConfig.company.phone}</p>
                        <p className=''>Email: {siteConfig.company.email}</p>
                        <h4 className="pt-12 font-bold text-2xl">Employment</h4>
                        <p>To apply for a job with {siteConfig.name}, please send a cover letter together with your C.V. to: {siteConfig.company.email}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;