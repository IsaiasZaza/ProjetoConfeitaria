"use client"

import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { useState } from 'react';
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import FastfoodSharpIcon from '@mui/icons-material/FastfoodSharp';


const Endereco = () => {

    const [alerta, setAlerta] = useState(false)

    const clicar = () => {
        setAlerta(true);
        alert("o ifood esta em manutenção");

    }

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between bg-yellow-300 mt-5">
                <div className="lg:w-1/2 mx-auto lg:mx-0 mb-4 lg:mb-0">
                    <Image className="w-full h-auto" src={'/rotacao site.png'} alt="logo" width={1000} height={1000} />
                </div>

                <div className="lg:w-1/2 text-left lg:px-16 lg:py-10 px-10 py-10">
                    <div>
                        <h1 className='text-center text-2xl text-slate-800'>Nossa confeitaria</h1>
                    </div>
                    <div className='lg:mt-8 lg:items-center items-start mt-3 w-full'>
                        <p className='text-lg'>
                           <p className='text-gray-800'>Endereço: Quadra 804 Conjunto 18 Casa 22 - <strong>Recanto das Emas</strong></p>
                        </p>
                    </div>

                    <div className='mt-12 flex gap-2' >
                        <div>
                            <button className='shadow-lg py-2 px-3 hover:bg-blue-500 transition bg-blue-600 rounded-lg text-white'><a href="https://www.google.com/maps/place/15°55'23.9S+48°03'22.7W/@-15.9232956,-48.0588919,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-15.9232956!4d-48.056317?hl=pt-BR&entry=ttu">Localização <RoomSharpIcon/></a></button>
                        </div>

                        <div>
                            <button onClick={clicar} className='shadow-lg py-2 px-3 hover:bg-blue-500 transition bg-blue-600 rounded-lg text-white'>Ifood <FastfoodSharpIcon/></button>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )

};

export default Endereco;