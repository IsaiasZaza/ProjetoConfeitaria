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


const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
   
    
    return (
        <>

            <div className="bg-gray-800">
                <div className="mx-auto text-center">
                    <div className="flex lg:justify-center justify-between py-3">
                        {/* Parte 1: Ícones */}
                        <ul className="flex text-center">
                            <li className="mr-6">
                                <a href="#" className="text-yellow-200 hover:text-gray-200 flex items-center"> <MdHome className="lg:text-2xl md:hidden text-2xl" /> <span className="hidden md:block">Inicio</span></a>
                            </li>

                            <li className="mr-6">
                                <a href="#" className="text-yellow-200 hover:text-gray-200 flex items-center"> <MdShoppingCart className="lg:text-2xl md:hidden text-2xl" /> <span className="hidden md:block">Produtos</span></a>
                            </li>

                            <li className="mr-6">
                                <a href="#" className="text-yellow-200 hover:text-gray-200 flex items-center"> <MdInfo className="lg:text-2xl md:hidden text-2xl" /> <span className="hidden md:block">Seja Parceiro</span></a>
                            </li>
                            <li className="mr-6">
                                <a href="#" className="text-yellow-200 hover:text-gray-200 flex items-center">
                                    <MdPersonAdd className="lg:text-2xl md:hidden text-2xl" />
                                    <span className="hidden md:block">Seja assinante</span>
                                </a>
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
                        </div>
                    </div>
                </div>
            </div>
            


        </>
    )

};

export default NavBar;