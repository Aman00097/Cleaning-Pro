import React, { useContext } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';

export default function Footer() {
    const { menus } = useContext(Context);
    const navTo = useNavigate();

    return (
        <Box className='footer' style={{ border: "2px solid rgba(0, 0, 0, 0.05)", backgroundColor: "black", color: "grey" }}>
            <Stack sx={{ margin: '30px', justifyContent: 'center', textAlign: { xs: 'center', sm: 'left' }, gap: '50px', flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box sx={{ width: { xs: '100%', sm: '300px' } }}>
                    <Typography gutterBottom variant='h5' sx={{ color: "white", fontFamily: "serif" }}>Genei Facility Management</Typography>
                    <Typography sx={{ color: "#aaa" }}>
                        Genei Facility Management Services is a fully integrated cleaning services company that provides comprehensive, high quality, reliable cleaning solutions to Residential and Corporate clients in Pune.
                    </Typography>
                </Box>

                <Box sx={{ width: { xs: '100%', sm: '300px', textAlign: 'center' } }}>
                    <Typography gutterBottom variant='h5' sx={{ color: "white", fontFamily: "serif" }}>Quick links</Typography>
                    <ul style={{ color: "#aaa" }}>
                        {menus.map((menu) => <li key={menu.title} onClick={() => navTo(menu.link)}>{menu.title}</li>)}
                    </ul>
                </Box>

                <Box sx={{ width: { xs: '100%', sm: '300px', textAlign: { xs: 'center', sm: 'left' } } }}>
                    <Typography gutterBottom variant='h5' sx={{ color: "white", fontFamily: "serif" }}>Contact</Typography>
                    <Stack sx={{ color: '#aaa', textAlign: 'center', alignItems: { xs: 'center', sm: 'start' } }}>
                        <Typography gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}><LocationOnIcon sx={{ fontSize: '20px' }} />Viman Nagar, Pune</Typography>
                        <Typography gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <EmailIcon sx={{ fontSize: '20px' }} /><a href='mailto:geneicareer@gmail.com'>geneicareer@gmail.com</a>
                        </Typography>
                        <Typography gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}><PhoneIcon sx={{ fontSize: '20px' }} />+91 0123456788
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}