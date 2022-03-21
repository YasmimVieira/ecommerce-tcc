import style from './navbar.module.scss';

type Props = { children: React.ReactNode; type: "submit" | "button" };

export default function Button(props: Props) {
    const { type = "button" } = props;
    return(
        <button type={type} className={style.button}>
            {props.children}
        </button>
    )
}