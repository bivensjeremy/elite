import Image from "next/image";
import SectionHeader from "./SectionHeader";

const About = ({ componentPack }) => {
    const { title, aboutData } = componentPack;
    
    return (
        <section id="About" className="py-6 pb-6">
            <SectionHeader title={title} />

            <div>
                {aboutData.map(({ id, title, desc, img }, idx) => (
                    <div key={id} className="flex flex-col md:flex-row">
                    {idx % 2 === 0 ? (
                    <>
                    {/* Text Block First */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-6">
                        <div className="max-w-md">
                            <h2 className="font-bold text-3xl mb-2">{title}</h2>
                            <p>{desc}</p>
                        </div>
                        
                    </div>
                    {/* Image Block Second */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-96">
                        <Image
                            src={img}
                            alt="Offer Image"
                            fill
                            className="md:rounded-lg object-cover"
                        />
                    </div>
                    </>
                    ) : (
                    <>
                    {/* Image Block First */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-96 lg:order-1 order-2">
                        <Image
                            src={img}
                            alt="Offer Image"
                            fill
                            className="md:rounded-lg object-cover"
                        />
                    </div>
                    {/* Text Block Second */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-6 lg:order-2 order-1">
                        <div className="max-w-md">
                            <h2 className="font-bold text-3xl mb-2">{title}</h2>
                            <p>{desc}</p>
                        </div>
                        
                    </div>
                </>
                )}
                </div>
                ))}
            </div>
        </section>
    );
}

export default About;