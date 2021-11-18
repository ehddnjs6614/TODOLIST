const quotes = [
  { quote: '삶이 있는 한 희망은 있다.', author: '- 키케로' },
  { quote: '산다는것 그것은 치열한 전투이다.', author: '- 로망로랑' },
  {
    quote: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. ',
    author: '- 사무엘존슨',
  },
  {
    quote: '언제나 현재에 집중할수 있다면 행복할것이다',
    author: '- 파울로 코엘료',
  },
  {
    quote:
      '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해',
    author: '- 찰리 채플린',
  },
  {
    quote: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.',
    author: '- 엘버트 허버드',
  },
  { quote: '신은 용기있는자를 결코 버리지 않는다.', author: '- 켄러' },
  { quote: '피할수 없으면 즐겨라.', author: '- 로망로랑' },
  {
    quote: '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에',
    author: '- 엘사 맥스웰',
  },
  {
    quote:
      '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다 .',
    author: '- L.론허바드',
  },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todayQuoto = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuoto.quote
author.innerText = todayQuoto.author
