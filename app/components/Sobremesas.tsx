import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp';

const Sobremesas = () => {
    return (
        <>
            <div className="mx-auto justify-center container">
                <div className="py-10 px-8 grid grid-cols-1 md:grid-cols-5 gap-3">
                    {/* Repetir o componente Card 4 vezes */}
                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="Doce1.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-950' gutterBottom variant="h6" component="div">
                                Copudim
                            </Typography>
                            <p className='text-center text-gray-600'>R$ 20,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="Doce2.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Copudim pequeno
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 15,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>
                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="Doce3.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Copo da felicidade
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 20,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="Doce4.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Copo da felicidade pequeno
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 15,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='bg-yellow-300 shadow-xl' sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className='border-b border-gray-400 h-80 hover:h-96 transition-all'
                            image="Doce5.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center' gutterBottom variant="h6" component="div">
                                Mini pudim
                            </Typography>
                        </CardContent>
                        <p className='text-center'>R$ 10,00</p>
                        <CardActions className="flex justify-center">
                            <button className='font-medium border-2 text-sm border-yellow-400 py-1 px-2 rounded-full hover:bg-black hover:text-yellow-300 text-white bg-gray-600 transition'><a href="https://wa.link/pxei63">Comprar<LocalGroceryStoreSharpIcon className='text-yellow-300' /></a></button>
                        </CardActions>
                    </Card>


                </div>
            </div>

            <div>

            </div>


        </>
    )


};

export default Sobremesas;