import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


import './Modal.css'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: '400ms ease-in',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    
    zIndex: 1000,
    

}

export default function Modal({ open, children, onClose }) {

    const dispatch = useDispatch()

    // dispatch({ type: 'BEER_LIST_DETAILS', payload: { beer: beerId } })
    let beerDetails = useSelector(store => store.beerListDetails)

    
    if (!open) return null

    return (

        <div className="modalDetails">
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLES}>
                
                {children}
                <button onClick={onClose}>close Modal</button>

            </div>

        </div>
    )
}