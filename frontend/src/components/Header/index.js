import { HeaderBgContainer, HeaderTitle, LinkItem, LinksContainer, LogoutButton } from "./styledComponents"
import { Link } from "react-router-dom"
import Cookies from 'js-cookie'

const Header = () => {
    const onClickLogout = () => {
        Cookies.remove('userDetails')
        window.location.reload()
    }

    return (
        <HeaderBgContainer>
            <HeaderTitle>Task-Management</HeaderTitle>
            <LinksContainer>
                <LinkItem>Home</LinkItem>
                
                <Link to='/addtask' target="_blank" style={{textDecoration: 'none'}}>
                    <LinkItem>Add Task</LinkItem>
                </Link>
                
            </LinksContainer>
            <LogoutButton type="button" onClick={onClickLogout}>Logout</LogoutButton>
        </HeaderBgContainer>
    )
}

export default Header