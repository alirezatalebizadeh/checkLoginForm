
function getCookie(cookieName) {
    let cookiesArray = document.cookie.split(';')

    let mainCookie = null

    cookiesArray.some(cookie => {
        if (cookie.includes(cookieName)) {
            mainCookie = cookie.substring(cookie.indexOf('=') + 1)
            return true
        }
    })

    return mainCookie
}

window.addEventListener('load', () => {
    let isLogin = getCookie('login-token')

    if (!isLogin) {
        location.href = '/login.html'
    }
})