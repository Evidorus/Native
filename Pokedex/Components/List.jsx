import React, {useEffect, useState} from 'react';
import  {View, Text} from "react-native";
import Pokemon from "./Pokemon"

export default function List() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then((response) => {return response.json()})
        .then((response) => {
            console.log(response)
            setPokemonList(response.results);
        })
    })

    return(
        <View>
            <Text>La liste des pokemons</Text>
            {pokemonList.map((pokemon) => {
                return(
                    <>
                        <Pokemon pokemon={pokemon}></Pokemon>
                    </>
                )
            })}
        </View>
    )
}