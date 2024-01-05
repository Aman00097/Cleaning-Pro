import React, { useContext, useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../App';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const { menus } = useContext(Context);
    const navTo = useNavigate();
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <Stack direction='row' className='navbar' sx={{ bgcolor: '#fff', boxShadow: '0 0 10px #000', justifyContent: 'space-between', alignItems: 'center',gap:'10px', padding: {sm:'20px 50px',xs:'10px'}, position: 'sticky', top: '0', zIndex: '999' }}>
            <Stack direction='row' sx={{ alignItems: 'center', gap: '20px' }}>
                <img src="./assets/Logo.png" alt="" style={{ width: '50px', cursor: 'pointer' }} onClick={() => navTo('/')} />
                <Typography variant='h6' sx={{ fontFamily: '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande","Lucida Sans Unicode", Geneva, Verdana, sans-serif' }}>Genei Facility Management</Typography>
            </Stack>
            <Box sx={{ display: { xs: !menuOpen && 'none', md: 'block' } }}>
                <ul className={menuOpen && 'menu'}>
                    {menus.map((menu) => <li key={menu.title} style={{
                        borderBottom: location.pathname.slice(0, 5) === menu.link.slice(0, 5) && !menuOpen ? '2px solid #2fa8d3' : '',
                        color: location.pathname.slice(0, 5) === menu.link.slice(0, 5) && menuOpen ? '#133250' : ''
                    }}
                        onClick={() => {
                            navTo(menu.link);
                            setMenuOpen(false);
                        }}>{menu.title}</li>)}
                    <li onClick={() => navTo('/login')}>Login</li>
                </ul>
            </Box>
            {!menuOpen ? <Box sx={{ display: { xs: 'block', md: 'none' }, cursor: 'pointer' }} onClick={() => setMenuOpen(true)}><MenuIcon /></Box> : <Box sx={{ display: { xs: 'block', md: 'none' }, cursor: 'pointer', zIndex: '999' }} onClick={() => setMenuOpen(false)}><CloseIcon /></Box>}
        </Stack>
    )
}

export default Navbar