import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TextInputBase, TouchableOpacity, View } from "react-native";

interface Livros {
    titulo: string;
    autor: string;
    data_lancamento: string;
    editora: string;
    sinopse: string,
    avaliacao: string,
    image: any;
}

const dados: Livros[] = [
    {titulo: 'Coraline',
    autor: 'Neil Gainman',
    data_lancamento: '2002-07-02',
    editora:  'Intrínseca',
    sinopse: 'É um conto no qual uma jovem descobre uma porta para um misterioso mundo no palácio para onde acabou de se mudar.',
    avaliacao: '',
    image: require('')},
];

const renderItem = ({ item }: { item: Livros }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>{item.titulo}</Text>
        <Text style={styles.textInformacoes}>{item.autor}, {item.avaliacao},{item.data_lancamento},{item.editora},{item.sinopse}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.textAvaliacao}>{item.avaliacao}</Text>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000' ,
        flex: 1
    },
    item: {

    },
    itemTitle: {

    },
    textInformacoes: {

    },
    image: {

    },
    textAvaliacao: {
        
    }
});

export default Livros;