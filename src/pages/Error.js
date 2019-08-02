import React from 'react'
class Notfound404 extends React.Component {
    render() {
        
                let styles = {
                    margin: '25%',
                    color: '#ff0000',
                    textAlign: 'center'
                }

        return (
            <div style={styles}>
                <h1>404</h1>
                <h2>ERROR !</h2>
                <h3>PAGE NOT FOUND</h3>
            </div>
        )
    }
}  export default Notfound404
