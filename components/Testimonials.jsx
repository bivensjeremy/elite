import { Avatar } from "@heroui/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import SectionHeader from "./SectionHeader";
import { GoStarFill } from "react-icons/go";

const Testimonials = ({ componentPack }) => {
    const stars = ['1', '2', '3', '4', '5']
    const { title, testimonialData } = componentPack;

    return (
        <section className="py-6 px-6 flex flex-col items-center justify-center text-center ">
            <SectionHeader title={title} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {testimonialData.map(({title, name, quote}, idx) => (
                <Card key={idx} className="p-8 max-w-96 bg-zinc-50">
                    <CardHeader className="flex gap-3">
                        <Avatar className="w-14 h-14" />

                        <div className="flex flex-col text-start">
                            <p className="text-md font-semibold">{name}</p>
                            <p className="text-sm italic">{title}</p>
                        </div>
                    </CardHeader>

                    <CardBody>
                        <p className="text-sm md:text-base">{quote}</p>
                    </CardBody>

                    <CardFooter>
                        {stars.map((index, idx) => (
                            <div key={idx} className="flex flex-row mr-1">
                                <GoStarFill className="stroke-yellow-500 fill-yellow-300"/>
                            </div>
                        ))}
                    </CardFooter>
                </Card>
                ))}                
            </div>
        </section>
    );
}

export default Testimonials;