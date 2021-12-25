import Image from 'next/image'
import React from 'react'

const Register = () => {
    return (
        <div className='register'>
            <div className="register-image">
                <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640434586/photo-1492684223066-81342ee5ff30_buozpk.jpg" alt="" />
                {/* <Image src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640434586/photo-1492684223066-81342ee5ff30_buozpk.jpg" width={1000} height={600} objectFit='contain' /> */}
            </div>
            <div className="register-content">
                <form className="register-content-form">
                    <input type="text" name='name' placeholder='Full Name' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <input type="tel" name='phone' placeholder='Phone No'  required/>
                    
                </form>
            </div>
        </div>
    )
}

export default Register
