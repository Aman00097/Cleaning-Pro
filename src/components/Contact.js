import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
    return (
        <Box>
            <Stack sx={{ background: 'url("./assets/bg-about.png")', backgroundRepeat: 'no-repeat', backgroundSize: { sm: '100%', xs: '140%' }, backgroundPosition: { md: 'center' }, backgroundAttachment: 'fixed', width: '100%', height: { md: '350px', xs: '250px' }, position: 'relative' }}>
                <Box sx={{ backgroundColor: '#000', width: '100%', height: '100%', opacity: '.4', position: 'absolute', top: '0', zIndex: '1', transition: '.3s', ':hover': { opacity: '0' } }}></Box>
                <Typography variant='h3' sx={{ color: '#fff', margin: 'auto', opacity: '1', zIndex: '2' }}>Contact</Typography>
            </Stack>
            <Box sx={{ display: 'flex', paddingTop: '50px', textAlign: 'center' }}>
                <Stack direction='row' sx={{ margin: 'auto', gap: '50px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Stack sx={{ alignItems: 'center', justifyContent: 'center', width: { lg: '300px', sm: '250px', xs: '100%' } }}>
                        <LocationOnIcon sx={{ bgcolor: '#133250', color: '#fff', borderRadius: '10px', padding: '10px', margin: '10px', boxShadow: '0 0 10px #2fa8d3', fontSize: '40px' }} />
                        <Box>
                            <Typography>XYZ Road, ABC Building</Typography>
                            <Typography>Pune Station, Pune, Maharashtra, India</Typography>
                        </Box>
                    </Stack>
                    <Stack sx={{ alignItems: 'center', justifyContent: 'center', width: { lg: '300px', sm: '250px', xs: '100%' } }}>
                        <PhoneIcon sx={{ bgcolor: '#133250', color: '#fff', borderRadius: '10px', padding: '10px', margin: '10px', boxShadow: '0 0 10px #2fa8d3', fontSize: '40px' }} />
                        <Box>
                            <Typography>+91 1236547890</Typography>
                            <Typography>Monday to Saturday, 10AM to 6PM</Typography>
                        </Box>
                    </Stack>
                    <Stack sx={{ alignItems: 'center', justifyContent: 'center', width: { lg: '300px', sm: '250px', xs: '100%' } }}>
                        <EmailIcon sx={{ bgcolor: '#133250', color: '#fff', borderRadius: '10px', padding: '10px', margin: '10px', boxShadow: '0 0 10px #2fa8d3', fontSize: '40px' }} />
                        <Box>
                            <Typography>xyz@gmail.com</Typography>
                            <Typography>Email us youe query</Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
            <Box sx={{ width: '80%', margin: '0 auto', padding: '50px 0' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.991256013141!2d73.87205791354975!3d18.52929727374636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c058f1287049%3A0x47a399e0464970f1!2sPune!5e0!3m2!1sen!2sin!4v1646138132242!5m2!1sen!2sin"
                    width="100%" height="450" loading="lazy" style={{ border: '3px solid #133250' }}></iframe>
            </Box>
            <Box sx={{ bgcolor: '#e6eaf8', padding: '50px 0' }}>
                <Stack sx={{ width: '80%', gap: '50px', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, maxWidth: { md: '500px', xs: '400px' }, borderRadius: '20px', overflow: 'hidden' }}>
                        <img src="../assets/contact-img.png" alt="" style={{ width: '100%', height: '100%' }} />
                    </Box>
                    <Stack component='form' sx={{ width: { md: '50%', xs: '100%' }, maxWidth: '400px', gap: '20px' }}>
                        <Typography variant='h4' sx={{ color: '#133250' }}>Contact Us</Typography>
                        <input type="text" id="Name" name="Name" placeholder="Enter your name" style={{ width: '100%', padding: '10px 15px', borderRadius: '5px', border: '1px solid #000', fontSize: '16px', outline: 'none' }} />
                        <input type="email" id="Sender" name="Sender" placeholder="Enter email address" style={{ width: '100%', padding: '10px 15px', borderRadius: '5px', border: '1px solid #000', fontSize: '16px', outline: 'none' }} />
                        <input type="text" id="Subject" name="Subject" placeholder="Enter your subject" style={{ width: '100%', padding: '10px 15px', borderRadius: '5px', border: '1px solid #000', fontSize: '16px', outline: 'none' }} />
                        <textarea rows="5" id="Message" name="Message" placeholder="Message" style={{ width: '100%', padding: '10px 15px', borderRadius: '5px', border: '1px solid #000', fontSize: '16px', outline: 'none', resize: 'none' }} ></textarea>
                        <Button variant='contained' type="submit" sx={{ width: '150px' }}>Send Message</Button>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}
