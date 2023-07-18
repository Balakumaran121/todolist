import { Heading } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
function App() {
  const initialTodos = [
    {
      id: 1,
      body: "Welcome",
    },
    {
      id: 2,
      body: "Goodbye",
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const deleteTodo = (id) => {
    const newtodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newtodos);
  };
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
