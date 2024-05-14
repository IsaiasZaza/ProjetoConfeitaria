"use client";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  MdHome,
  MdShoppingCart,
  MdInfo,
  MdPersonAdd,
  MdPerson,
  MdQuestionAnswer,
} from "react-icons/md";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Dialoge from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { GrVmMaintenance } from "react-icons/gr";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [abrir, setAbrir] = React.useState(false);
  const handleOpen = () => setAbrir(true);
  const Fechar = () => setAbrir(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="bg-gray-800">
        <div className="mx-auto text-center">
          <div className="flex lg:justify-center justify-center py-3">
            {/* Parte 1: Ícones */}
            <ul className="flex text-center font-semibold">
              <li className="mr-6">
                <Link
                  className=" text-yellow-200 hover:text-orange-300 flex items-center transition-all"
                  href="/"
                >
                  <MdHome className="lg:text-2xl md:hidden text-3xl" />{" "}
                  <span className="hidden md:block">Inicio</span>
                </Link>
              </li>

              <li className="mr-6">
                <Link
                  className="text-yellow-200 hover:text-orange-300 flex items-center transition-all"
                  href="/Produtos"
                >
                  <MdShoppingCart className="lg:text-2xl md:hidden text-3xl" />{" "}
                  <span className="hidden md:block">Produtos</span>
                </Link>
              </li>

              <li className="mr-6">
                <a
                  href="#"
                  className="text-yellow-200 hover:text-orange-300 flex items-center transition-all"
                >
                  {" "}
                  <MdInfo
                    onClick={handleClickOpen}
                    className="lg:text-2xl md:hidden text-3xl"
                  />{" "}
                  <button onClick={handleClickOpen}>
                    <span className="hidden md:block">Seja Parceiro</span>
                  </button>
                </a>
              </li>
              <li className="mr-6">
                <Link
                  href="/#SejaParceiro"
                  className="text-yellow-200 hover:text-orange-300 flex items-center"
                >
                  <MdPersonAdd className="lg:text-2xl md:hidden text-3xl" />
                  <span className="hidden md:block">Seja assinante</span>
                </Link>
              </li>
            </ul>

            {/* Parte 2: Botão "Saiba Mais" */}
            <div>
              <button
                className="bg-yellow-300 hover:bg-yellow-500 transition ml-1 px-2 rounded"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Saiba Mais
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                className="mt-2"
              >
                <MenuItem onClick={handleClose}>
                  <MdPerson className="mr-1" />

                  <button>
                    <a href="https://www.ifood.com.br/delivery/brasilia-df/abelhinha-doces-recanto-das-emas/02e15197-c181-4fbf-979a-b3739597f8fd">
                      Ifood
                    </a>
                  </button>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <MdQuestionAnswer className="mr-1" />
                  <Button className="text-black" href="https://wa.link/rminni">
                    Fale conosco
                  </Button>
                </MenuItem>
              </Menu>

              <React.Fragment>
                <Dialoge
                  open={open1}
                  onClose={handleClose1}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <div className="bg-gray-300">
                    <img src="Parceiro.jpeg" alt="Parceiro" className="w-full h-60 mx-auto" />
                  </div>
                  <DialogContent className="bg-gray-300">
                    <p className="text-center text-2xl font-bold text-yellow-800 cursor-default">Seja nosso Parceiro</p>
                    <DialogContentText
                      id="alert-dialog-description"
                      className="mt-3 text-yellow-800 font-bold text-base cursor-default"
                    >
                      A Abelhinha doces faz parceria com diversos
                      estabelecimentos comerciais na área de alimentação com
                      fornecimentos de nossos produtos para comercialização com
                      boa margem de lucro e garantia de risco zero com a
                      modalidade em comodato. Fornecemos semanalmente Bolos no
                      pote, cones recheados, trufas, bolos bombons, mini pudins
                      e etc.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions className="bg-gray-300">
                    <Button
                      className="text-gray-50 bg-red-600 hover:bg-red-900 rounded-md flex transition-all"
                      onClick={handleClose1}
                    >
                      Voltar
                    </Button>
                    <Button
                      href="https://wa.link/17embw"
                      className= "bg-indigo-600 text-white rounded-md transition-all hover:bg-indigo-800"
                      onClick={handleClose1}
                      autoFocus
                    >
                      Tornar-se Parceiro
                    </Button>
                  </DialogActions>
                </Dialoge>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
