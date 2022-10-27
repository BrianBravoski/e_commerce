import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { useRouter } from 'next/router';

import { useStateContext } from '../context/StateContext';


const success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    const [order, setOrder] = useState(null);

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order!</h2>
            <p className='email-msg'>CHeck your email inbox for the receipt</p>
            <p className='description'>
                If you have any issues or queries, please email
                <a className='email' href='mailto:kemboidev@gmail.com'>
                    shop@kemboi.dev
                </a>
            </p>
        </div>
    </div>
  )
}

export default success