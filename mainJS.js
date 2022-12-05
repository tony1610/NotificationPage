const notifCount = document.querySelector('.notification__count')
const markAllUnread = document.querySelector('.notification__reset')
const unreadNoti = Array.from(document.querySelectorAll('.unread'))
const notifCard = Array.from(document.querySelectorAll('.notif--card'))


// count all new notifications and display the new count of notifications in the top bar
notifCount.innerText = unreadNoti.length

// when click any new notification, remove the unread alert, and update notifications count
notifCard.forEach((removeAlert) =>{
    removeAlert.addEventListener('click', e =>{
        const unreadContainer = removeAlert.querySelector('.flex--container').classList.remove('unread')

        const unreadNoti = Array.from(document.querySelectorAll('.unread'))
        notifCount.innerText = unreadNoti.length
    })
})

// when MARK ALL btn is click needs to erase all new unread notification and update notifications count

markAllUnread.addEventListener('click', e =>{
    notifCard.forEach((removeAll) =>{
        const unreadContainer = removeAll.querySelector('.flex--container').classList.remove('unread')

        const unreadNoti = Array.from(document.querySelectorAll('.unread'))
        notifCount.innerText = unreadNoti.length
    })
})