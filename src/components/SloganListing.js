import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 3.5em 0 0;
`
const Seprator = styled.div`
    width: 100%;
    border-bottom: 2px solid #D9D9D9;
`
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3em 0;
    height: 2em;
`
const InfoLabel = styled.div`
    color: #1A181E;
    font-size: 1.25em;
    font-family: Galano-Medium;
    height: 100%;
`
const DownloadCTA = styled.div`
    color: #146EB4;
    font-size: 1em;
    border: 2px solid #146EB4;
    border-radius: 0.2em;
    height: 100%;
    width: 8.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: Galano-Medium;
`
const ListingContainer = styled.div`
    margin-bottom: 4em;
`
const LisitingElementWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.25em 0;
`
const ListingElement = styled.div`
    width: 22em;
    height: 3em;
    border-radius: 0.4em;
    background-color: #F2F2F2;
    color: #000;
    padding: 0.5em;
    font-family: Galano-Regular;
    display: flex;
    align-items: center;
    cursor: pointer;
    line-height: 1.5;
`
const CopyElement = styled.div`
    background-color: #4D4D4D;
    padding: 0.5em 1em;
    color: #fff;
    border-radius: 0.4em;
    font-family: Galano-Medium;
    position: absolute;
    ${
        props => props.direction === "left" ? `left: ${props.value};` : `right: ${props.value};`
    }
`
const PaginationWrapper = styled.div`
    margin-top: 1.75em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const PaginationActionButtons = styled.div`
    color: #146EB4;
    font-size: 0.875em;
    font-family: Galano-Regular;
    width: 2.5em;
    user-select: none;
    cursor: pointer;
`
const PaginationNumberWrapper = styled.div`
    width: 10em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const PaginationNumberElement = styled.div`
    color: ${props => props.isSelected ? "#fff" : "#146EB4"};
    ${props => props.isSelected ? "background-color: #146EB4;" : ""};
    font-family: Galano-Regular;
    border-radius: 50%;
    font-size: 0.875em;
    text-align: center;
    width: 1.75em;
    padding: 0.25em 0;
    user-select: none;
    cursor: pointer;
`
export default function SloganListing(props){

    const dummyList = ['There is no Sore it will Not Heal, No cool it will not Subdue.', 'coziness building for tomorrow'];
    const maxPagelength = 5;

    const [showCopyPrompt, setShowCopyPrompt] = useState("");
    const [copyStatus, setCopyStatus] = useState("copy");
    const [selectedPage, setSelectedPage] = useState(0);

    const copyPrompt = (type) => {
        return(
            <CopyElement direction={type} value={copyStatus === "copy" ? "1em" : "3em"}>
                {copyStatus === "copy" ? "Click to copy" : "Copied!"} 
            </CopyElement>
        )
    }

    const listingElementClicked = (text) => {
        copyText(text);
        setCopyStatus("copied");
    }

    const removeCopyPrompt = () => {
        setCopyStatus("copy");
        setShowCopyPrompt("");
    }

    const copyText = (text) => {
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

    return(
        <Wrapper>
            <Seprator/>
            <InfoContainer>
                <InfoLabel>We have generated 1,023 slogans for “{props.keyword}”</InfoLabel>
                <DownloadCTA>Download all</DownloadCTA>
            </InfoContainer>
            <ListingContainer>
                {
                    new Array(9).fill(0).map((value, index)=>{
                        return(
                            <LisitingElementWrapper key={index}>
                                <ListingElement onClick={()=> listingElementClicked(dummyList[0])} onMouseEnter={()=> setShowCopyPrompt(index+"left")} onMouseLeave={removeCopyPrompt}>{dummyList[0]}</ListingElement>
                                <ListingElement onClick={()=> listingElementClicked(dummyList[1])} onMouseEnter={()=> setShowCopyPrompt(index+"right")} onMouseLeave={removeCopyPrompt}>{dummyList[1]}</ListingElement>
                                {
                                    showCopyPrompt === (index + "left") ?
                                        copyPrompt('left')
                                    : showCopyPrompt === (index + "right") ?
                                        copyPrompt('right')
                                    : null
                                }
                            
                            </LisitingElementWrapper>
                        )
                    })
                }
            </ListingContainer>
            <Seprator/>
            <PaginationWrapper>
                <PaginationActionButtons onClick={()=> selectedPage !== 0 && setSelectedPage(selectedPage - 1)}>{selectedPage !== 0 ? "Prev" : ""}</PaginationActionButtons> 
                <PaginationNumberWrapper>
                    {
                        new Array(maxPagelength).fill(0).map((value, index)=>(<PaginationNumberElement isSelected={ selectedPage === index} onClick={()=> setSelectedPage(index)} key={index}>{index + 1}</PaginationNumberElement>))
                    }
                </PaginationNumberWrapper>
                <PaginationActionButtons onClick={()=> selectedPage < maxPagelength && setSelectedPage(selectedPage + 1)}>{selectedPage < maxPagelength - 1 ? "Next" : ""}</PaginationActionButtons>
            </PaginationWrapper>
        </Wrapper>
    )
}