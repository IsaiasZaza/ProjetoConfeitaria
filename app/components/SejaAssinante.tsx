"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
        <div className='text-base text-center lg:py-5 bg-gray-300'>
            <div className='text-xl'>
                <Typography id="secaoDesejada" className='text-yellow-800 lg:text-3xl text-2xl' variant="h4">Seja Assinante</Typography>
            </div>
            <div className='py-10 px-8 flex lg:justify-center  lg:flex-row flex-col lg:gap-0 sm:gap-3 mx-auto'>
                <div className="flex flex-col lg:flex-row ">
                    <Card sx={{ maxWidth: 345 }} className="mx-2 lg:mt-1 mt-2 shadow-2xl">
                        <CardHeader
                            avatar={
                                <Avatar src="/nova.png" aria-label="recipe" />
                            }
                            title="Juan Amigo"
                            subheader="Março 14, 2024"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/nova.png"
                            alt="Paella dish"
                        />
                        <CardContent className='inline'>
                            <Typography className='text-center' variant="body2" color="text.secondary">
                                <ul className='inline'>
                                    <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>24 BOLOS NO POTE</li>
                                    <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>02 ENTREGA MÊS</li>
                                    <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>02 ENTREGAS POR SEMANA</li>
                                    <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>12 UNIDADES </li>
                                </ul>
                                <button className='font-medium mt-2 border-2 border-yellow-600 py-1 px-2 rounded-full text-sm hover:bg-yellow-400 hover:text-gray-950 text-black bg-yellow-200 transition'><a href="https://wa.link/pxei63">ASSINATURA MENSAL R$ 160,00</a></button>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className="mx-2 lg:mt-1 mt-2 shadow-2xl">
                        <CardHeader className='text-center text-gray-500'
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                                </Avatar>
                            }
                            title="Doces Prime"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/nova.png"
                            alt="Paella dish"
                        />
                        <CardContent className='inline'>
                            <Typography className='text-center' variant="body2" color="text.secondary">
                                <ul className='inline'>
                                    <li className='flex items-center text-sm'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>48 BOLOS NO POTE</li>
                                    <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>04 ENTREGA MÊS</li>
                                    <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>01 ENTREGAS POR SEMANA</li>
                                    <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>12 UNIDADES </li>
                                </ul>
                                <button className='font-medium mt-2 border-2 text-sm border-yellow-600 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-gray-950 text-black bg-yellow-200 transition'><a href="https://wa.link/pxei63">ASSINATURA MENSAL R$ 330,00</a></button>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <Card sx={{ maxWidth: 345 }} className="mx-2 lg:mt-1 mt-2 shadow-2xl ">
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    
                            </Avatar>
                        }
                        title="Juan Amigo"
                        subheader="Março 14, 2024"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/nova.png"
                        alt="Paella dish"
                    />
                    <CardContent className='inline'>
                        <Typography className='text-center' variant="body2" color="text.secondary">
                            <ul className='inline'>
                                <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>80 BOLOS NO POTE</li>
                                <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>04 ENTREGA MÊS</li>
                                <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>01 ENTREGAS POR SEMANA</li>
                                <li className='flex items-center'><Image className='w-16 mx-4' src={'/nova.png'} alt='logo' width={1000} height={1000}></Image>20 UNIDADES </li>
                            </ul>
                            <button className='font-medium mt-2 border-2 text-sm border-yellow-600 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-gray-950 text-black bg-yellow-200 transition'><a href="https://wa.link/pxei63">ASSINATURA ANUAL R$ 560,00</a></button>
                        </Typography>
                    </CardContent>

                </Card>

            </div>
        </div>

    );
};

export default SejaAssinante;
