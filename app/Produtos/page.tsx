"use client"
import Doces from "../components/Doces";
import ProdutosLoja from "../components/ProdutosLoja"
import Typography from '@mui/material/Typography';
import StoreIcon from '@mui/icons-material/Store';
import CakeIcon from '@mui/icons-material/Cake';
import Sobremesas from "../components/Sobremesas";
import { useEffect, useState } from "react";



export default function Page() {

    return (
        <>
        
            <div className="container mx-auto mt-3">
                <div className="mx-auto">
                    <Typography className='text-yellow-800 lg:text-3xl text-2xl text-center mt-3' variant="h4">Produtos <StoreIcon className="text-3xl" /></Typography>
                    <div className="mt-5 ml-3">
                        <Typography className='text-yellow-800 lg:text-3xl text-xl' variant="h4">Bolos <StoreIcon className="text-3xl" /></Typography>
                    </div>
                    <ProdutosLoja />
                </div>
            </div>

            <div className="container mx-auto">
                <div className="mx-auto py-6">
                    <div className="ml-5 mt-5">
                    <Typography className='text-yellow-800 lg:text-3xl text-xl' variant="h4">Doces/Sobremesas <CakeIcon className="text-3xl" /></Typography>
                    </div>
                    <Doces />
                </div>
            </div>
                
        </>
    )
}