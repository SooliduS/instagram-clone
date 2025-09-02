import Layout from '../components/Layout';
import Oval from '../assets/Oval.png';
import Story1 from '../assets/Story1.png';
import Story2 from '../assets/Story2.png';
import Story3 from '../assets/Story3.png';
import IconElement from '../components/IconElement';
import Save from '../icons/Save.svg';
import Add from '../icons/Add.svg';
import Hamburger from '../icons/Hamburger.svg';
import AddFriend from '../icons/AddFriend.svg';
import Grid from '../icons/Grid.svg';
import Tags from '../icons/Tags.svg';
import post1 from '../assets/post1.png';
import post2 from '../assets/post2.png';
import post3 from '../assets/post3.png';
import post4 from '../assets/post4.png';
import post5 from '../assets/post5.png';
import post7 from '../assets/post7.png';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const handleNavigateToSavedPage = () => {
        navigate('/saved');
    };

    return (
        <Layout>
            <div className='mx-6 mb-7 flex justify-between items-center'>
                <div className='font-bold text-[22px] space-x-1.5 flex items-center justify-center'>
                    <span>username</span>
                    <span className='bg-[#FE0135] w-7 h-[18px] text-[12px]  font-normal text-white rounded-full flex justify-center items-center'>
                        10+
                    </span>
                </div>
                <div className='flex'>
                    <IconElement
                        icon={Save}
                        className='mr-[17px] cursor-pointer'
                        onClick={handleNavigateToSavedPage}
                    />
                    <IconElement icon={Add} className='mr-6' />
                    <IconElement icon={Hamburger} />
                </div>
            </div>
            <div className='mx-6 flex items-center justify-between mb-[14px]'>
                <div className='p-1 border w-fit rounded-full border-[#C7C7CC]'>
                    <img src={Oval} />
                </div>
                <div className='grid grid-cols-3 w-[211px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-semibold text-[16px]'>54</p>
                        <p className='text-[12px]'>Posts</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-semibold text-[16px]'>834</p>
                        <p className='text-[12px]'>Followers</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-semibold text-[16px]'>162</p>
                        <p className='text-[12px]'>Followings</p>
                    </div>
                </div>
            </div>
            <div className='mx-4 mb-4'>
                <p className='font-semibold '>Jacob West</p>
                <p>Digital goodies designer</p>
                <p>Everything is designed.</p>
            </div>
            <div className='flex gap-x-[3px] justify-center items-center mb-4'>
                <button className='bg-[#EFEFEF] rounded-sm w-40 h-[30px]'>
                    Following
                </button>
                <button className='bg-[#EFEFEF] rounded-sm w-40 h-[30px]'>
                    Message
                </button>
                <button className='bg-[#EFEFEF] rounded-sm  '>
                    <IconElement icon={AddFriend} size='small' />
                </button>
            </div>
            <div className='flex gap-4 mb-5'>
                <div>
                    <div className='p-1 border w-fit rounded-full border-[#C7C7CC]'>
                        <img src={Story1} />
                    </div>
                    <p className='pt-[3px] text-center'>Friends</p>
                </div>

                <div>
                    <div className='p-1 border w-fit rounded-full border-[#C7C7CC]'>
                        <img src={Story2} />
                    </div>{' '}
                    <p className='pt-[3px] text-center'>Sport</p>
                </div>

                <div>
                    <div className='p-1 border w-fit rounded-full border-[#C7C7CC]'>
                        <img src={Story3} />
                    </div>
                    <p className='pt-[3px] text-center'>Design</p>
                </div>
            </div>
            <div className='bg-neutral-50 border-t border-neutral-100 h-11 grid grid-cols-2 py-1'>
                <div className='flex justify-center items-center border-b'>
                    <IconElement icon={Grid} />
                </div>
                <div className='flex justify-center items-center'>
                    <IconElement icon={Tags} />
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <img src={post1} />
                <img src={post2} />
                <img src={post3} />
                <img src={post4} />
                <img src={post5} />
                <img src={post1} />
                <img src={post7} />
            </div>
        </Layout>
    );
};

export default Profile;
