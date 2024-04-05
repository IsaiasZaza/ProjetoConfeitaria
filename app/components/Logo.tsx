import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <>
            <div className='text-base text-center mx-auto'>
                <div className='bg-yellow-300 py-4 flex flex-col lg:flex-row items-center mx-auto'>
                    <div className='w-full lg:w-60 lg:rounded-full flex justify-center mx-auto'>
                        <div>
                            <Image className='w-64' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>
                            
                        </div>
                    </div>
                    <div className='lg:mt-0 mt-1 mx-auto'>
                        <p className='lg:w-full lg:text-2xl text-2xl w-1/2 mx-auto border-b-2 border-yellow-500 text-orange-700 lg:font-semibold font-sans'>Fazendo Sua Festa Deliciosamente Inesquecível</p>
                    
                    </div>
                </div>
            </div>


        </>
    )

};

export default Logo;