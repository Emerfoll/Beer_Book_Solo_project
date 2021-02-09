import { useState } from 'react';


function AddBeer() {

    const [beerName, setBeerName] = useState('');
    const [beerStyle, setBeerStyle] = useState('');
    const [beerABV, setBeerABV] = useState('');
    const [brewery, setBrewery] = useState('')
    

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (beerName !== ''
            && beerStyle !== ''
            && beerABV !== ''
            && brewery !== '') {
            const beerToAdd = {
                beerName,
                beerStyle,
                beerABV,
                brewery
            }
            
            console.log('submitted', beerToAdd);
        }
        else (alert('Please fill out all fields'));
        // setBeerName('');
        // setBeerABV('');
        // setBrewery('');
    }

    return(
        <>
        
        <h1>Add Your Beer</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                type="text" 
                placeholder="Beer Name"
                value={beerName}
                onChange={(event)=> setBeerName(event.target.value)}
                />

                <input 
                type="text" 
                placeholder="Style"
                value={beerStyle}
                onChange={(event)=> setBeerStyle(event.target.value)}
                />

                <input 
                type="number" 
                placeholder="ABV"
                value={beerABV}
                onChange={(event)=> setBeerABV(event.target.value)}
                />

                <input 
                type="text" 
                placeholder="Brewery"
                value={brewery}
                onChange={(event)=> setBrewery(event.target.value)}
                />

            </div>
            <button className="submitBtn" onClick={handleSubmit}>Submit</button>

        </form>
        
        </>
    )
}

export default AddBeer;