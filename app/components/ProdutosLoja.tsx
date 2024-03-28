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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-2 mt-5 mx-auto px-3">
                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="BoloComTopo.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Bolo com Topo
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 160,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="bolo com acetato.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Bolo com Acetato
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 160,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>
                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Bolo de chantilly com ganache.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Bolo de Chantilly com Ganache
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 160,00</p>
                        </CardContent>

                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Bolo de ganache.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Bolo de Ganache
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 160,00</p>
                        </CardContent>

                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="BoloCinza.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Bolo de chantilly
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 160,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Cake.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Bento Cake
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 160,00</p>
                        </CardContent>

                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="arroz.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Bolo com papel de arroz
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 160,00</p>
                        </CardContent>


                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>
                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="flores.jpeg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Bolo com flores naturais
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 160,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
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