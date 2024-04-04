// https://formspree.io/f/moqgkgrk
const form = document.getElementById('form-contacto');

async function handleSendEmail(event){
    event.preventDefault()
    /*form data*/
    const fd = new FormData(this)
    const response = await fetch('https://formspree.io/f/moqgkgrk',{
       method: 'POST',
       body: fd,
       headers: {
        Accept: 'application/json'
       }
    })

    if(response.ok){
        this.reset()
        alert('Mensaje enviado')
    }else{
        alert('Error al enviar mensaje')
    }
}

form.addEventListener('submit', handleSendEmail)