import React from 'react';
import './Product.css';

export default function Product() {
    return (
        <div className='container'>
            <div className="head">
                <p>SHOP OUR PRODUCTS</p>
            </div>

            <div className="mid">
                <p>Most Popular Products</p>
            </div>

            <div className="main_section">
                <div className="ctr1" id='one'>
                    <p className='text'> Pin On Hair Brush </p>
                    <p className='text_price'>$ 130.00</p>
                </div>
                <div className="ctr1" id='two'>
                    <p className='text'>Beard Combo Brush </p>
                    <p className='text_price'>$ 200.00</p>
                </div>

                <div className="ctr1" id='three'>
                    <p className='text'>Mains Hair Combo </p>
                    <p className='text_price'>$ 150.00</p>

                </div>
                <div className="ctr1" id='four'>
                    <p className='text'> Mens Battery Razors </p>
                    <p className='text_price'>$ 800.00</p>
                </div>

            </div>

        </div>
    )
}
