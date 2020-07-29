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

const menus = document.querySelectorAll('[data-action="menu"]')
menus.forEach(menu => {
    menu.querySelectorAll('[data-link]').forEach(item => {
        item.onclick = () => {
            menu.querySelectorAll('[data-link]').forEach(item => {
                const content = document.querySelector(`${item.dataset.link}`)
                content.classList.add('hidden')
            })
            const content = document.querySelector(`${item.dataset.link}`)
            content.classList.remove('hidden')
        }
    })
})

const collapses = document.querySelectorAll('[data-action="collapse"]')
collapses.forEach(collapse => {
    collapse.querySelectorAll('[data-link]').forEach(item => {
        item.onclick = () => {
            const content = collapse.querySelector(`${item.dataset.link}`)
            content.classList.toggle('hidden')
        }
    })
})
