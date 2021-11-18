const clock = document.querySelector('h2#clock')

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0') //앞에 2는 String의 길이
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  //String길이가 두글자가 되는거고 그렇지않다면 앞에 0을 추가
  clock.innerText = `${hours}:${minutes}:${seconds}`
}
getClock()
//setInterval 은 정한 시간마다 fun을 실행시켜줌
setInterval(getClock, 1000)
