import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
  const toast = useToast();
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content) {
      toast({
        title: "No content available",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newTodo = {
      id: nanoid(),
      body: content,
    };
    addTodo(newTodo);
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          variant="filled"
          placeholder="learning chakra UI"
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
