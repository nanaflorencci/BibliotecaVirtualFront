import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import Footer from "../components/Footer";

interface ListagemLivros {
    id: string;
    titulo:string;
    autor:string;
    data_lancamento:string;
    editora:string;
    sinopse:string;
    genero:string;
    avaliacao:string;
    image:any;
};

const Listagem: React.FC = () => {
  const [livros, setLivros] = useState<ListagemLivros[]>([]);
  const [elementVisible, setElementVisible] = useState(false);

  useEffect(() => {
    ListagemLivros();
  }, []);

  const ListagemLivros = async () => {
    try {
      const response = await axios.get('http://10.137.11.217:8000/api/livros/listagem');
      if (response.status === 200) {
        setLivros(response.data.data);
        console.log(livros);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const renderItem = ({ item }: { item: ListagemLivros}) => (
    <View style={styles.item} key={item.id}>
      <Text style={styles.itemTitulo}>{item.titulo}</Text>
      <Text style={styles.textAutor}>{item.autor}</Text>
      <Text style={styles.textGenero}>{item.genero}</Text>
      <Text style={styles.textData}>{item.data_lancamento}</Text>
      {elementVisible ? (
        <View >
      <Text style={styles.textEditora}>{item.editora} </Text>
      <Text style={styles.textSinopse}>{item.sinopse}</Text>
      <Text style={styles.textAvaliacao}>{item.avaliacao}</Text>
      </View >
      ) : null}
            <TouchableOpacity onPress={() => setElementVisible(!elementVisible)}>
          <Image source={require('../assets/images/botao.png')} style={styles.button} />
        </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Image source={require('../assets/images/capa.png')} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={livros}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
};

const styles = StyleSheet.create({
   container: {
        backgroundColor: '#000000' ,
        flex: 1
    },
    button: {
        
    },
    headerIcon: {
        width: 300,
        height: 300,
        marginBottom: -90,
        marginTop: -90
    },
    item: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    itemTitulo: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textAutor: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textGenero: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textData: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textEditora: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textSinopse: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textAvaliacao: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    image: {
        height: 100,
        width: 170,
        borderRadius: 10,
        borderWidth: 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15
    },
});
export default ListagemLivros;