const menu = ['#open-menu', '#close-menu']
menu.forEach(id => {
    document.querySelector(id).onclick = () => {
      document.querySelector('#menu-open-mobile').classList.toggle('hidden')
      document.querySelector('#open-menu').classList.toggle('hidden')
      document.querySelector('#close-menu').classList.toggle('hidden')
      document.querySelector('#logo').classList.toggle('text-black-blue')
      document.querySelector('#logo').classList.toggle('text-white')
    }
})
