import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <>
            <div className='text-base text-center '>
                <div className='bg-yellow-300 py-4'>
                    <div className='w-full lg:w-60 mx-auto lg:rounded-full'>
                        <div>
                            <Image className='w-48 mx-auto' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )

};

export default Logo;