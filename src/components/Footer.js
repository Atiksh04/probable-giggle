import styled  from "styled-components";
import Logo from '../assets/images/logo.svg';
import FlagIcon from '../assets/images/flag.svg';

const Wrapper = styled.div`
    height: auto;
    padding: 2em 11.5em 0.5em;
    width: calc(100% - 23em);
    background-color: #1A181E;
`
const InLineContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`
const BrandingLogo = styled.img`
    height: 2.5em;
    margin: 1.75em 2em 0 0;
`
const ElementWrapper = styled.div`
    height: 100%;
    margin-bottom: 1.5em;
`
const Element = styled.div`
    margin: 2em 0;
    color: #fff;
    font-family: Galano-Regular;
    font-size: 1em;
    cursor: pointer;
    display: flex;
`
const JobCount = styled.div`
    color: #1A181E;
    background-color: #fff;
    width: 1.25em;
    border-radius: 50%;
    font-family: Galano-Medium;
    text-align: center;
    font-size: 0.875em;
    margin-left: 0.25em;
`
const Seprator = styled.div`
    width: 100%;
    border-bottom: 2px solid rgba(217, 217, 217, 0.2);
`
const CopyRightText = styled.div`
    font-family: Galano-Regular;
    font-size: 0.875em;
    color: #fff;
    margin: 1.5em 0;
`
const Flag = styled.img`
    height: 1em;
    vertical-align: middle;
`
export default function Footer(){
    return(
        <Wrapper>   
            <InLineContainer>
            <div>
                <BrandingLogo src={Logo} alt="dukaan"/>
            </div>
            <ElementWrapper>
                <Element>
                    Contact
                </Element>
                <Element>
                    FAQ's
                </Element>
            </ElementWrapper>
            <ElementWrapper>
                <Element>
                    Tutorials
                </Element>
                <Element>
                    Blog
                </Element>
            </ElementWrapper>
            <ElementWrapper>
                <Element>
                    Privacy
                </Element>
                <Element>
                    Banned Items
                </Element>
            </ElementWrapper>
            <ElementWrapper>
                <Element>
                    About
                </Element>
                <Element>
                    Jobs 
                    <JobCount>3</JobCount>
                </Element>
            </ElementWrapper>
            <ElementWrapper>
                <Element>
                    Facebook
                </Element>
                <Element>
                   Twitter
                </Element>
                <Element>
                    Linkedin
                </Element>
            </ElementWrapper>
            </InLineContainer>
            <Seprator/>
            <InLineContainer>
                <CopyRightText>Dukaan 2020, All rights reserved.</CopyRightText>
                <CopyRightText>Made in <Flag src={FlagIcon} alt="flag"/></CopyRightText>
            </InLineContainer>
        </Wrapper>
    )
}