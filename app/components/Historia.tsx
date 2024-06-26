import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Image from 'next/image';

export default function Historia() {
    return (
        <div className='py-3'>
            <div className='mt-3 lg:w-5/6 mx-auto border shadow-md bg-yellow-50 lg:px-10 lg:py-16 py-5 px-3 sm:w-full  rounded-lg '>
                <div className='text-center text-xl'>
                    <Typography className='text-yellow-800 justify-center font-semibold cursor-default' variant="h5">Nossa história <AutoStoriesIcon className='text-3xl' /></Typography>
                </div>
                <div className='w-3/4 mx-auto mt-5'>
                    <p className="text-base lg:text-lg text-yellow-700 font-semibold w-full cursor-default">
                        A Abelhinha doces é uma empresa familiar criada de forma natural e despretensiosa como forma de hobby,
                        e com o aumento de elogios e encomendas de amigos e parentes a fundadora <strong className='text-yellow-700'>Eliana Ferreira</strong> da costa viu
                        uma oportunidade de ajudar no orçamento da família e começou a buscar se especializar no ramo com um curso na
                        fundação Bradesco e outros cursos com confeiteiras profissionais.
                    </p>
                </div>

                <div className='lg:w-3/4 mx-auto mt-3 shadow-xl'>
                    <Accordion className='bg-yellow-300 text-gray-600'>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography className='text-yellow-700 font-bold text-lg underline'>Continue lendo</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='mx-auto text-justify text-yellow-700 font-semibold text-lg'>
                                <div className='mx-auto px-6'>
                                    <p>E entre altos e baixos a abelhinha doces está no mercado desde de 2017 com atendimento em uma loja física e depois com o
                                        E assim o projeto abelhinha doces e cia saiu do papel e toda a família se uniu em prol de um ideal.</p>

                                    <div className='lg:flex mt-4'>
                                        <p className='mt-3 lg:w-1/2 lg:mt-0 mx-auto'>Então aos poucos a família viu potencial na ideia e assim o esposo George Washington
                                            Consultor Comercial e seus dois filhos George Washington Junior Administrador de Empresas e Juan Nicolas Ferreira da costa
                                            Programador e Desenvolvedor de Software decidiram criar um pclano de negócios com vários canais de distribuição e marketing para tornar em um
                                            negócio escalável e estável.</p>
                                        <Image className='shadow-lg shadow-yellow-600 rounded-3xl lg:h-72 h-64 w-80 border-2 border-yellow-600 lg:mt-0 mt-3' src='/Moça.jpeg' alt='logo' width={1920} height={1080} />
                                    </div>
                                </div>
                            </Typography>
                        </AccordionDetails>

                    </Accordion>


                </div>

            </div>
        </div>

    );
}