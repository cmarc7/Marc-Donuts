const NavItem = ({ texto, href })=>(
        <li className='nav-item'>
            <a href={href}>{texto}</a>
        </li>
    );

export default NavItem;