import './End.css'

const End = ({nickname, beerCount}) => {
    var quote = "dobře ty!"
    if (beerCount > 4){
        quote = "ty prase jedno!"
    }

    return (
        <div className="end-root">
            <h2>{nickname} Vypils {beerCount} piv, {quote}</h2>
        </div>
    )
}

export default End;