import { type FC, type ReactNode } from 'react';
import NavBar from './NavBar';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <main className=' h-full'>
            {children}
            <NavBar />
        </main>
    );
};

export default Layout;
