import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';

const Wrapper = styled.div`
    height: 15.5em;
    padding: 1.25em 11.5em 0;
    width: calc(100% - 23em);
    background-color: #146EB4;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`
const HeaderLogo = styled.img`
    height: 2.75em;
`
const CTAWrapper = styled.div`
    height: 3.125em;
    width: auto;
    display: flex;
    align-items: center;
`
const SignInCTA = styled.div`
    font-size: 1.125em;
    color: #fff;
    font-family: Galano-Regular;
    margin-right: 1.78em;
    cursor: pointer;
    user-select: none;
`
const PcCTA = styled.div`
    height: 100%;
    width: 9.75em;
    border-radius: 0.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #146EB4;
    font-size: 1.125em;
    font-family: Galano-Medium;
    cursor: pointer;
    user-select: none;
`
export default function Header(){
    return(
        <Wrapper>   
            <HeaderLogo src={Logo} alt="logo"/>
            <CTAWrapper>
                <SignInCTA>Sign In</SignInCTA>
                <PcCTA>Dukaan for PC</PcCTA>
            </CTAWrapper>
        </Wrapper>
    )
}