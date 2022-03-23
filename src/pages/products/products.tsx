import style from './products.module.scss';
import Card from '../../components/card/card';

export default function Products() {
    return(
        <>
        <section className={style.products}>
            <header className={style.products__title}>
                <p>Todos produtos para cachorros</p>
            </header>
              <Card />
        </section>
        </>

    )
}