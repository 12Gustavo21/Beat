import React from 'react';

import '../styles/main/style.css';

import Girl from "../../img/Water.svg";
import Headphone from "../../img/Headphone.svg";
import Cassette from "../../img/Cassette.svg";
import Vinyl from "../../img/Vinyl.svg";

const gallery = [
    {
        img: Girl,
        alt: "Garota dançando na água"
    }, {
        img: Headphone,
        alt: "Garota escutando música com fones de ouvido"
    }, {
        img: Cassette,
        alt: "Fita cassete"
    }, {
        img: Vinyl,
        alt: "Disco de vinil"
    }
]

export default function Index() {
    return (
        <>
            <main>
                <section className="mainContainer">
                    <section className="informacoes">
                        <h1>Aqualera</h1>
                        <p>Uma brincadeira com fotos , cores e efeitos, curta, compartilhe e deixe seu comentário, ficarei feliz pelo feedback.</p>
                    </section>
                    <section className='imageBox'>
                        <figure className='image'>
                            {gallery.slice(0, 2).map((item, index) => (
                                <img src={item.img} alt={item.alt} key={index} />
                            ))} 
                        </figure>
                        <figure className='image'>
                            {gallery.slice(2, 4).map((item, index) => (
                                <img src={item.img} alt={item.alt} key={index} />
                            ))}
                        </figure>
                    </section>
                    <h1 className='ultimoTitulo'>Veja mais</h1>
                </section>
            </main>
        </>
    )
}