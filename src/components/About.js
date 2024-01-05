import React from 'react'
import './About.css'
import { Box, Container, Grid, List, ListItem, Stack, Typography } from '@mui/material'

const teamMembers = [
    {
        name: 'Sudesh Gowda',
        title: 'director of houskeeping',
        image: 'https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ca1AFfPfzOPtHZdAwa7QtCD1TFDws7PG9t_rqSibdC0=',

    },
    {
        name: 'Vijay Tripathi',
        title: 'Cleaning Dep Mgr ',
        image: 'https://media.istockphoto.com/id/1315976553/photo/portrait-of-a-smiling-man-of-indian-origin.jpg?s=612x612&w=0&k=20&c=0N93El-QxguVn9whsAiVvsSNYiscqbsucWlQE9i84co=',

    },

    {
        name: 'Prasad Chaughule',
        title: 'Assistant',
        image: 'https://i.imgur.com/0Cdlenp.jpg',

    },
    {
        name: 'shinchan wu',
        title: 'Desk Control Supervisor ',
        image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',

    },
    {
        name: 'monkey d lufi',
        title: 'Business Analyst',
        image: 'https://media.istockphoto.com/id/1464547965/photo/worker-thinking-or-typing-on-laptop-in-cafe-coffee-shop-or-restaurant-on-startup-ideas-vision.jpg?s=612x612&w=0&k=20&c=nliib6Ff071jQkwFLjExWcdiyxC8NwUDUBsgUaHdT74=',

    },
    {
        name: 'roro nova zoro',
        title: 'StoreKeeper',
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',

    },
    {
        name: 'nami Thakur',
        title: 'Linen Room Maid',
        image: 'https://media.istockphoto.com/id/1482886552/photo/portrait-of-happy-indian-young-teacher-holding-book-looking-at-camera-in-isolated-white.jpg?s=612x612&w=0&k=20&c=dgQfJRa4SlYTWRt4nAbIX1sXCSh_47In8qF0fQkyQjs=',

    },
    {
        name: 'Ganesh Mourya',
        title: 'Public Area Supervisor',
        image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww',

    },
];

export default function About() {
    return (
        <Box>
            <Stack sx={{ background: 'url("./assets/bg-about.png")', backgroundRepeat: 'no-repeat', backgroundSize: { sm: '100%', xs: '140%' }, backgroundPosition: { md: 'center' }, backgroundAttachment: 'fixed', width: '100%', height: { md: '350px', xs: '250px' }, position: 'relative' }}>
                <Box sx={{ backgroundColor: '#000', width: '100%', height: '100%', opacity: '.4', position: 'absolute', top: '0', zIndex: '1', transition: '.3s', ':hover': { opacity: '0' } }}></Box>
                <Typography variant='h3' sx={{ color: '#fff', margin: 'auto', opacity: '1', zIndex: '2' }}>About Us</Typography>
            </Stack>

            <Container maxWidth="lg" sx={{ py: "50px" }}>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: '20px'
                }}>
                    <Grid container rowSpacing={2}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography
                                        sx={{
                                            textAlign: "start",
                                            fontWeight: "500",

                                            mt: 5,
                                        }}
                                        variant="h4"
                                        component="h2"
                                    >
                                        Why Choose US
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{ mt: 2, alignItems: "center", textAlign: "justify" }}
                                >Our cleaning service is the ideal choice for your cleaning needs. Our expert team offers comprehensive services, using advanced equipment and paying meticulous attention to detail. We are known for our reliability and commitment to promoting a healthier and inviting environment, backed by a solid track record of trust and excellence.
                                    Our cleaning company also specializes in diverse services for spotless, allergen-free spaces. With skilled professionals and advanced equipment, we offer deep cleaning for homes and offices. Our attention to detail ensures no surface goes untouched, promoting a healthier, inviting environment.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                                <img src='./assets/about-img1.jpg' alt="About_information" style={{ width: '100%', margin: 'auto' }} />
                            </Grid>
                        </Grid>

                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                                <img src='./assets/about-img2.jpg' alt="About_information" style={{ width: '100%', margin: 'auto' }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography
                                    sx={{
                                        textAlign: { xs: "center", sm: "start" },
                                        fontWeight: "500",
                                        mt: 2,
                                        ml: 3,
                                    }}
                                    variant="h4"
                                >
                                    Experience
                                </Typography>
                                <Typography sx={{ alignItems: "center", textAlign: "justify" }}>
                                    With over 7 years of dedicated service in the sports industry, Smasher Arena has built a legacy of excellence and success. Our experience is a testament to our commitment to nurturing the talents of athletes and providing them with the tools they need to achieve their dreams. Here's a glimpse of our journey:
                                </Typography>

                                <List
                                    sx={{
                                        listStyleType: "disc",
                                        listStylePosition: "inside",
                                        spacing: 3,
                                    }}
                                    className="listFont"
                                >
                                    <ListItem
                                        sx={{
                                            display: "list-item",
                                            fontFamily: "'Nunito Sans', sans-serif",
                                        }}
                                    >
                                        Highly Experienced Team: Our team comprises seasoned professionals with years of experience in the cleaning industry.
                                    </ListItem>
                                    <ListItem
                                        sx={{
                                            display: "list-item",
                                            fontFamily: "'Nunito Sans', sans-serif",
                                        }}
                                    >
                                        Diverse Cleaning Challenges: We have successfully tackled a wide range of cleaning tasks, from deep cleaning residential spaces to maintaining commercial and industrial environments.
                                    </ListItem>
                                    <ListItem
                                        sx={{
                                            display: "list-item",
                                            fontFamily: "'Nunito Sans', sans-serif",
                                        }}
                                    >
                                        Effective Expertise: Our extensive background equips us with the knowledge and skills to handle any cleaning challenge effectively.


                                    </ListItem>
                                    <ListItem
                                        sx={{
                                            display: "list-item",
                                            fontFamily: "'Nunito Sans', sans-serif",
                                        }}
                                    >
                                        Customized Solutions: Our experience allows us to provide tailored cleaning solutions to meet the unique needs of each client.
                                    </ListItem>
                                    <ListItem
                                        sx={{
                                            display: "list-item",
                                            fontFamily: "'Nunito Sans', sans-serif",
                                        }}
                                    >
                                        Meticulous and Efficient: With our experience, we ensure that every cleaning job is thorough, efficient, and meets the highest standards.
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Typography variant='h4' gutterBottom>Meet Our Team</Typography>
                    <Stack sx={{ flexWrap: 'wrap', gap: '30px', flexDirection: 'row' }}>
                        {teamMembers.map((member, index) => (
                            <Box key={index} className="item" sx={{ width: { md: 'calc((100% / 4) - 23px)', xs: '100%', sm: 'calc((100% / 2) - 15px)' } }}>
                                <div className="box" style={{ backgroundImage: `url(${member.image})` }}>
                                    <div className="cover">
                                        <h3 className="name">{member.name}</h3>
                                        <p className="title">{member.title}</p>
                                    </div>
                                </div>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}
