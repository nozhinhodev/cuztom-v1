import React from 'react';
import '../assets/styles/main.css'
import {Link} from "react-router-dom";
import hoodie from "../assets/styles/hoodie.png";
function Generator(props) {
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossOrigin="anonymous"
            />

            <div className="header">

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


            <div className="cont">
                <div className="title">
                    Введите свой запрос на принт
                    <img src={hoodie} alt="" className="img__h"/>

                </div>
                <div className="area">
                    <textarea maxlength="30">
                    </textarea>
                    <button className="btn">Отправить</button>

                </div>
            </div>
        </div>
    );
}

export default Generator;