import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Saved from './pages/Saved';
import Setting from './pages/Setting';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className='h-screen w-screen'>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='saved' element={<Saved />} />
                        <Route path='Setting' element={<Setting />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    </StrictMode>
);
