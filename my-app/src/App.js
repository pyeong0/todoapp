import React, { useState, useEffect } from 'react';
import {
  Container, Form, TextInput,
  SubmitInput, UnorderdList, ListItem,
  TodoText, TodoDelete } from './styledComponents'
import './App.css'

export default function App() {
  const [todo, setTodo] = useState([]);     // 할 일 목록 상태 관리
  const [todoId, setTodoId] = useState(0);  // 할 일 항목의 고유 ID 관리

  // 할 일 추가 처리 함수
  const handleSubmit = (todoText) => {
    setTodo([
      ...todo,
      {
        todoId: todoId,
        todoText: todoText,
        todoDone: false
      }
    ])
    setTodoId(todoId + 1)     // 다음 할 일 항목의 ID 증가
  }

  // 할 일 삭제 처리 함수
  const handleDelete = (todoId) => {
    setTodo(todo.filter(item => item.todoId !== todoId))
  }

  // 할 일 완료/미완료 토글 처리 함수
  const handleToggle = (todoId) => {
    setTodo(todo.map(item => item.todoId === todoId ? { ...item, todoDone: !item.todoDone } : item))
  }

  // 컴포넌트가 만들어지는 순간마다 로컬스토리지에서 기존 할 일 목록 불러오기
  useEffect(() => {
    const defaultTodo = JSON.parse(localStorage.getItem("todo"))

  // 로컬스토리지가 비어있었다면 이 함수는 의미가 없다
    if(!defaultTodo) return;

    setTodo(defaultTodo)
    if(defaultTodo.length !== 0 ){
      setTodoId(defaultTodo[defaultTodo.length - 1].todoId + 1)
    }
  }, [])
  // todo가 갱신될 때마다 로컬스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  return (
    <Container>
      <Form onSubmit={(e) => {
        e.preventDefault()                  // 폼 제출 시 새로고침 방지
        handleSubmit(e.target.todo.value)   // 할 일 추가 함수 호출
        e.target.todo.value = ''            // 입력 필드 초기화
      }}>
        <TextInput type='text' placeholder='할일 쓰기' name='todo' />
        <SubmitInput type='submit' value='추가' />
      </Form>
      <UnorderdList>
        {todo.map((item, index) =>
        <ListItem key={index}>
          <TodoText onClick={() => handleToggle(item.todoId)} className={item.todoDone? "done" : "yet"}>
            {item.todoText}
          </TodoText>
          <TodoDelete onClick={() => handleDelete(item.todoId)}>X</TodoDelete>
        </ListItem>)}
      </UnorderdList>
    </Container>
  );
}