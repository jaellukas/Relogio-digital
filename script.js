function newTime(){
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()
    msg.innerHTML = `agora sao exatamente ${hora} horas ${min} minutos e ${seg} segundos...`
    if (hora >= 5 && hora <12) {
        img.src = 'manha.jpeg'
       document.getElementById('horario').innerHTML = 'Bom Dia!!'
       document.body.style.background = '#e2cd9f'
    }
    else if (hora >=12 && hora < 18) {
        img.src = 'tarde.jpeg'
        document.getElementById('horario').innerHTML = 'Boa Tarde!!'
        document.body.style.background = '#b9846f'
    }
    else if (hora >= 18 && hora <23) {
        img.src = 'noite.jpeg'
        document.getElementById('horario').innerHTML = 'boa noite!!'
        document.body.style.background = '#515154'
    }
    else {
        img.src = 'noite.jpeg'
        document.getElementById('horario').innerHTML = 'Boa Madrugada!!'
        document.body.style.background = '#121a59'
    }
}
newTime()
setInterval(newTime,1000)