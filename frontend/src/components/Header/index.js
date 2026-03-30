import { HeaderBgContainer, HeaderTitle, LinkItem, LinksContainer, LogoutButton } from "./styledComponents"
import { Link } from "react-router-dom"

const Header = () => {
    const onClickLogout = () => {}

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