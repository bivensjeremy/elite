import SectionHeader from "./SectionHeader";
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

const Services = ({ componentPack }) => {
    const { title, desc, serviceData } = componentPack;
    return (
        <div className="px-6 pb-12 bg-secondary/30">
            <SectionHeader title={title} />
            <p className="text-center max-w-lg mb-4 mx-auto">{desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto">
                {serviceData.map(({ id, title, desc, img, icon: Icon }) => (
                    <Card key={id} className="max-w-sm mx-auto bg-background">
                        <CardBody className="">
                            <Image
                                alt={`${title} image`}
                                className="object-cover rounded-xl max-h-32 sm:min-h-60 sm:max-w-full"
                                src={img}
                                width={400}
                                height={300}
                            />
                        </CardBody>

                        <CardFooter className="flex flex-col gap-1">
                            <h4 className="font-bold text-2xl text-center">
                                {title}</h4>
                            <p className="line-clamp-3 text-sm">{desc}</p>
                            <Button
                                as={Link}
                                href={`/pages/${id}`}
                                className="mt-2 bg-accent text-accent-foreground font-semibold w-full lg:w-auto"
                            >
                                Learn More
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Services;