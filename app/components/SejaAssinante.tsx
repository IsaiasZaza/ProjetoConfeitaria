"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { RiCakeFill } from "react-icons/ri";
import { RiSpeedMiniFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCakeSlice } from "react-icons/gi";





import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';


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
            <div className='text-xl py-8 '>
                <Typography id="secaoDesejada" className='text-yellow-800 lg:text-3xl text-2xl font-sans' variant="h6">Seja Assinante <LibraryAddCheckIcon className='text-4xl' /></Typography>
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
                            <p className='text-yellow-700 font-semibold text-lg'>Plano Abelha</p>
                            <Typography className='text-center text-yellow-950 mt-3' variant="body2" color="text.secondary">
                                <ul className='inline bg-black'>
                                    <li className='flex items-center font-semibold'><RiCakeFill className='text-2xl mx-2 text-yellow-600' />24 BOLOS NO POTE</li>
                                    <li className='flex items-center font-semibold'><TbTruckDelivery className='text-2xl mx-2 text-gray-800' />02 ENTREGA MÊS</li>
                                    <li className='flex items-center font-semibold'><RiSpeedMiniFill className='text-2xl mx-2 text-blue-800' />02 ENTREGAS POR SEMANA</li>
                                    <li className='flex items-center font-semibold'><GiCakeSlice className='text-2xl mx-2 text-yellow-800' />12 UNIDADES </li>
                                </ul>
                                <button className='shadow-lg border-2 text-sm font-bold  border-yellow-200 py-2 px-3 rounded-full  hover:bg-yellow-400 hover:text-orange-800 bg-yellow-200 mt-3'><a href="https://wa.link/pxei63">Assinatura Mensal R$ 160,00</a></button>
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
                            <p className='text-yellow-700 font-semibold text-lg'>Plano Enxame</p>
                            <Typography className='text-center text-yellow-950 mt-3' variant="body2" color="text.secondary">
                                <ul className='inline'>
                                    <li className='flex items-center font-semibold'><RiCakeFill className='text-2xl mx-2 text-yellow-600' />48 BOLOS NO POTE</li>
                                    <li className='flex items-center font-semibold'><TbTruckDelivery className='text-2xl mx-2 text-gray-800' />04 ENTREGA MÊS</li>
                                    <li className='flex items-center font-semibold'><RiSpeedMiniFill className='text-2xl mx-2 text-blue-800' />01 ENTREGAS POR SEMANA</li>
                                    <li className='flex items-center font-semibold'><GiCakeSlice className='text-2xl mx-2 text-yellow-800' />12 UNIDADES </li>
                                </ul>
                                <button className='shadow-lg border-2 text-sm font-bold  border-yellow-200 py-2 px-3 rounded-full  hover:bg-yellow-400 hover:text-orange-800 bg-yellow-200 mt-3'><a href="https://wa.link/pxei63">Assinatura Mensal R$ 330,00</a></button>
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
                        <p className='text-yellow-700 font-semibold text-lg'>Plano Colmeia</p>
                        <Typography className='text-center text-yellow-950 mt-3' variant="body2" color="text.secondary">
                            <ul className='inline'>
                                <li className='flex items-center font-semibold'><RiCakeFill className='text-2xl mx-2 text-yellow-600' />80 BOLOS NO POTE</li>
                                <li className='flex items-center font-semibold'><TbTruckDelivery className='text-2xl mx-2 text-gray-800' />04 ENTREGA MÊS</li>
                                <li className='flex items-center font-semibold'><RiSpeedMiniFill className='text-2xl mx-2 text-blue-800' />01 ENTREGAS POR SEMANA</li>
                                <li className='flex items-center font-semibold'><GiCakeSlice className='text-2xl mx-2 text-yellow-800' />20 UNIDADES </li>
                            </ul>
                            <button className='shadow-lg border-2 text-sm font-bold  border-yellow-200 py-2 px-3 rounded-full  hover:bg-yellow-400 hover:text-orange-800 bg-yellow-200 mt-3'><a href="https://wa.link/pxei63">Assinatura Mensal R$ 560,00</a></button>
                        </Typography>
                    </CardContent>

                </Card>

            </div>
        </div>

    );
};

export default SejaAssinante;
