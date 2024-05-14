'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Menu = () => {
    const router = useRouter();


    return (
        <>
            <div 
            className='text-base text-gray-200 text-center bg-gray-600 fixed w-full z-50 font-sans cursor-default'>Faça sua compra  
            <button onClick={() => router.push('./Produtos')}><strong className='text-yellow-300 ml-1'>aqui</strong></button>
            </div>
        </>
    )


};

export default Menu;