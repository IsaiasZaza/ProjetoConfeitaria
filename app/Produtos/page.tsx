"use client"
import Doces from "../components/Doces";
import ProdutosLoja from "../components/ProdutosLoja"
import Typography from '@mui/material/Typography';
import StoreIcon from '@mui/icons-material/Store';
import CakeIcon from '@mui/icons-material/Cake';
import { LuDessert } from "react-icons/lu";
import { PiCakeDuotone } from "react-icons/pi";
import Sobremesas from "../components/Sobremesas";
import { useEffect, useState } from "react";



export default function Page() {

    const [doces, setDoces] = useState(false)
    const verDoces = () => {
        setDoces(true);
        setBolos(!bolos);
    }

    const [bolos, setBolos] = useState(true)
    const verBolos = () => {
        setBolos(true);
        setDoces(!doces)
    }

    const [todos, setTodos] = useState(false)

    const verTodos = () => {
        setBolos(true)
        setDoces(true)
    }
    return (
        <>
            <Typography className='text-yellow-800 lg:text-3xl text-2xl text-center mt-3' variant="h4">Produtos <StoreIcon className="text-3xl" /></Typography>
            <ul className="m-2 flex justify-center font-semibold text-yellow-600 text-lg">
                <li onClick={verBolos} className="hover:text-yellow-500 cursor-pointer">Bolos/</li>
                <li onClick={verDoces} className="hover:text-yellow-500 cursor-pointer">Doces & Sobremesas/</li>
                <li onClick={verTodos} className="hover:text-yellow-500 cursor-pointer">Todos</li>
            </ul>

            
            {bolos &&
                <div className="container mx-auto mt-3">
                    <div className="mx-auto">
                        <div className="mt-5 ml-3">
                            <Typography className='text-yellow-800 lg:text-3xl text-xl flex' variant="h4">Bolos <PiCakeDuotone className="text-3xl ml-3 mt-1" /></Typography>
                        </div>
                        <ProdutosLoja />
                    </div>
                </div>
            }


            {doces &&

                <div className="container mx-auto">
                    <div className="mx-auto">
                        <div className="ml-3 mt-5">
                            <Typography className='text-yellow-800 lg:text-3xl text-xl flex' variant="h4">Doces/Sobremesas <LuDessert className="text-3xl ml-3 mt-1" /></Typography>
                        </div>
                        <Doces />
                    </div>
                </div>

            }


        </>
    )
}