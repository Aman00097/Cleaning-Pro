import React from 'react'
import './Login.css'
import { Box } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
    const data = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/, { message: 'Invalid email address' })
                .required("This is required field"),
            password: Yup.string()
                .min(8)
                .required("This is required field"),
        }),
        onSubmit: (_, action) => {
            action.resetForm();
        }
    });

    return (
        <Box className='login' sx={{
            backgroundColor: '#000', width: '100%', height: '100vh', position:"relative"
        }}>
            <div className="background" >
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>

                <label for="email">Email</label>
                <input type="email" placeholder="Email" id="email" value={data.values.email} onChange={data.handleChange} onBlur={data.handleBlur} />
                {data.touched.email && data.errors.email && <p style={{ color: "red", margin: "5px" }}>{data.errors.email}</p>}

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" value={data.values.password} onChange={data.handleChange} onBlur={data.handleBlur} />
                {data.touched.password && data.errors.password && <p style={{ color: "red", margin: "5px" }}>{data.errors.password}</p>}

                <button type='submit'>Log In</button>

                <div className="social">
                    <div className="go"><GoogleIcon sx={{ fontSize: '20px' }} />Google</div>
                    <div className="fb"><FacebookIcon sx={{ fontSize: '20px' }} />Facebook</div>
                </div>
            </form>
        </Box>
    )
}
