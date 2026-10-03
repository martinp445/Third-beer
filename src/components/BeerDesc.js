import './BeerDesc.css'

const BeerDesc = ({beerCount}) => {
    return (
        <h3 className="beer-desc">Máš {beerCount} piv</h3>
    )
}

export default BeerDesc