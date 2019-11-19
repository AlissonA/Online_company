import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class Main extends React.Component {
  static navigationOptions = {
    title: 'Online company',
  };

  state = {
    name: '',
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View>
        <Text style={styles.title}>Digite seu nome:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Digite seu nome"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Próxima</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Main;
// https://snack.expo.io/@bacon/firebase-basic-chat-video-tutorial