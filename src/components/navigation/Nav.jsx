import { useState } from 'react';
import { 
    NavContainer, 
    LeftContainer, 
    RightContainer, 
    NavInnerContainer, 
    NavExtendedContainer,
    NavLinkContainer,
    NavLink,
    OpenMenuButton,
    NavLinkExtended 
} from '../styles/NavStyles';

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <NavContainer extendNavbar={openNav}>
            <NavInnerContainer>
                <LeftContainer>
                    <NavLinkContainer>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/admin'>Admin</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                        <OpenMenuButton
                            onClick={() => {
                                setOpenNav((curr) => !curr);
                            }}
                        >
                            {openNav ? <>&#10005;</> : <> &#8801;</>}
                        </OpenMenuButton>
                    </NavLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <h2>Logo Here</h2>
                </RightContainer>
            </NavInnerContainer>
            {openNav && (
            <NavExtendedContainer>
                <NavLinkExtended to='/'>Home</NavLinkExtended>
                <NavLinkExtended to='/admin'>Admin</NavLinkExtended>
                <NavLinkExtended to='/login'>Login</NavLinkExtended>
                <NavLinkExtended to='/contact'>Contact</NavLinkExtended>
            </NavExtendedContainer>
            )}
        </NavContainer>
    );
};

export default Nav;