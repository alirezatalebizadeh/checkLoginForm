const $ = document
const usernameInput = $.querySelector('#username')
const passwordInput = $.querySelector('#password')
const rememberMeCheckbox = $.querySelector('.ck')
const loginBtn = $.querySelector('button')

function setCookie(cookieName, cookieValue, exDay) {
    const now = new Date()

    now.setTime(now.getTime() + exDay * 24 * 60 * 60 * 1000)

    document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`
}


function clearInput() {
    usernameInput.value = ''
    passwordInput.value = ''
}


function getCookie(cookieName) {
    let cookiesArray = document.cookie.split(';')

    let mainCookie = null

    mainCookie = cookiesArray.some(cookie => {
        if (cookie.includes(cookieName)) {
            mainCookie = cookie.substring(cookie.indexOf('=') + 1)
            return true
        }
    })
    return mainCookie
}


loginBtn.addEventListener('click', event => {
    event.preventDefault()
    let isLogin = getCookie('login-token')

    if (isLogin) {
        location.href = '/index.html'
    } else if (rememberMeCheckbox.checked) {
        setCookie('login-token', usernameInput.value, 10)
        clearInput()
    }

})



window.addEventListener('load', () => {
    let isLogin = getCookie('login-token')

    if (isLogin) {
        location.href = '/index.html'
    }
})