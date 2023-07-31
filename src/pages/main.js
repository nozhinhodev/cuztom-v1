import React from 'react';
import '../assets/styles/main.css'
import hoodie from '../assets/styles/hoodie.png'
import { Link } from 'react-router-dom';

function Main(props) {
    return (
        <div>

            <div className="header">

                <div className="blue-block">
                    <Link className='il' to='https://www.instagram.com/drip.uz/' href=""><img src="../assets/images/instagram-logo.png" alt="" className="sm"/></Link>
                    <Link to='' href=""><img src="../assets/images/facebook-logo.png" alt="" className="sm"/></Link>
                </div>


                <div className="links">
                    <div className="link">
                        <Link className='il' to='/construct'>Конструктор</Link>
                    </div>
                    <div className="link">
                       <Link className="il" to='/aigen'>AI Генератор</Link>
                    </div>
                    <div className="link">
                        <Link className="il" to='/'>Коллекции</Link>
                    </div>
                </div>
            </div>

            <div className="main__content">
                <div className="product__box">
                    <div className="image"><img src={hoodie} className='hoodie__pic' alt=""/></div>

                </div>
                <div className="sub__block">
                    <div className="title__card">Худи</div>
                    <div className="price__card">от 140.000 сум</div>

                    <div className="button">
                        <button className="btn">
                            <Link className="btn_link" to='/construct'>Подробнее</Link>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;