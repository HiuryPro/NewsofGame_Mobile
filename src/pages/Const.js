// @ts-ignore
import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({

  switch: {
    alignSelf: 'flex-start',
    marginLeft: 10,

  },
  dark: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  light: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'

  },
  imagem: {
    resizeMode: 'stretch',
    width: 350,
    height: 200,
    marginTop: 10,
    marginBottom: 10

  },
  textlight: {
    color: 'black',
  },
  textblack: {
    color: 'white',
  },
  card: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
    marginBottom: 20,
    borderWidth: 2,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 30,
    elevation: 24,
    shadowColor: "black",

  },
  cardark: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    backgroundColor: '#333333',
    marginBottom: 10,
    borderWidth: 2,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 30,
    elevation: 24,
    shadowColor: "white"

  },
  card2: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 30,
    elevation: 24,
    shadowColor: "black",


  },
  cardark2: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    backgroundColor: '#333333',
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 30,
    elevation: 24,
    shadowColor: "white",


  },

  cardImage: {
    width: '100%',
    flex: 1,
    height: 200,
    resizeMode: 'stretch',
  },
  cardImager: {
    width: '100%',
    flex: 1,
    height: 200,
    resizeMode: 'stretch',

  },


  textInput: {
    color: 'white',
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'black',
    paddingLeft: 10,
    height: 40,
    marginBottom: 15

  },
  entrar: {
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#DC1F26',
    paddingLeft: 10,
    height: 40,
    marginBottom: 15
  },
  entrarB: {
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#23E0D9',
    paddingLeft: 10,
    height: 40,
    marginBottom: 15

  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',

  },
  textinputBlack: {
    color: 'black',
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'white',
    paddingLeft: 10,
    height: 40,
    marginBottom: 15

  },
  fontes: {
    textDecorationLine: 'underline',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    textAlign: 'justify',
    marginBottom: 15

  },
  imageDrawer: {
    width: 200,
    resizeMode: 'stretch',
    height: 100,
    alignSelf: 'center'


  },
  proximolight: {
    flex: 1,
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',

  },
  proximodark: {
    flex: 1,
    backgroundColor: '#333333',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',

  },
  textol: {
    color: 'black',
    textAlign: 'center',

  },
  textob: {
    color: 'white',
    textAlign: 'center',
  },

  lancal: {
    height: "auto",
    marginTop: 5,
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
    marginBottom: 10,
    borderWidth: 2,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 30,
    borderColor: "black"
  },
  lancab: {
    height: "auto",
    marginTop: 5,
    justifyContent: 'center',
    backgroundColor: 'black',
    marginBottom: 10,
    borderWidth: 2,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 30,
    borderColor: "white"
  }


});


const Light = {
  dark: false,
  colors: {
    primary: '#DC1F26',
    background: 'white',
    card: '#F7F7F7',
    text: 'rgb(28, 28, 30)',
    border: '#F7F7F7',
    notification: 'rgb(255, 69, 58)',
  },
};
const Dark = {
  dark: true,
  colors: {
    primary: '#23E0D9',
    background: 'black',
    card: '#333333',
    text: 'white',
    border: '#333333',
    notification: 'white',
  },
};




export { styles, Dark, Light }