import style from './menuOptions.module.scss';
import pet from '../../assets/img/shampoo.svg'

export default function MenuOptions() {
    return (
        <>
            <section className={style.menuOptions}>
                <header className={style.header}>
                    <h2>Do que seu pet gosta?</h2>
                </header>
                <section className={style.menuOptions__itens}>
                    <section className={style.menuOptions__objects}>
                        <figure className={style.menuOptions__images}>
                            <img src={pet} alt="" />
                        </figure>
                    </section>
                </section>
            </section>
        </>
    )
}