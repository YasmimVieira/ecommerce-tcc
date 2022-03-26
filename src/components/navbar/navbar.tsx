import TextField from '@mui/material/TextField';
import Button from '../button/button';
import ButtonNoBack from '../button/button-no-background/buttonNoBack';
import style from './navbar.module.scss';
import shopCart from '../../assets/img/shopcart.svg';

export default function NavBar() {
    return(
        <>
            <header className={style.header}>
                <h1>Dual<span className={style.header__logo}>Vet</span></h1>
                <TextField id="standard-basic" label="O que seu pet procura?" variant="standard" />
                <div className={style.header__buttons}>
                    <Button type="button">Cadastra-se</Button>
                    <ButtonNoBack type="button" >Entrar</ButtonNoBack>
                </div>
            </header>
            <nav className={style.navbar}>
                <ul className={style.navbar__list}>
                    <div className={style.navbar__list__options}> 
                        <li><a className={style.navbar__list__item}>Cachorros</a></li>
                        <li><a className={style.navbar__list__item}>Gatos</a></li>
                        <li><a className={style.navbar__list__item}>Pássaros</a></li>
                        <li><a className={style.navbar__list__item}>Peixes</a></li>
                        <li><a className={style.navbar__list__item}>Roedores</a></li>
                        <li><a className={style.navbar__list__item}>Pássaros</a></li>
                        <li><a className={style.navbar__list__item}>Outros</a></li>
                        <li><a className={style.navbar__list__item}>Contato</a></li>
                        <li><a className={style.navbar__list__item}>Meus pedidos</a></li>
                    </div>
                    <div>
                        <img src={shopCart} alt="" />
                    </div>
                </ul>
            </nav>
        </>
    )
}