import IconElement from './IconElement';
import Home from '../icons/Home.svg';
import Search from '../icons/Search.svg';
import Add from '../icons/Add.svg';
import Reels from '../icons/Reels.svg';
import Oval from '../assets/Oval.png';
const NavBar = () => {
    return (
        <div className='fixed bottom-0 w-full h-12 grid grid-cols-5 [&>*]:flex [&>*]:items-center [&>*]:justify-center'>
            <div>
                <IconElement icon={Home} />
            </div>
            <div>
                <IconElement icon={Search} />
            </div>
            <div>
                <IconElement icon={Add} />
            </div>
            <div>
                <IconElement icon={Reels} />
            </div>
            <div className='rounded-full '>
                <img src={Oval} className='size-7 ring rounded-full p-0.5' />
            </div>
        </div>
    );
};

export default NavBar;
