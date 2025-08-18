import { fontHeader, fontSubHeading } from "@/config/fonts";
import clsx from "clsx";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/config/site";

const About = () => {
    const AboutData = [
        {
            id: 1,
            title: 'We take pride in providing affordable pressure washing services to South West Georgia',
            desc: `Adjusters Power Washing is family-owned and operated. We will provide services in a professional and timely manner. Our goal is to give you the best results. No job is too big or too small. We take pride in providing an affordable price and attending to Albany, Ga., Leesburg, Ga., and the surrounding area. We're here to answer your question. Call us at (229) 352-6684.`,
            img: ''
        },
        {
            id: 2,
            title: 'Building Exteriors',
            desc: 'Whether you’re a homeowner or a commercial business, it’s always a good idea to make sure that the exterior of your property is clean and beautiful. Here at Adjusters Power Washing, our experienced washers are capable of delivering exceptional cleaning to the exterior of your home or business. This is perfect for restaurants on busy high-streets, hotels, or even cafes. Our equipment removes dirt, grime, and will always deliver a remarkable transformation to your home or business. Get in touch with us today to see how amazing your home or business will look.',
            img: ''
        },
        {
            id: 3,
            title: 'Excellent Customer Service',
            desc: 'Our well trained, experienced pressure washing staff strive to deliver the best customer service to all of our clients. Based on the fact that we have many customers who come back to us time and time again; we can proudly say that not only do we provide an amazing pressure wash, but also provide excellent customer service every day. Not only is our staff good at their job, but they are personable, friendly, and polite – a winning combination alongside instantly noticeable results.',
            img: ''
        },
    ];

    return (
        <section id="About" className="pb-6">
            <SectionHeader title="About Us" />

            <div className="grid grid-cols-1 md:grid-cols-2 px-3">
                {/* Text Block */}
                <div className="flex flex-col justify-center items-center text-center order-1 h-100 md:h-auto">
                    <h2 className={clsx(
                        "font-bold text-3xl mb-2 max-w-md")}>
                        We take pride in providing affordable pressure washing services to South West Georgia.
                    </h2>
                    <p className="max-w-md">
                        Adjusters Power Washing is family-owned and operated. We will provide services in a professional and timely manner. Our goal is to give you the best results. No job is too big or too small. We take pride in providing an affordable price and attending to Albany, Ga., Leesburg, Ga., and the surrounding area. We're here to answer your question. Call us at {siteConfig.company.phone}.
                    </p>
                </div>

                {/* Image Block */}
                <div className="relative h-96 md:h-96 order-2">
                    <Image
                        src="/image02.webp"
                        alt="Offer Image"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            
                {/* Image Block */}
                <div className="order-4 md:order-3 h-96 relative">
                    <Image
                        alt="Eat image"
                        src="/image01.jpg"
                        className="rounded-lg object-cover"
                        fill
                    />
                </div>

                {/* Text Block */}
                <div className="flex flex-col justify-center items-center text-center p-4 order-3 md:order-4 h-100 md:h-auto">
                    <h2 className={clsx(
                        "font-bold text-3xl mb-2")}>
                        Building Exteriors.
                    </h2>
                    <p className="max-w-md">
                        Whether you&apos;re a homeowner or a commercial business, it&apos;s always a good idea to make sure that the exterior of your property is clean and beautiful. Here at Adjusters Power Washing, our experienced washers are capable of delivering exceptional cleaning to the exterior of your home or business. This is perfect for restaurants on busy high-streets, hotels, or even cafes. Our equipment removes dirt, grime, and will always deliver a remarkable transformation to your home or business. Get in touch with us today to see how amazing your home or business will look. 
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center text-center order-5 h-100 md:h-auto">
                    <h2 className={clsx(
                        "font-bold text-3xl mb-2")}>
                        Excellent Customer Service
                    </h2>
                    <p className="max-w-md">
                        Our well trained, experienced pressure washing staff strive to deliver the best customer service to all of our clients. Based on the fact that we have many customers who come back to us time and time again; we can proudly say that not only do we provide an amazing pressure wash, but also provide excellent customer service every day. Not only is our staff good at their job, but they are personable, friendly, and polite – a winning combination alongside instantly noticeable results.
                    </p>
                </div>

                {/* Image Block */}
                <div className="order-6 h-96 relative">
                    <Image
                        alt="Eat image"
                        src="/hero.jpg"
                        radius="none"
                        className="rounded-lg object-cover"
                        fill
                    />
                </div>
            </div>
        </section>
    );
}

export default About;