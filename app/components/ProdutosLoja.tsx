import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StoreIcon from '@mui/icons-material/Store';
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
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="bolo com acetato.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                AbelhaCof
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="Bolo de chantilly com ganache.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                AbelhaCof
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="Bolo de ganache.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                AbelhaCof
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="nova.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                AbelhaCof
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="nova.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                AbelhaCof
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="nova.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                AbelhaCof
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="nova.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                AbelhaCof
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 160,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>


                    {/* Repetir o componente Card 3 vezes para um total de 4 no desktop */}
                    {/* Note que no mobile apenas 2 cartões por linha serão renderizados */}
                </div>
            </div>



        </>
    )


};

export default ProdutosLoja;