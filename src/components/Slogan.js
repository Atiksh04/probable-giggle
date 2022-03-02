import { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../assets/images/close.svg';
import SloganListing from './SloganListing';

const Wrapper = styled.div`
    height: auto;
    width: 100%;
    background-color: #FAFAFA;
`
const SloganContainer = styled.div`
    height: ${props => props.isListing ? "auto" : "32.25em"};
    width: calc(100% - 23em);
    background-color: #fff;
    border-radius: 0.4em;
    margin: auto;
    position: relative;
    top: -8.375em;
    right: 0;
    left: 0;
    box-shadow: 0px 2px 8px rgba(26, 24, 30, 0.06);
`
const SloganContentContainer = styled.div`
    padding: 4em 10em;
`
const SloganHeader = styled.div`
    font-size: 2.125em;
    font-family: Galano-SemiBold;
    color: #1A181E;
    text-align: left;
`
const SloganDescription = styled.div`
    font-size: 1.25em;
    font-family: Galano-Regular;
    line-height: 1.5;
    margin-top: 0.95em;
    color: #4D4D4D;
`
const SloganInputWrapper = styled.div`
    margin: 3.5em 0 3.5em 0;
`
const SloganInputLabel = styled.div`
    font-size: 1em;
    font-family: Galano-Medium;
    color: #4D4D4D;
    margin-bottom: 0.75em;
`
const SloganInput = styled.input`
    border: 1px solid #D9D9D9;
    outline: none;
    height: 3em;
    width: 22.125em;
    padding: 0 2.5em 0 1em;
    font-family: Galano-Regular;
    color: #1A181E;
    border-radius: 0.4em;
`
const SloganInputCloseIcon = styled.img`
    height: 0.75em;
    position: relative;
    right: 1.5em;
    cursor: pointer;
`
const SloganGenerateCTA = styled.div`
    background-color: #146EB4;
    height: 2.75em;
    width: 12.275em;
    border-radius: 0.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.125em;
    font-family: Galano-Medium;
    opacity: ${props => props.isActive ? "1" : "0.5"};
    cursor: pointer;
    user-select: none;
`
export default function Slogan(){

    const [sloganText, setSloganText] = useState("");
    const [generateClicked, setGenerateClicked] = useState(false);

    const generateCTAClicked = () => {
        if(sloganText.length > 0)
            setGenerateClicked(true);
    }

    const closeClicked = () => {
        setSloganText("");
        setGenerateClicked(false);
    }

    const inputChanged = (value) => {
        if(value.length === 0)
            setGenerateClicked(false);
        
        setSloganText(value);
    }

    return(
        <Wrapper>
            <SloganContainer isListing={generateClicked}>
                <SloganContentContainer>
                    <SloganHeader>Free slogan maker</SloganHeader>
                    <SloganDescription>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</SloganDescription>
                    <SloganInputWrapper>
                        <SloganInputLabel>Word for your slogan</SloganInputLabel>
                        <SloganInput type="text" value={sloganText} onChange={(e)=> inputChanged(e.target.value)} placeholder="Enter a word"/>
                        {
                            sloganText.length > 0 ? <SloganInputCloseIcon src={CloseIcon} alt="close_icon" onClick={closeClicked}/> : null
                        }
                    </SloganInputWrapper>
                    <SloganGenerateCTA isActive={sloganText.length > 0} onClick={generateCTAClicked}>Generate slogans</SloganGenerateCTA>
                    {
                        generateClicked ?
                            <SloganListing keyword={sloganText}/>
                            : null
                    }
                </SloganContentContainer>
            </SloganContainer>
        </Wrapper>
    )
}