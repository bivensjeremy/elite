import { Image } from "@heroui/image";
import { Card } from "@heroui/card";
import SectionHeader from "./SectionHeader";

const OurWork = () => {
    const workImages = [
        'image01.jpg', 'image02.webp', 'image03.jpg', 'image04.jpg', 'image05.jpg', 'image06.jpg', 'image07.jpg', 'image08.jpg', 'image09.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
    ];


    return (
        <div>
            <div className="flex flex-wrap gap-4 justify-center items-start">
                {workImages.map((photo, index) => (
                    <div key={index}>
                        <Card>
                            <Image
                                alt={`${photo} Image`}
                                className="object-cover max-h-48 max-w-48 md:max-h-full md:max-w-full"
                                src={`/${photo}`}
                                width={400}
                                height={400}
                            />
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurWork;