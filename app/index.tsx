import React, { useState } from "react";
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity, Text, Animated } from "react-native";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !=="") {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderTodo = ({ item }: { item: Todo }) => (
    <Animated.View style={styles.todo}>
      <Text style={[styles.todoText, item.completed && styles.completed]}>{item.text}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => toggleComplete(item.id)}>
          <Text style={styles.completeButton}>{item.completed ? "     Undo" : " Complete"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
          <Text style={styles.deleteButton}>  Delete</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello{}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={addTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#6200ee",
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 24,
    color: "#fff",
  },
  list: {
    flexGrow: 1,
  },
  todo: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  todoText: {
    fontSize: 16,
    flex: 1,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  actions: {
    flexDirection: "row",
  },
  completeButton: {
    // color: "#e53935",
    marginRight: 10,
    backgroundColor: "green",
    color:'white',
    height: 25 ,
    width: 70,
    borderRadius: 20,
  },
  deleteButton: {
    // color: "#e53935",
    marginRight: 1,
    backgroundColor: "red",
    color:'white',
    height: 25 ,
    width: 55,
    borderRadius: 20, 
    // alignItems: "center",     
    // justifyContent: "center",
  },
});