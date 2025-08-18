import { fontHeader } from "@/config/fonts";
import clsx from "clsx";

const SectionHeader = ({ title }) => {
    return (
        <h2 className={clsx(
            fontHeader.className,
            "font-bold text-center text-4xl md:text-5xl mb-4 text-secondary uppercase p-0 md:p-4 m-auto max-w-full md:max-w-2/3"
        )}>
            {title}
        </h2>
    );
}

export default SectionHeader;