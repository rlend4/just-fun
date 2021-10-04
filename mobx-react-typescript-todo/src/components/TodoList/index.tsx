import React, { useState } from "react";
import { observer } from "mobx-react";
import ModalNewTodo from "../ModalNewTodo";
import { useStores } from "../../use-stores";
import { StyledTodoList, StyledHeader, Container } from "./styles";
import { Button } from "@material-ui/core";
import TodoItem from "../TodoItem";

const TodoList = observer(() => {
    const [modalNewTodoIsOpen, setModalNewTodo] = useState(false);
    const { todoStore } = useStores();

    return (
        <>
            {modalNewTodoIsOpen && (
                <ModalNewTodo
                    isOpen={modalNewTodoIsOpen}
                    closeModal={() => setModalNewTodo(false)}
                />
            )}
            <Container>
                    <StyledHeader>
                        <h2>mobx todo</h2>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => setModalNewTodo(true)}
                        >
                            Add new
                        </Button>
                    </StyledHeader>
                    <StyledTodoList>
                        {todoStore.incompletedTodos.length === 0 && <p>Nothing to do!</p>}
                        {todoStore.incompletedTodos.map(todo => {
                            return <TodoItem key={todo.id} todo={todo} />;
                        })}
                    </StyledTodoList>
                    <h3>completed {todoStore.todoProgress}</h3>
                    <StyledTodoList>
                        {todoStore.completedTodos.map(todo => {
                            return <TodoItem key={todo.id} todo={todo} />;
                        })}
                    </StyledTodoList>
            </Container>
        </>
    );
});

export default TodoList;