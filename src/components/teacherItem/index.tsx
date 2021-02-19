import React from 'react';

import whats from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/56046588?s=400&u=8eebe34c8a374b4d7c17fae9f066bf98dba40778&v=4" alt="Lucas Silva"/>
                <div>               
                    <strong>Licas Silva</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhoroes tecnologias de química avançada.
                <br/> <br/>
                Se você é uma dessas pessoas que não tem sorte, quando vir a luz no fim do túnel...corra, pois é um trem
            </p>

            <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>

                    <button type="button">
                        <img src={whats} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
            </footer>
        </article>
    );
}

export default TeacherItem; 