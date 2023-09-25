import styled from "styled-components";

// 파일에서 자바스크립트 객체 여러개를 내보내고 싶은 경우 익스포트문
// 전체 컨테이너 설정
export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://velog.velcdn.com/images/w4t3r/post/db44612e-f193-49d3-a80c-f153e398c143/image.jpg'), url('https://velog.velcdn.com/images/w4t3r/post/7359b7f9-9275-4e4f-afff-ef56bb1c2246/image.jpg');
  background-position: left center, right center;
  background-repeat: no-repeat;
  ${'' /* background-size:470px 700px, 470px 700px; */}

  // 모바일 화면
  @media screen and (max-width: 768px) {
    background-size: 0;
  }

  // 노트북 화면
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    background-size: 390px 700px, 390px 700px;
  }

  // PC 화면
  @media screen and (min-width: 1025px) {
    background-size: calc(390px * 1.25) calc(700px * 1.25), calc(390px * 1.25) calc(700px * 1.25);
  }
`
// 할 일 입력 폼 설정
export const Form = styled.form`
  width: 33%;
  min-width: 375px;
  display: flex;
`

// 할 일 텍스트 입력 필드 설정
export const TextInput = styled.input`
  width: 80%;
  height: 3rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.2rem 0 0 0.2rem;
  font-family:sans-serif;
  font-size: 1.2rem;

  &:focus{
    outline: none;
  }
`

// 할 일 추가 버튼 설정
export const SubmitInput = styled.input`
  width: 20%;
  height: 3rem;
  border: none;
  border-radius: 0 0.2rem 0.2rem 0;

  color: #ffffff;
  background-color: green;
  font-size: 1.2rem;
`

// 할 일 목록 컨테이너 설정
export const UnorderdList = styled.ul`
  width: 33%;
  min-width: 375px;
  height: 10rem;
  padding: 0;

  list-style-type: none;
`

// 할 일 항목 설정
export const ListItem = styled.li`
  padding: 0.375rem;
  margin-bottom: 0.8rem;
  border-radius: 0.2rem; 
  background-color: #FFFFFF;
  
  position: relative;
`

// 할 일 텍스트 설정
export const TodoText = styled.span`
  display: inline-block;
  width: 90%;
  font-size: 1.2rem;
  line-height: 1.5rem;
`

// 할 일 삭제 버튼 설정
export const TodoDelete = styled.button`
  width: 10%;
  height: 1.5rem;
  border: none;
  border-radius: 0.5rem; 

  background-color: transparent;
  font-weight: 900;

  position: absolute;
  right: 0;
`