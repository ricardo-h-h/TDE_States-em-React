import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(0);

  const validarInputs = () => {
    if (numero1.trim() === '' || numero2.trim() === '') {
      Alert.alert("Erro", "Por favor, digite ambos os números.");
      return false;
    }
    return true;
  };

  const somar = () => {
    if (!validarInputs()) return;
    const num1 = parseFloat(numero1); 
    const num2 = parseFloat(numero2);
    setResultado(num1 + num2); 
  };

  const subtrair = () => {
    if (!validarInputs()) return;
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    setResultado(num1 - num2);
  };

  const multiplicar = () => {
    if (!validarInputs()) return;
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    setResultado(num1 * num2);
  };

  const dividir = () => {
    if (!validarInputs()) return;
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (num2 === 0) {
      Alert.alert("Erro", "Não é possível dividir por zero.");
      return;
    }
    setResultado(num1 / num2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Simples</Text>

      <TextInput
        style={styles.input}
        placeholder="Número 1"
        value={numero1}
        onChangeText={setNumero1}
        keyboardType="numeric" 
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        value={numero2}
        onChangeText={setNumero2}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <Button title="Somar" onPress={somar} />
        <Button title="Subtrair" onPress={subtrair} />
        <Button title="Multiplicar" onPress={multiplicar} />
        <Button title="Dividir" onPress={dividir} />
      </View>

      <Text style={styles.result}>Resultado: {resultado.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%', 
    borderColor: 'gray',
    borderWidth: 1,
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    width: '100%', 
    marginVertical: 20, 
  },
  result: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 30,
  },
});