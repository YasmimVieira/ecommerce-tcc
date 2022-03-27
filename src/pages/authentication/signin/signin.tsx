import TextField from '@mui/material/TextField';
import Button from '../../../components/button/button';
import style from './signin.module.scss';
import pets from '../../../assets/img/pets.svg';
import Box from '@mui/material/Box';

export default function Signin() {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <section className={style.signin}>
                    <figure className={style.signin__illustration}>
                        <img src={pets} alt="Ilustração de cachorros" />
                    </figure>
                    <form className={style.signin__form}>
                        <header className={style.signin__form__header}>
                            <p>Acesse sua conta agora</p>
                        </header>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            color="warning"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Senha"
                            type="password"
                            variant="outlined"
                            color="warning"
                        />
                        <a href="" className={style.signin__link}>Esqueci minha senha</a>
                        <footer className={style.signin__footer}>
                            <Button type="submit">Entrar</Button>
                            <span>Ainda não tem uma conta? <a href="" className={style.signin__link}>Cadastre-se agora</a></span>

                        </footer>
                    </form>
                </section>
            </Box>
        </>
    )
}