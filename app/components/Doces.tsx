import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp';

const Doces = () => {
    return (
        <>
            <div className="mx-auto justify-center container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 md:grid-cols-3 gap-2 mt-5 mx-auto px-3">
                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="pudim.jpeg"
                            title="MiniPudim"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Mini Pudim
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 7,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="brigadeiro.jpeg"
                            title="Brigadeiro"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Brigadeiro Gourmet
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>A partir de R$ 160,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>
                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Brownie.jpeg"
                            title="Brownie Recheado"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Brownie Recheado
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 10,00</p>
                        </CardContent>

                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Tortinha.jpeg"
                            title="Tortinha de Limão/Maracujá"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Tortinha de Limão/Maracujá
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 10,00</p>
                        </CardContent>

                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="ConeTrufado.jpeg"
                            title="Cone Trufado"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Cone Trufado
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 8,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Pote.jpeg"
                            title="Bolo no pote"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Bolo no pote
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 10,00</p>
                        </CardContent>

                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="tradicional.jpeg"
                            title="Brigadeiro Tradicional"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Brigadeiros Tradicional
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 120,00</p>
                        </CardContent>


                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>
                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Trufa.jpeg"
                            title="Trufa"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Trufa
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 4,00 unidade</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Cupcake.jpeg"
                            title="Cupcake"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Cupcake
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 6,50 unidade</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="pastel.jpeg"
                            title="Pastelzinho de Ninho com Nutella"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Pastelzinho de Ninho com Nutella
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 12,00 unidade</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="coxinha.jpeg"
                            title="Coxinha de Morango"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Coxinha de Morango
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 6,50 unidade</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="travessa.jpg"
                            title="Sobremesa na travessa"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Coxinha de Morango
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>A partir de R$ 45,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Taca.jpg"
                            title="Taças Doce"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Taças
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>A partir de R$ 99,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Felicidade.jpg"
                            title="Copo da felicidade"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Copo da felicidade
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 20,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="copoDim.jpg"
                            title="Copudim"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Copudim
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>R$ 20,00</p>
                        </CardContent>
                        <CardActions className="flex justify-center">
                            <button className='shadow-lg font-medium border-2 text-sm border-yellow-200 py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-orange-800 text-black bg-yellow-200 transition'><a href="https://wa.link/acbcfw">Comprar<LocalGroceryStoreSharpIcon className='text-orange-600' /></a></button>
                        </CardActions>
                    </Card>

                    <Card className='shadow-xl w-full'>
                        <CardMedia
                            className='border-b border-yellow-400 object-fill h-80 hover:h-96 transition-all'
                            image="Pudim.jpg"
                            title="Pudim"
                        />
                        <CardContent>
                            <Typography className='text-center text-gray-700 text-lg font-semibold' gutterBottom variant="h6" component="div">
                                Pudim
                            </Typography>
                            <p className='text-orange-600 font-bold text-base text-center'>A partir de R$ 45,00</p>
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

export default Doces;