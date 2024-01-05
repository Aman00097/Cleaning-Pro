import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

export default function Gallery() {

    const imageUrls = [
        "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img3.jpg",
        "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img5.jpg",
        "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img1.jpg",
        "  https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img4.jpg",
        " https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img6.jpg",
        "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img5.jpg",
        "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img3.jpg",
        "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img5.jpg",
        "https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img1.jpg",
        "  https://ik.imagekit.io/zrh3rssb6/CleaningSlide/img4.jpg",
    ];

    return (
        <Box>
            <Stack sx={{ background: 'url("./assets/bg-about.png")', backgroundRepeat: 'no-repeat', backgroundSize: { sm: '100%', xs: '140%' }, backgroundPosition: { md: 'center' }, backgroundAttachment: 'fixed', width: '100%', height: { md: '350px', xs: '250px' }, position: 'relative' }}>
                <Box sx={{ backgroundColor: '#000', width: '100%', height: '100%', opacity: '.4', position: 'absolute', top: '0', zIndex: '1', transition: '.3s', ':hover': { opacity: '0' } }}></Box>
                <Typography variant='h3' sx={{ color: '#fff', margin: 'auto', opacity: '1', zIndex: '2' }}>Gallary</Typography>
            </Stack>


            <Stack direction='row' className='gallary' sx={{ gap: '20px', flexWrap: 'wrap', margin: '100px 50px', borderRadius: '5px' }}>
                {imageUrls.map((imageUrl, index) => (
                    <Box key={index} sx={{ width: {md:'calc((100% / 4) - 15px)',sm:'calc((100% / 2) - 15px)'}, overflow: 'hidden' }}>
                        <img src={imageUrl} alt={`Image ${index + 1}`} style={{
                            width: '100%', height: '100%', borderRadius: "5px", transition: '.3s'
                        }} />
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}
