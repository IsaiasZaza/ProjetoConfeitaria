"use client"

import Link from 'next/link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdHome, MdShoppingCart, MdInfo, MdPersonAdd, MdPerson, MdQuestionAnswer } from 'react-icons/md';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dialoge from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    return (
        <>
            <div className="bg-gray-800">
                <div className="mx-auto text-center">
                    <div className="flex lg:justify-center justify-between py-3">
                        {/* Parte 1: Ícones */}
                        <ul className="flex text-center">
                            <li className="mr-6">
                                <Link className="text-yellow-200 hover:text-gray-200 flex items-center" href="/"><MdHome className="lg:text-2xl md:hidden text-3xl" /> <span className="hidden md:block">Inicio</span></Link>
                            </li>

                            <li className="mr-6">
                                <Link className="text-yellow-200 hover:text-gray-200 flex items-center" href="/Produtos"><MdShoppingCart className="lg:text-2xl md:hidden text-3xl" /> <span className="hidden md:block">Produtos</span></Link>
                            </li>

                            <li className="mr-6">
                                <a href="#" className="text-yellow-200 hover:text-gray-200 flex items-center"> <MdInfo onClick={handleClickOpen} className="lg:text-2xl md:hidden text-3xl" /> <button onClick={handleClickOpen}><span className="hidden md:block">Seja Parceiro</span></button></a>
                            </li>
                            <li className="mr-6">
                                <Link
                                    href="/" className="text-yellow-200 hover:text-gray-200 flex items-center">
                                    <MdPersonAdd className="lg:text-2xl md:hidden text-3xl" />
                                    <span className="hidden md:block">Seja assinante</span>
                                </Link>
                            </li>
                        </ul>

                        {/* Parte 2: Botão "Saiba Mais" */}
                        <div>
                            <button
                                className='bg-yellow-300 hover:bg-yellow-500 transition ml-1 px-2 rounded'
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                Saiba Mais
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}><MdPerson className="mr-1" />Ifood</MenuItem>
                                <MenuItem onClick={handleClose}><MdQuestionAnswer className="mr-1" /> Fale conosco</MenuItem>
                            </Menu>

                            <React.Fragment>
                                <Dialoge
                                    open={open1}
                                    onClose={handleClose1}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title" className='text-yellow-200 bg-black text-center'>
                                        {"SEJA NOSSO PARCEIRO"}
                                    </DialogTitle>
                                    <DialogContent className='bg-gray-300'>
                                        <DialogContentText id="alert-dialog-description" className='mt-5 text-gray-600 font-bold'>
                                            A Abelhinha doces faz parceria com diversos estabelecimentos comerciais na área de alimentação com fornecimentos de
                                            nossos produtos para comercialização com boa margem de lucro e garantia de risco zero com a modalidade em comodato.
                                            Fornecemos semanalmente Bolos no pote, cones recheados, trufas, bolos bombons, mini pudins e etc.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions className='bg-gray-300'>

                                        <Button onClick={handleClose1}>Fechar</Button>
                                        <Button href='https://wa.link/7zobo7' className='font-bold' onClick={handleClose1} autoFocus>Tornar-se Parceiro</Button>


                                    </DialogActions>
                                </Dialoge>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )

};

export default NavBar;