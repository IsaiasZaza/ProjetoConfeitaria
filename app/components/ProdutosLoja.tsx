import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp';

const ProdutosLoja = () => {
    return (
        <>
            

            <div className="mx-auto justify-center container">
                <div className="py-10 px-8 grid grid-cols-1 md:grid-cols-4 gap-3">
                    {/* Repetir o componente Card 4 vezes */}
                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="BoloComTopo.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-950' gutterBottom variant="h6" component="div">
                                Bolo com topo
                            </Typography>
                            <p className='text-center text-gray-600'>R$ 160,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="bolo com acetato.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Bolo com acetato
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/aabrfq">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>
                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="Bolo de chantilly com ganache.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Bolo de chantilly com ganache
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/az3fik">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="Bolo de ganache.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Bolo de Ganache
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/i8e69l">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="BoloCinza.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Bolo de chantilly
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/01n7by">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="Cake.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Bento Cake
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/ze7zxs">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="arroz.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Bolo com papel de arroz
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/gv5jk5">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>
                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="flores.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Bolo com flores naturais
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/ry7afa">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>
                </div>
            </div>

            <div>

            </div>


        </>
    )


};

export default ProdutosLoja;