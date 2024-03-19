import Image from "next/image"
import Doces from "../components/Doces";
import ProdutosLoja from "../components/ProdutosLoja"
import Typography from '@mui/material/Typography';
import StoreIcon from '@mui/icons-material/Store';
import CakeIcon from '@mui/icons-material/Cake';


export default function Page() {
    return (
        <>
        <div className="bg-gray-00 container mx-auto">
            <div className=" mx-auto py-6">
                <Typography className='text-yellow-800 lg:text-3xl text-2xl text-center' variant="h4">Produtos <StoreIcon className="text-3xl"/></Typography>
                <div className="ml-8 mt-5">
                      <Typography className='text-yellow-800 lg:text-3xl text-xl' variant="h4">Produtos <StoreIcon className="text-3xl"/></Typography>
                </div>
              
                <ProdutosLoja />
            </div>
        </div>

        <div className="bg-gray-00 container mx-auto">
            <div className="mx-auto py-6">
                <Typography className='text-yellow-800 lg:text-3xl text-2xl text-center' variant="h4">Produtos <StoreIcon className="text-3xl"/></Typography>
                <div className="ml-8 mt-5">
                      <Typography className='text-yellow-800 lg:text-3xl text-xl' variant="h4">Doces <CakeIcon className="text-3xl"/></Typography>
                </div>
                <Doces/>
            </div>
        </div>
            
        </>
    )
}