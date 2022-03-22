import style from './menuOptions.module.scss';
import pet from '../../assets/img/shampoo.svg'
import petBrinquedo from '../../assets/img/brinquedo-de-estimacao.svg';
import petScratcher from '../../assets/img/scratcher.svg';
import petGarrafa from '../../assets/img/garrafa-pet.svg';
import petShop from '../../assets/img/pet-shop.svg';

export default function MenuOptions() {
    return (
        <>
            <section className={style.menuOptions}>
                <header className={style.menuOptions__header}>
                    <h2>Do que seu pet gosta?</h2>
                </header>
                <section className={style.menuOptions__itens}>
                    <section className={style.menuOptions__objects}>
                        <figure className={style.menuOptions__images}>
                            <img src={pet} alt="" />
                        </figure>
                    </section>
                    <section className={style.menuOptions__objects}>
                        <figure className={style.menuOptions__images}>
                            <img src={petBrinquedo} alt="" />
                        </figure>
                    </section>
                    <section className={style.menuOptions__objects}>
                        <figure className={style.menuOptions__images}>
                            <img src={petScratcher} alt="" />
                        </figure>
                    </section>
                    <section className={style.menuOptions__objects}>
                        <figure className={style.menuOptions__images}>
                            <img src={petGarrafa} alt="" />
                        </figure>
                    </section>
                    <section className={style.menuOptions__objects}>
                        <figure className={style.menuOptions__images}>
                            <img src={petShop} alt="" />
                        </figure>
                    </section>
                </section>
            </section>
        </>
    )
}