import { Card } from '@heroui/card';
import SectionHeader from './SectionHeader';
import Image from 'next/image';
import { GoTrophy } from 'react-icons/go';

const WhyChoose = ({ componentPack }) => {
    const { title, whyData, image } = componentPack;

    return (
        <section className='p-6'>
            <SectionHeader title={title} />
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
                <div className=''>
                    {whyData.map((index, idx) => (
                        <Card key={idx} className='flex flex-row py-8 mb-3 max-w-md mx-auto bg-background'>
                            <span className='mx-4 p-3 bg-secondary/30 rounded-md my-auto'>
                                <GoTrophy size={24} className='text-accent' />
                            </span>
                            
                            <p className='my-auto text-lg px-1'>{index}</p>
                        </Card>
                    ))}
                </div>

                <div className='relative w-3/4 h-72 md:h-auto mx-auto'>
                    <Image 
                        src={image}
                        alt={`${image} image`}
                        fill
                        className='rounded-tr-[72px] rounded-bl-[72px] object-cover shadow-xl/30'
                    />
                </div>

            </div>
        </section>
    );
}

export default WhyChoose;