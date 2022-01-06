# TODOLIST

## 개발목표 
` 누구나 한번쯤은 강의를듣고 처음 따라해본 클론 프로젝트`

## 사용기술

 - html
 - css
 - javascript  
 - fetch
 
 ## 주요기능 
 
 (OpenWeather API 를 받아와 자신이 속한 지역의 날씨를 불러온다 )
 ```
 const API_KEY = '894bf7645cc2a2a0bdff01c109755f69' //MY Api

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lng = position.coords.longitude
  console.log('You live in', lat, lng)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')
      city.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}
function onGeoError() {
  alert('Can`t find you. No weather for you.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
```

***

유저정보 값을 저장하기위해 localStorage 사용하여 유저정보를 담는다
```
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
```
*** 

(새로고침을 할때마다 랜덤으로 만들어둔 명언을 화면에뿌려준다) 
```
const quotes = [
  { quote: '삶이 있는 한 희망은 있다. -키케로', author: '- 키케로' },
  {
    quote: '산다는것 그것은 치열한 전투이다 - 로망로랑.',
    author: '- 로망로랑',
  },
  {
    quote:
      '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. - 사무엘존슨 ',
    author: '- 사무엘존슨',
  },
  {
    quote: '언제나 현재에 집중할수 있다면 행복할것이다 - 파울로 코엘료',
    author: '- 파울로 코엘료',
  },
  {
    quote:
      '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 - 찰리 채플린',
    author: '- 찰리 채플린',
  },
  {
    quote:
      '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다. - 엘버트 허버드',
    author: '- 엘버트 허버드',
  },
  { quote: '신은 용기있는자를 결코 버리지 않는다. - 켄러', author: '- 켄러' },
  { quote: '피할수 없으면 즐겨라. - 로망로랑', author: '- 로망로랑' },
  {
    quote: '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에 - 엘사 맥스웰',
    author: '- 엘사 맥스웰',
  },
  {
    quote:
      '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다. - L.론허바드',
    author: '- L.론허바드',
  },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todayQuoto = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuoto.quote
author.innerText = todayQuoto.author
```
***

## 개선사항 & 느낀점
```
아무래도 처음했던 클론 프로젝트라 그런지 무작정따라해보고 결과적으로 잘 따라갔다는점에 큰의미를 두고있다.
```


