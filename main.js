document.getElementById('time').innerHTML = new Date().toLocaleString()

function background() {
  document.body.style.background = "url('img/cyber-security-1915626_1280.png')"
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'
}

function reset() {
  document.body.style.background = 'none'
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.jpg'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}

function showcss() {
  document.getElementById('fig').src = 'img/css3.jpg'
  document.getElementById('desc').innerHTML =
    '<b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}

function showjs() {
  document.getElementById('fig').src = 'img/javascript.jpg'
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다. '
}
function github() {
  document.getElementById('fig').src = 'img/pngimg.com - github_PNG19.png'
  document.getElementById('desc').innerHTML =
    '<b>github</b>는 Git을 기반으로 한 클라우드 기반의 코드 호스팅 플랫폼 이고 코드 공유 및 협업을 용이하게 해주며, 소스코드 리뷰, 이슈 트래킹, 프로젝트 관리 등 다양한 기능을 제공한다 '
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
