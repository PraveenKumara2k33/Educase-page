import React, { useContext } from 'react';
import { FaCamera } from "react-icons/fa";
import { UserContext } from './UserContext';

const Page = () => {
    const { userData } = useContext(UserContext);
    const { name, email } = userData;
    const logo ='./3.jpg';

    return (
        <div className='page'>
            <h5 className='widths'>Account Settings</h5>
            <div className='photo'>
                <div className="row">
                    <div className="col-4">
                        <img src={logo} alt="logo" className='imgr' />
                        <div className='icon1'> <FaCamera  className='edgeicon'/></div>
                    </div>
                    <div className="col-8">
                        <p className='bold'>{name}</p>
                        <p>{email}</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eos voluptatem! Aliquam, voluptates dolorem cumque eius</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
