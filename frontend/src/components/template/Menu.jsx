import React from 'react'
import style from "./menu.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../actions/user';


export default props => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signOut());
    }
    return (
        <header className={style.heading}>
            <div className="logo">
                <img />
            </div>
            <div className={style.menu_profile}>
                <img className={style.profile_photo} src="https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/56476741_620927565040664_3318078784116097024_n.jpg?_nc_cat=107&_nc_oc=AQlYnzB_qOX5ly-dHuFDXVUEJmQ0qHiOptmwFxaQpYlecj6SgDHacJyb6_ysei00NiQ&_nc_ht=scontent.fcpq14-1.fna&oh=46b6de788069690512abfd4749b4b435&oe=5D8104EB" />
                <div className={style.profile_info}>
                    <span>Bem vinda(o)</span>
                    <p>{user.name}</p>
                    <a href="#" className={style.tile}>Meu perfil</a>
                </div>
            </div>
            <nav className={style.navegacao}>
                <ul>
                    <li>
                        <img src={home} />
                        <a>Página inicial</a>
                    </li>
                    <li className={style.hassubmenu}>
                        <div className={style.fakeimage}></div>
                        <span className={style.submenutext}>Publicações</span>
                        <ul className={style.submenu}>
                            <li>
                                <a>
                                    <span>Minhas</span>
                                    Publicações
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>Animais</span>
                                    Perdidos
                            </a>
                            </li>
                            <li>
                                <a>
                                    <span>Animais para</span>
                                    Adoção
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <div className={style.fakeimage}></div>
                        <a>Publicar</a>
                    </li>
                    <li>
                        <div className={style.fakeimage}></div>
                        <Link to="/" onClick={() => logout()}>Sair</Link>
                    </li>
                </ul>

            </nav>

        </header>
    )
}