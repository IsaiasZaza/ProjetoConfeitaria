"use client"

import React from 'react';
import Image from 'next/image';
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import FastfoodSharpIcon from '@mui/icons-material/FastfoodSharp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Endereco = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between bg-yellow-50 border shadow-md mt-8">
                <div className="lg:w-1/2 mx-auto lg:mx-0 mb-4 lg:mb-0">
                    <Image className="w-full lg:h-auto h-64" src={'/rotacaosite.jpeg'} alt="logo" width={1000} height={1000} />
                </div>

                <div className="lg:w-1/2 text-left lg:px-16 lg:py-10 px-10 py-10">
                    <div>
                        <h1 className='text-yellow-800 lg:text-3xl text-2xl font-sans'>Nossa confeitaria</h1>
                    </div>
                    <div className='lg:mt-8 lg:items-center items-start mt-3 w-full'>
                        <p className='text-lg'>
                           <p className='text-yellow-950'>Endereço: Quadra 804 Conjunto 18 Casa 22 - <strong className='text-yellow-600'>Recanto das Emas</strong></p>
                        </p>
                    </div>

                    <div className='mt-12 flex gap-2' >
                        <div>
                            <button className='shadow-lg py-2 px-3 hover:bg-yellow-500 transition bg-yellow-200 rounded-lg text-black'><a href="https://www.google.com/maps/place/15°55'23.9S+48°03'22.7W/@-15.9232956,-48.0588919,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-15.9232956!4d-48.056317?hl=pt-BR&entry=ttu">Localização <RoomSharpIcon/></a></button>
                        </div>

                        <div>
                            <button onClick={handleOpen} className='shadow-lg py-2 px-3 hover:bg-yellow-500 transition bg-yellow-200 rounded-lg text-black'><a href="https://www.ifood.com.br/delivery/brasilia-df/abelhinha-doces-recanto-das-emas/02e15197-c181-4fbf-979a-b3739597f8fd">Ifood</a><FastfoodSharpIcon/></button>

                        </div>
                    </div>


                </div>
            </div>

            <div>
    </div>
        </>
    )

};

export default Endereco;