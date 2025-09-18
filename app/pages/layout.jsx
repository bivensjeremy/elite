import Banner from "../../components/Banner";

const ServicesLayout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Banner/>
            {children}
        </div>
    );
}

export default ServicesLayout;