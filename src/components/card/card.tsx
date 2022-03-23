import style from './card.module.scss';
import Button from '../button/button';
import racaoImg from '../../assets/img/ração.png';
import heart from '../../assets/img/heart.svg';

export default function Input() {
    return (
        <section className={style.card}>
            <header className={style.card__header}>
                <img src={racaoImg} alt="" />
                <img src={heart} alt="" className={style.card__icon} />
            </header>
            <section className={style.content}>
                <p>Ração Magnum</p>
                <p>R$ 89,90</p>
            </section>
            <footer className={style.button}>
                <Button type="button">Comprar</Button>
            </footer>
        </section>
    )
}