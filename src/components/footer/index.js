import React from 'react';

import '../styles/footer/style.css';

import Instagram from "../../img/insta.svg";
import Facebook from "../../img/face.svg";
import LinkedIn from "../../img/linkedin.svg";
import Pinterest from "../../img/pinterest.svg";

const social = [
    {
        img: Instagram,
        alt: "Instagram icon"
    }, {
        img: Facebook,
        alt: "Facebook icon"
    }, {
        img: LinkedIn,
        alt: "LinkedIn icon"
    }, {
        img: Pinterest,
        alt: "Pinterest icon"
    }
]

export default function Index() {
    return (
        <>
            <footer>
                <section className='footerContainer'>
                    <section className='iconsBox'>
                        {
                            social.map((item, index) => {
                                return (
                                    <figure className='icons' key={index}>
                                        <img src={item.img}
                                            alt={item.alt}
                                            className='iconsImg' />
                                    </figure>
                                )
                            })
                        }
                    </section>
                    <section className='listBox'>
                        <ul className='list'>
                            <li className='listItem'>Portfólio</li>
                            <li className='listItem'>Sobre</li>
                            <li className='listItem'>Contato</li>
                        </ul>
                    </section>
                </section>
            </footer>
        </>
    )
}