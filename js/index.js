/* =================== nav style =================== */

const NavStyle = () => {
    const nav = document.getElementById('nav')
    document.documentElement.scrollTop > 546 ?
    nav.classList.add('toggle_nav') : nav.classList.remove('toggle_nav')
}
window.onscroll = () => NavStyle()

/* =================== show nav =================== */

const ShowNav = (icon_click_id,nav_id) => {
    const icon = document.getElementById(icon_click_id)
    const nav = document.getElementById(nav_id)

    icon.onclick =() => {
        nav.classList.toggle('show')
    }

}
ShowNav('nav__icon','nav__list')

/* =================== Hide nav =================== */

// const HideNav = (nav__links,class_remove) => {
//     const link_items = document.getElementsByClassName(nav__links)
//     Array.prototype.forEach.call(link_items,n => n.parentElement.parentElement.classList.remove(class_remove))
// }
//
// Array.prototype.forEach.call(document.getElementsByClassName('nav__link'), link=>link.onclick = () => {
//     HideNav('nav__link','show')
// })

window.onclick = (n) => {
    const nav = document.getElementById('nav__list')
    if (nav.classList.contains('show')){
        n.target.id !== 'nav__list' ? nav.classList.remove('show') : null
        n.target.id == 'nav__icon' ? nav.classList.toggle('show') : null
    }
}



// =============== OUR TEAM =================


const resize_height = (parent_id,child_id) =>{

    const under_team= document.getElementById(parent_id)
    const under_team_item_width= document.getElementById(child_id).offsetHeight

    if (window.screen.width < 583){
        under_team.style.height = `${under_team_item_width *1.8}px`
    }
    if(window.screen.width < 362){
        under_team.style.height = `${under_team_item_width *1.5}px`
    }
}

window.onresize = () => resize_height('under_team','item')
resize_height('under_team','item')

// =============== OUR TEAM =================