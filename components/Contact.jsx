import { contactData } from "@/config/data";
import { Card } from "@heroui/card";


const Contact = () => {

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-around py-12 bg-background">
            {contactData.map(({ icon: Icon, title, desc }, idx) => (
                <Card key={idx} className="p-3 text-center w-full bg-transparent" radius='none' shadow="none">
                    <Icon className="mx-auto mb-2 text-foreground" size={42} />
                    <h3 className="font-bold text-foreground">{title}</h3>
                    <p>{desc}</p>
                </Card>
            ))}
        </section>
    );
}

export default Contact;