import { useNavigate } from 'react-router-dom';
import IconElement from '../components/IconElement';
import Layout from '../components/Layout';
import ArrowLeft from '../icons/ArrowLeft.svg';

const Saved = () => {
    const navigate = useNavigate();

    const handleNavigateBack = () => {
        navigate('/profile');
    };

    return (
        <Layout>
            <div className='mx-6 mb-7 flex justify-between items-center '>
                <div className='cursor-pointer' onClick={handleNavigateBack}>
                    <IconElement icon={ArrowLeft} />
                </div>
                <div className='text-base font-bold'>Saved</div>
                <div />
            </div>

            <div className=' border-t border-neutral-100 h-11 grid grid-cols-2 py-1 text-base '>
                <div className='flex justify-center items-center text-[#969696]'>
                    Post
                </div>
                <div className='flex justify-center items-center border-b font-medium'>
                    Page
                </div>
            </div>

            <div className='grid grid-cols-2 w-full gap-y-[15px] mt-[18px]'>
                <div className='flex items-center justify-center'>
                    <div>
                        <div className='bg-[#EFEFEF] size-[174px] rounded-[10px] '></div>
                        <div className='mt-1 font-medium'>All page</div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <div className='bg-[#EFEFEF] size-[174px] rounded-[10px] '></div>
                        <div className='mt-1 font-medium'>Collection Name</div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <div className='bg-[#EFEFEF] size-[174px] rounded-[10px] '></div>
                        <div className='mt-1 font-medium'>Collection Name</div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <div className='bg-[#EFEFEF] size-[174px] rounded-[10px] '></div>
                        <div className='mt-1 font-medium'>Collection Name</div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <div className='bg-[#EFEFEF] size-[174px] rounded-[10px] '></div>
                        <div className='mt-1 font-medium'>Collection Name</div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <div className='bg-[#EFEFEF] size-[174px] rounded-[10px] '></div>
                        <div className='mt-1 font-medium'>Collection Name</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Saved;
