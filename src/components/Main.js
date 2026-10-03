import './Main.css'

import BeerDesc from './BeerDesc'
import BeerCanvas from './BeerCanvas'
import EndSessionBtn from './EndSessionBtn'

const Main = ({nickname, beerCounter, setBeerCounter}) => {    

    return (
        <div className='main-root'>
            <h2>Vítej: {nickname} </h2>
            <BeerDesc beerCount={beerCounter}/>
            <BeerCanvas incrementBeerCounter={setBeerCounter}/>
            <EndSessionBtn nickname={nickname} />
        </div>
    )
}

export default Main