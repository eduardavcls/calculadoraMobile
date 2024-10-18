import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Calculadora() {
  const [tela, setTela] = useState('')
  const [resultado, setResultado] = useState('')

  const aoPressionar = (value) => {
    if (value === 'AC') {
      setTela('');
      setResultado('');
    } else if (valor === '+/-') {
      setTela((prevTela) => prevTela ? (-1 * parseFloat(prevTela)).toString() : '0');
    } else if (value === '%') {
      setTela((prevTela) => (parseFloat(prevTela) / 100).toString());
    } else if (value === '=') {
      try {
        setResultado(eval(tela).toString());
      } catch (error) {
        setResultado('Erro');
      }
    } else {
      setTela(tela + value);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.tela}>
        <Text style={styles.textoTela}>{tela || '0'}</Text>
        <Text style={styles.textoResultado}>{resultado}</Text>
      </View>
      <View style={styles.botoes}>
        {['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => handlePress(value)}
            style={[
              styles.botao,
              value === '0' ? styles.botaoZero : {},
              value=== 'AC' || value === '+/-' || value === '%' ? styles.botaoCinza : {},
              value === '=' || value === '+' || value === '-' || value === '*' || value === '/' ? styles.botaoLaranja : {}
            ]}
          >
            <Text style={[
              styles.textoBotao,
              value === 'AC' || value === '+/-' || value === '%' ? styles.textoBotaoPreto : {}
            ]}>
              {value}
            </Text>
          
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', 
  },
  tela: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  textoTela: {
    fontSize: 60, 
    color: '#FFFFFF',
    fontWeight: '300',
  },
  textoResultado: {
    fontSize: 30,
    color: '#BBBBBB',
  },
  botoes: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: '5%', 
    justifyContent: 'space-between',
  },
  botao: {
    width: '22%',
    height: 80, 
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#333333', 
    borderRadius: 40, 
  },
  botaoZero: {
    width: '47%', 
    height: 80, 
    justifyContent: 'center',
    alignItems: 'between',
    backgroundColor: '#333333', 
    borderRadius: 40, 
    marginVertical: 1,
   
  },
  botaoCinza: {
    backgroundColor: '#A5A5A5', 
  },
  botaoLaranja: {
    backgroundColor: '#FF9500', 
  },
  textoBotao: {
    fontSize: 30,
    color: '#FFFFFF', 
    fontWeight: '500',
    marginLeft: 5,
  },
  textoBotaoPreto: {
    color: '#000000', 
  }
})
