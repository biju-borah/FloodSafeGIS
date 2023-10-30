import React from 'react'
import logo from '../../assests/images/logoS.png'

export default function Loader() {
    return (
        <div style={{ 'height': '90vh', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'textAlign': 'center' }}>
            <div className='loader'>
                <img src={logo} style={{ 'width': '20vw', 'margin': 'auto' }} alt='logo' />
                <div style={{ 'marginTop': '10px', 'fontSize': '1.2rem' }}>Loading.... connecting to the server</div>
            </div>
        </div>
    )
}
