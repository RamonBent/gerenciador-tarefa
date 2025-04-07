import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function Index() {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState<string[]>([]);

  function adicionarTarefa() {
    if (tarefa.trim() === '') return;
    setListaTarefas([...listaTarefas, tarefa]);
    setTarefa('');
  }

  function removerTarefa(index: number) {
    const novaLista = listaTarefas.filter((_, i) => i !== index);
    setListaTarefas(novaLista);
  }

  return (
    <View style={styles.containerBase}>
      <View style={styles.container1}>
        <Text style={styles.headerText}>Minhas tarefas</Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Digite sua tarefa"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={tarefa}
            onChangeText={setTarefa}
          />
          <TouchableOpacity style={styles.buttonAdicionar} onPress={adicionarTarefa}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={listaTarefas}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.tarefaItem}>
              <Text style={styles.tarefaTexto}>{item}</Text>
              <TouchableOpacity onPress={() => removerTarefa(index)}>
                <FontAwesome name="trash" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBase: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#021123',
  },
  container1: {
    height: 100,
    width: 350,
    borderRadius: 10,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  container2: {
    flex: 1,
    width: 350,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'blue',
  },
  headerText: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonAdicionar: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
  tarefaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  tarefaTexto: {
    color: '#fff',
    fontSize: 16,
  },
});
