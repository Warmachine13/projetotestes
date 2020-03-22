import React, { Component, PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Slider,
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  TextInput
} from "react-native";

import { default as imagem } from "./foto2";
import { default as imagem2 } from "./foto";


class BTNTeste extends Component {
  constructor() {
    super();
    this.state = {
      teste: "teste"
    };
  }

  setar() {
    this.setState({ teste: "test2" });
    //alert('teste');
    this.props.onPress("return");
  }
  render() {
    return <Button title={this.state.teste} onPress={() => this.setar()} />;
  }
}

class Testado extends PureComponent {
  constructor() {
    super();
    this.state = {
      teste: ""
    };
  }

  alterartesto(value) {
    this.setState({
      teste: value
    });
    this.props.onChangeText(value);
  }

  render() {
    return (
      <View style={{ backgroundColor: "red" }}>
        <Text style={{ textAlign: "center" }}>Digite aqui</Text>
        <TextInput
          style={{ backgroundColor: "white" }}
          value={this.state.teste}
          onChangeText={value => this.alterartesto(value)}
        />
      </View>
    );
  }
}


//const TOKEN = Base64.btoa(clientId + ':' + secret);

var texto, texto2;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      teste: ""
    };
  }
  render() {
   // console.warn("renderizou");
    return (
      <ImageBackground
        source={imagem}
        style={{ width: "100%", height: "100%" }}
      >
        <BTNTeste onPress={value => alert(value)} />
        <Testado onChangeText={value => (texto = value)} />
        <Testado onChangeText={value => (texto2 = value)} />
        <TextInput
          style={{ backgroundColor: "green" }}
          onChangeText={value => this.setState({ teste: value })}
          value={this.state.teste}
        />
        <Text
          style={{ color: "#fff", alignSelf: "center" }}
          onPress={() => this.setState({ language: "lucas" })}
        >
         {'lucas'}
        </Text>
        <View style={{ margin: 10, backgroundColor: "green", flex: 1 }}>
          <Text>View</Text>
        </View>
        <View style={{ margin: 10, backgroundColor: "red", flex: 1 }}>
          <Text>Text</Text>
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: "red",
            flex: 2,
            justifyContent: "center"
          }}
        >
          <Button
            color={"blue"}
            title={texto ? texto : "primeiro"}
            onPress={() => {
              alert(this.state.language);
            }}
          />
        </View>
        <View
          onTouchStart={() => texto && alert(texto)}
          style={{
            margin: 10,
            backgroundColor: "red",
            flex: 5,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image style={{ width: "100%", height: "100%" }} source={imagem2} />
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: "red",
            flex: 4,
            justifyContent: "center"
          }}
        >
          {<ActivityIndicator />}
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: "red",
            flex: 2,
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "blue", textAlign: "center" }}>
            {eval("1+2+3")}
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: "red",
            flex: 2,
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "blue", textAlign: "center" }}>
            {entrada()}
          </Text>
        </View>
        <Picker
          mode={"dialog"}
          selectedValue={this.state.language}
          style={{ flex: 3, backgroundColor: "#456787", color: "white" }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Slider thumbTintColor={"red"} />
      </ImageBackground>
    );
  }
}

function entrada(a = 5) {
  if (a == null) return 5;
  return a;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: 'center',
    backgroundColor: "#000"
  },
  welcome: {
    fontSize: 20,

    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const black = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const white = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
