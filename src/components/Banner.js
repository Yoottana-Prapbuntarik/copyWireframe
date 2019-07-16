import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Banner(props) {
    return (
        <NavLink  style={{textDecoration:'none'}} to={`/${props.link}`}>

            <div className="container " style={{
                backgroundImage: `url(${props.img})`, maxWidth: '100%', backgroundAttachment: 'fixed',
                backgroundPosition: 'center', opacity: 0.9,
                backgroundSize: 'cover', padding: `${props._padding}%`, width: '100%', height: '100%'
            }}>
                <div className="row">
                    <div className="col-12 text-center text-white">
                        <h1 style={{ fontSize: '70px', color:`${props.color}` }}>{props.text}</h1>
                    </div>
                </div>

            </div>
        </NavLink>
    )
}
