import React, {useEffect, useState} from "react";
import {View, Text, Image} from "react-native";

const Pokemon = ({pokemon}) => {

    const [image, setImage] = useState("");

    useEffect(() => {
        fetch(pokemon.url)
        .then((response) => {
            return (response.json())
        })
        .then((response) => {
            setImage(response.sprites.other.official-artwork.front_default)
        })
    }, [pokemon])

    return(
        <View>
            <Image source={{uri: `${image}`}}></Image>
            <Text>{pokemon.name}</Text>
        </View>
    )
}

export default Pokemon