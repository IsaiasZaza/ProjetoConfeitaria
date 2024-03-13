import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';



const Endereco = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between bg-yellow-300">

                <div className="lg:w-1/2 mx-auto lg:mx-0 mb-4 lg:mb-0">
                    <Image className="w-full h-auto" src={'/rotacao site.png'} alt="logo" width={1000} height={1000} />
                </div>

                <div className="lg:w-1/2 text-left lg:px-16 lg:py-10 px-10 py-10">
                    <div>
                        <h1 className='text-center text-2xl'>Nossa confeitaria</h1>
                    </div>
                    <div className='lg:mt-8 lg:items-center items-start mt-3 w-3/3'>
                        <p className='text-lg'>
                            Endereço Qr 8561 Perto do centro
                        </p>
                    </div>

                    <div className='mt-12 flex gap-2' >
                        <div>
                            <button className='shadow-lg py-2 px-3 hover:bg-blue-500 transition bg-blue-600 rounded-lg text-white'>Localização</button>
                        </div>

                        <div>
                            <button className='shadow-lg py-2 px-3 hover:bg-blue-500 transition bg-blue-600 rounded-lg text-white'>Whatsapp</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )

};

export default Endereco;