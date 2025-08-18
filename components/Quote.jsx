import LayoutContainer from './LayoutContainer';
import SectionHeader from './SectionHeader';
import XButton from './XButton';

const Quote = () => {

    return (
        <div  className="pb-12">
            <SectionHeader title={'Get Your Free Estimate'} />

            <div className='text-center'>
                <XButton />
            </div>
        </div>
    );
}

export default Quote;