import React, { useEffect } from "react";
import gsap from 'gsap';

function GSAP() {
    useEffect(() => {
        let textAnimation = gsap.timeline();
        textAnimation.from('.word', {
            y: 100,
            stagger: {
                each: 0.05
            }
        })
    }, [])
    return (
            <div>
                <h1>qkdowqd
                </h1>
                {
                    'Hello world!'.split(' ').map((word, index) => {
                        return word === ' ' ? <span key={index} className="word">&nbsp;</span> : <span key={index} className="word">{word}</span>
                    })
                }
            </div>
    );
}

export default GSAP;
