import React from 'react'

export default function NavBar(){
    const navItems = ["Who We Are","Our Events","More"]
    const dropDown = {
        "Who We Are": ["About Us","Location"],
        "Our Events": [],
        "More": [],
    }
    const links = ["#"]
    return (
        <nav className='navbar'>
            <ul className='navbar-elements'>
                <NavItem name={navItems[0]} href={links[0]} dropDown={dropDown}/>
                <NavItem name={navItems[1]} href={links[0]} dropDown={dropDown}/>
                <NavItem name={navItems[2]} href={links[0]} dropDown={dropDown}/>
            </ul>
        </nav>
    )
}

function NavItem({href, name, dropDown}){
    return(
        <li>
            <a href={href} className='navbar-item'> {name}</a>
            {<Dropdownmenu dropDown={dropDown[name]}/>}
        </li>
    )
}

function Dropdownmenu({dropDown}){
    return (
        <div className='dropdown'>
            {Array.isArray(dropDown) ? dropDown.map((item,index)=>{return (<div key={index}><a className='dropdown-items'>{item}</a></div>)}) : null}
        </div>
    )
}
