import { siteConfig } from "@/config/site";
import { Card } from "@heroui/card";
import { FaLocationDot, FaClock, FaFacebook } from "react-icons/fa6";
import { MdPhoneAndroid, MdMail } from "react-icons/md";

const Contact = () => {
    return (
        <section className="grid grid-cols-2 md:grid-cols-4 justify-around py-12 bg-white">
            <Card className="p-3 text-center w-full" radius='none' shadow="none">
                <MdPhoneAndroid className="mx-auto" size={56} />

                <h3 className="font-bold">Phone</h3>
                <p>{siteConfig.company.phone}</p>
                
            </Card>

            <Card className="p-3 text-center w-full" radius='none' shadow="none">
                <MdMail className="mx-auto" size={56} />
                
                <h3 className="font-bold ">E-Mail</h3>
                <p className="truncate">{siteConfig.company.email}</p>
                
            </Card>

            <Card className="p-3 text-center w-full" radius='none' shadow="none">
                <FaClock className="mx-auto" size={56} />
                
                <h3 className="font-bold">Business Hours</h3>
                <p>Sun: 9am - 5pm</p>
                <p>Mon-Sat: 8am - 8pm</p>
                
            </Card>

            <Card className="p-3 text-center w-full" radius='none' shadow="none">
                <FaLocationDot className="mx-auto" size={56} />
                
                <h3 className="font-bold">Location</h3>
                <p>{siteConfig.company.address}</p>
                
            </Card>
        </section>
    );
}

export default Contact;