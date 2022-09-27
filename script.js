function tabuada() {

    let number = document.getElementById('number-ini')
    let clica = document.getElementById('isolado')

    if (number.value.length == 0) {
        window.alert('[ERRO] Você precisa digitar um número!')
    } else {
        let num = Number(number.value)
        let c = 1
        clica.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `clica ${c}`
            clica.appendChild(item)
            c++
        }
    }



}