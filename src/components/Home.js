import React, { useContext, useState } from 'react'
import { Box, Button, Card, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';

const cards = [
    {
        image: './assets/house.jpg',
        title: "Full Home",
    },
    {
        image: './assets/kitchen.png',
        title: "Kitchen",
    },
    {
        image: './assets/washroom.jpg',
        title: "Washroom",
    },
    {
        image: './assets/office.jpg',
        title: "Office",
    },
    {
        image: './assets/desk.jpg',
        title: "Desk",
    },
    {
        image: './assets/glass.jpg',
        title: "Glass",
    }
];

export default function Home() {
    const [search, setSearch] = useState('');
    const { setSelect } = useContext(Context)
    const navTo = useNavigate()

    const handleSearch = (e) => {
        if (e.code === 'Enter') {
            setSearch(e.target.value);
            navTo('/service');
        }
    }

    return (
        <Stack component='main' id='home'>
            <input type="search" placeholder='Search Services...' onKeyDown={handleSearch} style={{ width: '70%', border: '1px solid', borderRadius: '7px', padding: '10px 20px', fontSize: '16px', margin: '30px auto' }} />

            <Box sx={{ bgcolor: '#E6EAF8', padding: '30px' }}>
                <Typography gutterBottom variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>We provide our customers</Typography>
                <Stack gap='20px' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <Card sx={{ width: { xs: '100%', md: '40%' }, margin: 'auto' }}>
                        <video src="./assets/video/video.mp4" autoPlay muted loop style={{ width: '100%' }}></video>
                        <Typography variant='h6' sx={{ margin: '5px 10px' }}>[company name] is the best cleaning company with multiple service</Typography>
                        <Button variant='contained' sx={{ margin: '0 0px 12px 10px' }}>Book Online</Button>
                    </Card>
                    <Box sx={{ width: { xs: '100%', md: '60%' } }}>
                        <Stack direction='row' sx={{ gap: '10px', flexWrap: 'wrap' }}>
                            {cards.map((card) => (
                                <Card key={card.title}
                                    onClick={() => {
                                        navTo('/service')
                                        setSelect(card.title)
                                    }}
                                    sx={{ width: { sm: 'calc((100% / 3) - 7px)', xs: '100%' }, cursor: "pointer" }}>
                                    <img src={card.image} alt="" style={{ width: '100%', height: '150px' }} />
                                    <Typography variant="h6" sx={{ fontSize: '18px', padding: '5px', textAlign: 'center' }}>
                                        {card.title}
                                    </Typography>
                                </Card>
                            ))}
                        </Stack>
                    </Box>
                </Stack>
            </Box>

            <Box sx={{ margin: '30px', borderRadius: { md: '350px 0 350px 0' }, color: '#fff', overflow: 'hidden', position: 'relative' }}>
                <img src="./assets/why-choose-bgimg.jpg" alt="" style={{ width: '100%', height: '100%', position: 'absolute', top: '0', zIndex: '-2' }} />
                <div style={{ backgroundColor: '#000', width: '100%', height: '100%', opacity: '.4', position: 'absolute', top: '0', zIndex: '-1' }}></div>
                <Stack sx={{ gap: '30px', padding: { md: '100px', xs: '30px', sm: '80px' }, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Stack sx={{ width: { xs: '100%', md: '40%' }, margin: 'auto', gap: '5px' }}>
                        <Typography variant='h4'>Why Choose Us</Typography>
                        <Typography gutterBottom>
                            [Company Name] Cleaning Company is your trusted partner for spotless environments. Our specialized services, from comprehensive home deep cleaning to targeted kitchen care, ensure a germ-free space. Highly skilled professionals, equipped with cutting-edge techniques, leave no surface untouched. We prioritize allergen-free spaces, promoting health and comfort. With reliable and efficient cleaning, your home or office becomes a haven of cleanliness. Choose [Company Name] for a healthier, more inviting atmosphere, allowing you to thrive in a fresh and wholesome environment.
                        </Typography>
                        <Button variant='contained' sx={{ width: '150px' }}>About Us</Button>
                    </Stack>
                    <Stack direction='row' sx={{ width: { xs: '100%', md: '60%' }, gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ width: '250px', height: '250px', bgcolor: '#3E9E62', padding: '10px', textAlign: 'center' }}>
                            <Typography variant='h6' gutterBottom>Experience</Typography>
                            <Typography fontSize='14px'>We have a dependable, knowledgeable, and professional cleaning crew. We assign a team expert to you to clean, and they will follow a schedule of duties that is most effective for you and your cleaning place.</Typography>
                        </Box>
                        <Box sx={{ width: '250px', height: '250px', bgcolor: '#F9C500', padding: '10px', textAlign: 'center' }}>
                            <Typography variant='h6' gutterBottom>Customer satisfaction</Typography>
                            <Typography fontSize='14px'>Our customers should get a seamless and expert service. We offer a dependable, adaptable service, supported by a group of cleaners who can help out when necessary and a group of specialized cleaners who are available for your trickier jobs.</Typography>
                        </Box>
                        <Box sx={{ width: '250px', height: '250px', bgcolor: '#13287D', padding: '10px', textAlign: 'center' }}>
                            <Typography variant='h6' gutterBottom>Transparency</Typography>
                            <Typography fontSize='14px'>We offer services that are straightforward and transparent at a reasonable price and have no extra fees or commitments. We will not charge any extra amount and will be honest with you from start to the end.</Typography>
                        </Box>
                        <div style={{ backgroundColor: '#fff', width: '200px', height: '200px', borderRadius: '100%', position: 'absolute', zIndex: '-1', opacity: '.7' }}></div>
                    </Stack>
                </Stack>
            </Box>
            <Box sx={{ bgcolor: '#E6EAF8', textAlign: 'center', padding: '30px' }}>
                <Typography>TESTIMONIES</Typography>
                <Typography variant='h4' gutterBottom>😄 Happy Customer 😄</Typography>
                <Stack direction='row' sx={{ color: '#fff', gap: '30px', justifyContent: 'center', overflow: 'auto' }}>

                    <Stack sx={{ width: { md: '300px', xs: '100%', sm: 'calc(100% / 2)' }, gap: '20px', borderRadius: '10px', bgcolor: '#133250', padding: '20px' }}>
                        <Stack direction='row' sx={{ alignItems: 'center', gap: '20px' }}>
                            <img src="../assets/about-happy1.jpg" alt="" style={{ width: '70px', borderRadius: '100%' }} />
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography>Roger Scout</Typography>
                                <Typography>Marketing Manger</Typography>
                            </Box>
                        </Stack>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, repellat!</Typography>
                    </Stack>
                    <Stack sx={{ width: { md: '300px', xs: '100%', sm: 'calc(100% / 2)' }, gap: '20px', borderRadius: '10px', bgcolor: '#133250', padding: '20px' }}>
                        <Stack direction='row' sx={{ alignItems: 'center', gap: '20px' }}>
                            <img src="../assets/about-happy2.jpg" alt="" style={{ width: '70px', borderRadius: '100%' }} />
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography>Lina </Typography>
                                <Typography>Marketing Manger</Typography>
                            </Box>
                        </Stack>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, repellat!</Typography>
                    </Stack>
                    <Stack sx={{ width: { md: '300px', xs: '100%', sm: 'calc(100% / 2)' }, gap: '20px', borderRadius: '10px', bgcolor: '#133250', padding: '20px' }}>
                        <Stack direction='row' sx={{ alignItems: 'center', gap: '20px' }}>
                            <img src="../assets/about-happy3.jpg" alt="" style={{ width: '70px', borderRadius: '100%' }} />
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography>Dy Scout</Typography>
                                <Typography>Marketing Manger</Typography>
                            </Box>
                        </Stack>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, repellat!</Typography>
                    </Stack>

                </Stack>
            </Box>
        </Stack>
    )
}
