import Image from "next/image"
import ProdutosLoja from "../components/ProdutosLoja"
import Typography from '@mui/material/Typography';
import StoreIcon from '@mui/icons-material/Store';

export default function Page() {
    return (
        <>
        <div className="bg-gray-00">
            <div className="text-center mx-auto py-6">
                <Typography className='text-yellow-800 lg:text-3xl text-2xl' variant="h4">Produtos <StoreIcon className="text-3xl"/></Typography>
                <ProdutosLoja />
            </div>

        </div>
            
        </>
    )
}