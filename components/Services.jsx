import { Image } from "@heroui/image";
import SectionHeader from "./SectionHeader";
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import LayoutContainer from './LayoutContainer';
import { ServiceData } from './ServicesData';

const Services = () => {
    
    return (
        <LayoutContainer>
            <SectionHeader title="Services" />

            <div className="flex flex-wrap justify-evenly gap-3">
                {ServiceData.map(({ id, title, desc, img}) => (
                    <Card key={id} className="max-w-sm"  as={Link} href={`/services/${id}`}>
                        <CardBody className="overflow-visible">
                            <Image
                                alt={`${title} image`}
                                className="object-cover rounded-xl max-h-32 sm:max-h-full sm:max-w-full"
                                src={img}
                                width={500}
                                height={270}
                            />
                        </CardBody>

                        <CardFooter className="flex flex-col gap-1">
                            <h4 className="font-bold text-2xl text-center">{title}</h4>
                            <p className="line-clamp-3 text-sm">{desc}</p>
                            <Button className="mt-2">Read More</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </LayoutContainer>
    );
}

export default Services;