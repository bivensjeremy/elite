import { fontTitle } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import clsx from "clsx";
import XButton from './XButton';

const Hero = () => {
    return (
        <section className="min-h-[60vh] bg-cover bg-center bg-[url('/hero.jpg')]">
            <div className={clsx(
                fontTitle.className,
                "min-h-[60vh] text-start bg-black/40 justify-center flex flex-col")}>
                <div className="container m-auto px-12 md:px-0">
                    <h1 className={clsx('font-bold text-4xl md:text-6xl text-secondary-foreground mb-4')}>
                        {siteConfig.name}
                    </h1>


                    <p className={clsx('pb-8 max-w-2xl text-secondary-foreground')}>
                        {siteConfig.description}
                    </p>

                    <div>
                        <XButton color='primary' size="lg"
                    radius="full" />
                        {/* <Button
                            as={Link}
                            color="primary"
                            size="lg"
                            href='/menu'
                            variant="solid"
                            radius="full"
                            // className="text-white"
                            >
                            Get an Estimate
                        </Button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;