console.log(data);


function createDog(data){
    const h2El = document.createElement('h2')
    h2El.textContent = data.name
    const main_dogSection = document.querySelector(`.main__dog-section`)
    main_dogSection.innerHTML = ''

    const imgEl = document.createElement('img')
    imgEl.setAttribute('src', data.image)
    
    const divEl = document.createElement('div')
    divEl.setAttribute(`class`,`main__dog-section__desc`)

    const divElTWo = document.createElement('div')
    divElTWo.setAttribute('class','main__dog-section__btn')

    const h3El = document.createElement('h3')
    h3El.textContent = 'Bio'

    const divP = document.createElement('p')
    divP.textContent = data.bio

    const pEl = document.createElement('p')
    pEl.textContent = ` yes!`

    const emEl = document.createElement('em')
    emEl.textContent = `Is naughty?`
    
    const buttonEl = document.createElement('button')

    let defaultValue = data.isGoodDog
    buttonEl.addEventListener('click', function () {
        pEl.textContent = ` no!`
        defaultValue = !defaultValue
    })
    if(defaultValue){
        buttonEl.textContent = 'Good Dog'
     }else{
        buttonEl.textContent = 'Bad Dog'
    }
    
    main_dogSection.append(h2El,imgEl,divEl,divElTWo)
    divEl.append(h3El,divP)
    anotherDivEl.append(pEl,buttonEl)
    pEl.prepend(emEl)
}

function createDogButton(data){
    const liEl = document.createElement('li')
    liEl.setAttribute('class','dogs-list__button')
    
    liEl.textContent = data.name
    const ulEl = document.querySelector('.dogs-list')
    ulEl.append(liEl)

    liEl.addEventListener('click', function () {
        createDog(data)
    })
}

function createAllButtons(){
    for(const element of data){
        createDogButton(element)
    }
}
createAllButtons()

