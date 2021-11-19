const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event) {
  event.preventDefault() //event가 원래하는 행동을 멈춰줌 새로고침을 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME) //form 을 다시숨겨줌
  const username = loginInput.value //loginInput.value를 username이라는 변수로 저장
  localStorage.setItem(USERNAME_KEY, username) //username ,USERNAME_KEY 을 localStorage에 저장
  paintGreeting(username) //paintGreeting (username)을 호출
}
//fun은  username이라는 인자를 하나 받고있고
function paintGreeting(username) {
  greeting.innerText = `${username}` //h1요소안에 `Hello ${username}` 텍스트를 추가
  greeting.classList.remove(HIDDEN_CLASSNAME) //h1요소로부터 hidden이라는 클래스를 제거
}
//실행되면 localStorage에서 savedUsername값을 얻으려고함
const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  paintGreeting(savedUsername) //유저정보가 localStorage 으로옴
}
//paintGreeting을 실행하는건 화면에 텍스트가 출력하게하는게 다임
