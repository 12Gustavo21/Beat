import React from 'react';
import '../styles/header/style.css';
import Life from '../../img/life.svg';


export default function Index() {
    return (
        <>
            <header>
                <section className='headerContainer' >
                    <section className='boxList'>
                        <ul className='lista' >
                            <li>Portfolio</li>
                            <li>Sobre</li>
                            <li>Contato</li>
                        </ul>
                    </section>
                    <section className='logoBox'>
                        <h1>No compasso da batida</h1>
                        <img src={Life} alt="Batidas de coração escrito Life " />
                    </section>
                    <section className='boxList'>
                        <ul className='lista'>
                            <li>Arte & Design</li>
                            <li>Estilo & Musica</li>
                            <li>Ebook & Videos</li>
                        </ul>
                    </section>
                </section>
            </header>
        </>
    )
}