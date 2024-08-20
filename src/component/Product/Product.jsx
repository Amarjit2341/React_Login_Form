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
                    <p className='text'>Mens Hair Combo </p>
                    <p className='text_price'>$ 150.00</p>

                </div>
                <div className="ctr1" id='four'>
                    <p className='text'> Mens Battery Razors </p>
                    <p className='text_price'>$ 800.00</p>
                </div>

            </div>

            <div className="ctr2">


                <div className="ctr1" id='one1'>
                    <p className='text'> Mens Blade </p>
                    <p className='text_price'>$ 300.00</p>
                </div>
                <div className="ctr1" id='two2'>
                    <p className='text'>Massage Chair </p>
                    <p className='text_price'>$ 4000.00</p>
                </div>

                <div className="ctr1" id='three3'>
                    <p className='text'>Multipurpose Trolly </p>
                    <p className='text_price'>$ 1550.00</p>

                </div>
                <div className="ctr1" id='four4'>
                    <p className='text'> Multipurpose Trolly </p>
                    <p className='text_price'>$2800.00</p>
                </div>

            </div>

            <div className="ctr2">


                <div className="ctr1" id='one11'>
                    <p className='text'> Nail Remiver Combo </p>
                    <p className='text_price'>$ 430.00</p>
                </div>
                <div className="ctr1" id='two22'>
                    <p className='text'>Tray Stand </p>
                    <p className='text_price'>$ 800.00</p>
                </div>

                <div className="ctr1" id='three33'>
                    <p className='text'>Multipurpose Trolly </p>
                    <p className='text_price'>$ 1150.00</p>

                </div>
                <div className="ctr1" id='four44'>
                    <p className='text'> Mens Combo Pack </p>
                    <p className='text_price'>$ 700.00</p>
                </div>

            </div>

            <div className="head">
                <p>OUR PROFESSIONAL</p>
            </div>

            <div className="mid">
                <p>Meet The Team</p>
            </div>

        </div>
    )
}
