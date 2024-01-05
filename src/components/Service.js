import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Card, Divider, FormControl, Grid, MenuItem, Select, Stack, Typography } from '@mui/material';
import { Context } from '../App';

const options = ['All', 'Single Room', 'RK', '1BHK', '2BHK', 'Full House', 'Kitchen', 'Washroom', 'Office', 'Desk', 'Glass']

const rooms = [
    {
        id: 1,
        title: 'Single Room',
        price: '999',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/service-single.jpg'
    },
    {
        id: 2,
        title: 'RK',
        price: '1399',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/service-rk.jpg'
    },
    {
        id: 3,
        title: '1BHK',
        price: '2000',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/service-1bhk.jpg'
    },
    {
        id: 4,
        title: '2BHK',
        price: '2500',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/service-2bhk.jpg'
    },
    {
        id: 5,
        title: 'Full House',
        price: '3500',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/service-fullhome.jpg'
    },
    {
        id: 6,
        title: 'Kitchen',
        price: '700',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/kitchen.png'
    },
    {
        id: 7,
        title: 'Washroom',
        price: '700',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/washroom.jpg'
    },
    {
        id: 8,
        title: 'Office',
        price: '5000',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/office.jpg'
    },
    {
        id: 9,
        title: 'Desk',
        price: '300',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/desk.jpg'
    },
    {
        id: 10,
        title: 'Glass',
        price: '2000',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/glass.jpg'
    },
    {
        id: 11,
        title: 'Office',
        price: '6000',
        text1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, error.',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum magni cumque.',
        image: './assets/service-office2.jpg'
    },
]

export default function Service() {
    const { select, setSelect } = useContext(Context)
    const [carts, setCarts] = useState([])
    const [cartRs, setCartRs] = useState(0)
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        setSelect(e.target.value);
    };

    useEffect(() => {
        if (select === 'All') {
            setData([...rooms])
        } else {
            setData(rooms.filter(room => room.title === select))
        }
    }, [select])

    useEffect(() => {
        let rs = 0;
        for (const cart of carts) {
            rs = rs + Number(cart.price)
        }
        setCartRs(rs)
    }, [carts])
    console.log(cartRs)
    return (
        <Box sx={{ padding: '30px' }}>
            <Grid container>
                <FormControl sx={{ minWidth: 300 }}>
                    <Select
                        value={select}
                        onChange={handleChange}
                        displayEmpty
                        sx={{ border: '1px solid #000', bgcolor: '#fff', color: '#000', '&:focus': { border: '1px solid #fff' } }}
                        size="small"
                    >
                        {options.map(ele => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid sx={{ display: 'flex', marginTop: '20px' }}>
                <Box className='scrollNone' sx={{ width: '70%', maxHeight: '100vh', overflow: 'auto' }}>
                    <Stack gap='20px'>
                        {
                            data.map((room) => (<Card sx={{ display: 'flex', height: 'fit-content', gap: '20px', padding: '20px' }}>
                                <Box sx={{ width: '70%' }}>
                                    <Typography variant="h6"><b>{room.title} - ₹{room.price}</b></Typography>
                                    <ul>
                                        <li>{room.text1}</li>
                                        <li>{room.text2}</li>
                                    </ul>
                                    <Stack direction='row' sx={{ gap: '20px', alignItems: 'center', marginTop: '10px' }}>
                                        <Typography sx={{ color: '#2d83cc', cursor: 'pointer' }}><b>View Details</b></Typography>
                                        <Button variant="contained" onClick={() => setCarts([...carts, room])}>Add</Button>
                                    </Stack>
                                </Box>
                                <Box sx={{ width: '30%', maxHeight: '200px', borderRadius: '10px', overflow: 'hidden' }}>
                                    <img src={room.image} alt="" style={{ width: '100%', height: '100% ', objectFit: 'cover' }} />
                                </Box>
                            </Card>))
                        }
                    </Stack>
                </Box>
                <Divider sx={{ border: '1px solid #ccc' }} />
                <Box sx={{ bgcolor: '#fff', color: '#000', width: '30%', height: 'fit-content', borderRadius: '5px', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom><b>Cart</b></Typography>
                    <Stack gap='20px'>
                        {carts.map(item => (<Card key={item.id} sx={{ padding: '10px' }}>
                            <Stack direction='row' gap='20px' justifyContent='space-evenly'>
                                <Typography sx={{ width: '70%' }}>{item.title}</Typography>
                                {/* <Stack direction='row' gap='10px' sx={{ bgcolor: '#7fb4e1', color: '#fff', border: '2px solid #2d83cc', borderRadius: '3px', overflow: 'hidden' }}>
                                    <button style={{ border: 'none', backgroundColor: '#7fb4e1', color: '#fff' }}>-</button>
                                    <Typography>6</Typography>
                                    <button style={{ border: 'none', backgroundColor: '#7fb4e1', color: '#fff' }}>+</button>
                                </Stack> */}
                                <Typography sx={{ width: '10%' }}>₹{item.price}</Typography>
                            </Stack>
                        </Card>))}
                        {carts.length > 0 ? <Stack>
                            <Button variant="contained">Pay ₹{cartRs}</Button>
                        </Stack> : <Typography>No Service Booked</Typography>}
                    </Stack>
                </Box>
            </Grid>
        </Box>
    )
}
