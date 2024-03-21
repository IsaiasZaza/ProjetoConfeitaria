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
        <div className='bg-gray-200 py-3'>
            <div className='mt-3 lg:w-5/6 mx-auto bg-yellow-200 lg:px-10 lg:py-16 py-5 px-3 sm:w-full shadow-2xl rounded-lg'>
                <div className='text-center text-xl'>
                <Typography className='text-yellow-800 justify-center' variant="h5">Nossa história <AutoStoriesIcon className='text-3xl' /></Typography>
                </div>
                <div className='w-3/4 mx-auto mt-5'>
                    <p className="text-base lg:text-lg font-bold text-gray-600">
                        A Abelhinha doces é uma empresa familiar criada de forma natural e despretensiosa como forma de hobby,
                        e com o aumento de elogios e encomendas de amigos e parentes a fundadora <strong className='text-slate-700'>Eliana Ferreira</strong> da costa viu
                        uma oportunidade de ajudar no orçamento da família e começou a buscar se especializar no ramo com um curso na
                        fundação Bradesco e outros cursos com confeiteiras profissionais.
                    </p>
                </div>

                <div className='lg:w-3/4 mx-auto mt-3 shadow-xl'>
                    <Accordion className='bg-yellow-400 text-gray-600'>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography className='font-bold text-lg'>Continue lendo</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='mx-auto text-justify text-gray-700 text-lg'>
                                E entre altos e baixos a abelhinha doces está no mercado desde de 2017 com atendimento em uma loja física e depois com o
                                fechamento da loja passou atender apenas por encomendas. Então aos poucos a família viu potencial na ideia e assim o esposo George Washington
                                Consultor Comercial e seus dois filhos George Washington Junior Administrador de Empresas e Juan Nicolas Ferreira da costa
                                Programador e Desenvolvedor de Software decidiram criar um plano de negócios com vários canais de distribuição e marketing para tornar em um
                                negócio escalável e estável. E assim o projeto abelhinha doces e cia saiu do papel e toda a família se uniu em prol de um ideal. E assim renasce a abelhinha doces com logo repaginada e um plano de marketing agressivo e vários canais de vendas e distribuições dos produtos já conhecidos e lançamentos de outros.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                </div>

            </div>
        </div>

    );
}