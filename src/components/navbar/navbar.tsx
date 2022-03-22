import TextField from '@mui/material/TextField';
import Button from '../button/button';
import ButtonNoBack from '../button/button-no-background/buttonNoBack';
import style from './navbar.module.scss';

export default function NavBar() {
    return(
        <>
            <header className={style.header}>
                <h1>Dual<span className={style.header__logo}>Vet</span></h1>
                <TextField id="standard-basic" label="O que seu pet procura?" variant="standard" />
                <Button type="button">Cadastra-se</Button>
                <ButtonNoBack type="button">Entrar</ButtonNoBack>
            </header>
            <nav className={style.navbar}>
                <ul className={style.navbar__list}>
                    <li><a href="" className={style.navbar__list__item}>Cachorros</a></li>
                    <li><a href="" className={style.navbar__list__item}>Gatos</a></li>
                    <li><a href="" className={style.navbar__list__item}>Pássaros</a></li>
                    <li><a href="" className={style.navbar__list__item}>Contato</a></li>
                    <li><a href="" className={style.navbar__list__item}>Meus pedidos</a></li>
                </ul>
            </nav>
        </>
    )
}