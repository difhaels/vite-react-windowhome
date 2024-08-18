import React from 'react'
import whatsapp from '../assets/icons/wa.svg'
export default function Whatsapp() {
    return (
        <div className="position-fixed" style={{ zIndex: 50, bottom: '1rem', right: '1rem' }}>
            <a href="https://github.com/difhaels" target="_blank" className="rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ transition: 'transform 0.2s', width: '50px', height: '50px' }}>
                <img src={whatsapp} className="w-100 h-100" alt="github" />
            </a>
        </div>
    )
}
