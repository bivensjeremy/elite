'use client'
import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import clsx from "clsx";
import { Link } from "@heroui/link";

const Hero = ({ componentPack }) => {
    const { backgroundImage, title, desc, buttonText } = componentPack;

    return (
        <section
            className={`min-h-[60vh] bg-cover bg-center`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="min-h-[60vh] text-start bg-black/60 justify-center flex flex-col">
                <div className="container m-auto px-12 md:px-0 max-w-xl">
                    <h1 className='font-bold text-4xl md:text-6xl text-secondary-foreground mb-4 text-shadow-xs text-shadow-black'>
                        {title}
                    </h1>


                    <p className={clsx('pb-8 max-w-2xl text-secondary-foreground')}>
                        {desc}
                    </p>

                    <div>
                        <Button
                            as={Link}
                            isExternal
                            color="primary"
                            size="lg"
                            href={siteConfig.company.lead}
                            variant="solid"
                            >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;