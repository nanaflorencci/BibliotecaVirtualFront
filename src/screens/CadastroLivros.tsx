import axios from "axios";
import React, { useState } from "react";
import {ScrollView, Image, StatusBar, StyleSheet, Text, TextInput,TouchableOpacity, View } from "react-native";

const CadastroLivros: React.FC = () => {
    const [titulo, setTitulo] = useState<string>('');
    const [autor, setAutor] = useState<string>('');
    const [genero, setGenero] = useState<string>('');
    const [data_lancamento, setDataLancamento] = useState<string>('');
    const [editora, setEditora] = useState<string>('');
    const [sinopse, setSinopse] = useState<string>('');
    const [avaliacao, setAvaliacao] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const CadastroProduto = async () => {
        try{
        const formData=new FormData();
        formData.append('titulo', titulo);
        formData.append('autor', autor);
        formData.append('genero', genero);
        formData.append('data_lancamento', data_lancamento);
        formData.append('editora', editora);
        formData.append('sinopse', sinopse);
        formData.append('avaliacao', avaliacao);
        formData.append('imagem',{
            uri:imagem,
            type:'image/jpeg',
            name:new Date()+ '.jpg',
        });

const response= await axios.post('http://10.137.11.217:8000/api/clientes', formData,{
    headers:{
        'Content-Type':'multipart/form-data'
    }
});
        }catch(error){
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            <StatusBar backgroundColor="#000000" barStyle="light-content" />

            <View style={styles.form}>

            <TextInput
                    style={styles.input}
                    placeholder="Título do livro:"
                    value={titulo}
                    onChangeText={setTitulo}/>

                <TextInput
                    style={styles.input}
                    placeholder="Autor do livro:"
                    value={autor}
                    onChangeText={setAutor}/>

                <TextInput
                    style={styles.input}
                    placeholder="Gênero do livro:"
                    value={genero}
                    onChangeText={setGenero}
                    multiline />
                    
                <TextInput
                    style={styles.input}
                    placeholder="Data de lançamento do livro:"
                    value={data_lancamento}
                    onChangeText={setDataLancamento}
                    multiline />

                <TextInput
                    style={styles.input}
                    placeholder="Editora do livro:"
                    value={editora}
                    onChangeText={setEditora}
                    multiline />

                <TextInput
                    style={styles.input}
                    placeholder="Sinopse do livro:"
                    value={sinopse}
                    onChangeText={setSinopse}
                    multiline />

                <TextInput
                    style={styles.input}
                    placeholder="Avaliação do livro:"
                    value={avaliacao}
                    onChangeText={setAvaliacao}
                    multiline />

            </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000' ,
        flex: 1
    },
    input: {
        height: 40,
        borderColor: '#000000',
        borderWidth: 3,
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    form: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
});

export default CadastroLivros;