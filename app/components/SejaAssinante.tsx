"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Forward5RoundedIcon from '@material-ui/icons/Forward5Rounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
import MarkunreadMailboxRoundedIcon from '@material-ui/icons/MarkunreadMailboxRounded';




import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Image from 'next/image';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const SejaAssinante = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='text-base text-center bg-gray-300'>
            <div className='text-xl py-8'>
                <Typography id="secaoDesejada" className='text-yellow-800 lg:text-2xl text-2xl ' variant="h6">Seja Assinante <LibraryAddCheckIcon className='text-4xl' /></Typography>
            </div>
            <div className=' px-8 flex lg:justify-center  lg:flex-row flex-col lg:gap-0 sm:gap-3 mx-auto'>
                <div className="flex flex-col lg:flex-row md:flex-row ">
                    <Card sx={{ maxWidth: 345 }} className="mx-2 lg:mt-1 mt-2 shadow-2xl">
                        <CardMedia
                            component="img"
                            height="194"
                            image="/abelhinha.jpg"
                            alt="Paella dish"
                        />
                        <CardContent className='inline'>
                            <Typography className='text-center' variant="body2" color="text.secondary">
                                <ul className='inline bg-black'>
                                    <li className='flex items-center font-semibold'><CakeRoundedIcon className=' mx-4 text-yellow-600' />24 BOLOS NO POTE</li>
                                    <li className='flex items-center font-semibold'><FastForwardRoundedIcon className=' mx-4 text-blue-400' />02 ENTREGA MÊS</li>
                                    <li className='flex items-center font-semibold'><Forward5RoundedIcon className=' mx-4 text-gray-600' />02 ENTREGAS POR SEMANA</li>
                                    <li className='flex items-center font-semibold'><MarkunreadMailboxRoundedIcon className=' mx-4 text-amber-900' />12 UNIDADES </li>
                                </ul>
                                <button className='lg:text-sm text-xs mt-2 border-2 border-yellow-600 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-gray-950 text-black bg-yellow-200 transition'><a href="https://wa.link/pxei63">ASSINATURA MENSAL R$ 160,00</a></button>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className="mx-2 lg:mt-1 mt-2 shadow-2xl">
                        <CardMedia
                            component="img"
                            height="194"
                            image="/Produtos2.jpg"
                            alt="Paella dish"
                        />
                        <CardContent className='inline'>
                            <Typography className='text-center' variant="body2" color="text.secondary">
                                <ul className='inline'>
                                    <li className='flex items-center font-semibold'><CakeRoundedIcon className=' mx-4 text-yellow-600' />24 BOLOS NO POTE</li>
                                    <li className='flex items-center font-semibold'><FastForwardRoundedIcon className=' mx-4 text-blue-400' />02 ENTREGA MÊS</li>
                                    <li className='flex items-center font-semibold'><Forward5RoundedIcon className=' mx-4 text-gray-600' />02 ENTREGAS POR SEMANA</li>
                                    <li className='flex items-center font-semibold'><MarkunreadMailboxRoundedIcon className=' mx-4 text-amber-900' />12 UNIDADES </li>
                                </ul>
                                <button className='lg:text-sm text-xs mt-2 border-2 border-yellow-600 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-gray-950 text-black bg-yellow-200 transition'><a href="https://wa.link/pxei63">ASSINATURA MENSAL R$ 330,00</a></button>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <Card sx={{ maxWidth: 345 }} className="mx-2 lg:mt-1 mt-2 shadow-2xl ">
                    <CardMedia
                        component="img"
                        height="194"
                        image="/Produtos3.jpg"
                        alt="Paella dish"
                    />
                    <CardContent className='inline'>
                        <Typography className='text-center' variant="body2" color="text.secondary">
                            <ul className='inline'>
                                <li className='flex items-center font-semibold'><CakeRoundedIcon className='mx-4 text-yellow-600' />24 BOLOS NO POTE</li>
                                <li className='flex items-center font-semibold'><FastForwardRoundedIcon className=' mx-4 text-blue-400' />02 ENTREGA MÊS</li>
                                <li className='flex items-center font-semibold'><Forward5RoundedIcon className=' mx-4 text-gray-600' />02 ENTREGAS POR SEMANA</li>
                                <li className='flex items-center font-semibold'><MarkunreadMailboxRoundedIcon className=' mx-4 text-amber-900' />12 UNIDADES </li>
                            </ul>
                            <button className='lg:text-sm text-xs mt-2 border-2  border-yellow-600 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-gray-950 text-black bg-yellow-200 transition'><a href="https://wa.link/pxei63">ASSINATURA ANUAL R$ 560,00</a></button>
                        </Typography>
                    </CardContent>

                </Card>

            </div>
        </div>

    );
};

export default SejaAssinante;
