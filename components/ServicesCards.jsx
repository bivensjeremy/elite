import { Card, CardBody, CardHeader } from "@heroui/card";
import Link from 'next/link';

export default function ServicesCards({ services }) {

    return (
        <section className='max-w-xl mx-auto'>
            <div className="mt-12 grid gap-4 md:gap-8 sm:grid-cols-2 ">
                {services.serviceData.map(({ title, desc, id, icon: Icon }, index) => (
                    <Card 
                        isPressable
                        key={index} 
                        as={Link}
                        href={`/pages/${id}`}
                        className="p-2 bg-background">
                        <CardHeader>
                            <Icon size={48} className="m-auto mt-2" />
                        </CardHeader>

                        <CardBody>
                            <h3 className="text-xl font-semibold text-center min-h-12 leading-tight">{title}</h3>
                            <p className="mt-2 text-gray-600 text-sm text-center">{desc}</p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    );
}