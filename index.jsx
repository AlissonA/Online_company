import React, { Component } from 'react'
import {Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native'

export default class tela1 extends Component {
   state = {
      nome: '',
      sobrenome: ''
   }
   handleEmail = (text) => {
      this.setState({ nome: text })
   }
   handlePassword = (text) => {
      this.setState({ sobrenome: text })
   }
   login = (email, pass) => {
      alert('nome: ' + nome + ' sobrenome: ' + pass)
   }  
  render() {
    return (
        <View style = {styles.container}>
			<View style={styles.barraTitulo}>
				<Text style={styles.titulo}>Online company</Text>
      </View>
  
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
                 placeholder = "Nome"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleNome}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Sobrenome"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleSobrenome}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.nome, this.state.sobrenome)
               }>
               <Text style = {styles.submitButtonText}> OK </Text>
            </TouchableOpacity>
         </View>      
    )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:0
     },
	barraTitulo: {
		backgroundColor: 'mediumpurple',
		padding: 10,
		height: 60,
		flexDirection: 'row'
	},
	titulo: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		color: 'honeydew'
	},
     input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
     submitButton: {
        backgroundColor: '#7a42f4',
       textAlign: 'center',
        padding: 10,
        margin: 15,
        height: 40,
   },
     submitButtonText:{
        color: 'white'
   }
}); 