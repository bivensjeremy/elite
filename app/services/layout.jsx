import Banner from "../../components/Banner";
import LayoutContainer from "../../components/LayoutContainer";

const ServicesLayout = ({ children }) => {
    return (
        <div>
            <Banner/>
            <LayoutContainer>
                {children}
            </LayoutContainer>
        </div>
    );
}

export default ServicesLayout;