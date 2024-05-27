import { useState, useEffect } from "react"

export default function Pokedex() {
    const [id, setId] = useState(1)
    const [pokemon, setPokemon] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setPokemon(data)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [id])
    //useEffect acontece quando é feita a conexão com a API, retornando os dados do pokemon a partir do ID

    const nextPokemon = () =>{
        setId(id + 1)
    }
    const previousPokemon = () =>{
        setId(id-1)
    }
    return (
        <div>
               {pokemon && (
                    <div className="container-pokemon">
                        <h1 className="title" >Pokémon</h1>
                        <p className="name">{pokemon.name}</p>
                        <p className="Peso">Peso: {pokemon.weight}g</p>
                        <img className="pokemon-image" src={pokemon.sprites.front_default} alt="Pokemon" />
                        <div className="buttons">
                        <button onClick={previousPokemon}>Voltar</button>
                        <button onClick={nextPokemon}>Próximo</button>
                        </div>
                    </div>
            )}
        </div>
    )
}