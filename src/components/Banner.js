import React from 'react'

export default function Banner(props) {
    return (
        <div>
                <div className="container" style={{
                    backgroundImage:`url(${props.img})`, maxWidth: '100%', backgroundAttachment: 'fixed',
                    backgroundPosition: 'center', opacity: 0.9,
                    backgroundSize: 'cover', padding: '20%', width: '100%', height: '100%'
                }}>
                    <div className="row">
                        <div className="col-12 text-center text-white">
                            <h1 style={{ fontSize: '70px' }}>{props.text}</h1>
                        </div>
                    </div>

                </div>
        </div>
    )
}
