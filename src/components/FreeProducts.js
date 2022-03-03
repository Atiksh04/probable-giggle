import styled from 'styled-components';
import PrivacyLogo from '../assets/images/privacyGenerator.svg';
import TncLogo from '../assets/images/tncGenerator.svg';
import DomainLogo from '../assets/images/domainGenerator.svg';
import InvoiceLogo from '../assets/images/invoiceGenerator.svg';

const Wrapper = styled.div`
    height: auto;
    padding: 3.75em 11.5em 3em;
    width: calc(100% - 23em);
    background-color: #fff;
`
const HeadingLabel = styled.div`
    font-size: 2em;
    color: #1A181E;
    font-family: Galano-SemiBold;
    margin: 0 0 1.5em;
    text-align: left;
`
const ElementRowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3em;
`
const ElementWrapper = styled.div`
    width: 31%;
` 
const ElementImage = styled.img`
    height: 11.75em;
`
const ElementLabel = styled.div`
    color: #1A181E;
    font-family: Galano-Medium;
    font-size: 1.25em;
    margin: 1em 0 0.5em;
    text-align: left;
`
const ElementDesc = styled.div`
    color: #4D4D4D;
    font-family: Galano-Regular;
    font-size: 1em;
    text-align: left;
    line-height: 1.5;
`
export default function FreeProducts(){
    return(
        <Wrapper>
            <HeadingLabel>Try our other free products</HeadingLabel>
            <ElementRowContainer>
                <ElementWrapper>
                    <ElementImage src={PrivacyLogo} alt="privacy"/>
                    <ElementLabel>Privacy Policy Generator</ElementLabel>
                    <ElementDesc>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</ElementDesc>
                </ElementWrapper>
                <ElementWrapper>
                    <ElementImage src={TncLogo} alt="tnc"/>
                    <ElementLabel>Terms & Conditions Generator</ElementLabel>
                    <ElementDesc>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</ElementDesc>
                </ElementWrapper>
                <ElementWrapper>
                    <ElementImage src={DomainLogo} alt="domain"/>
                    <ElementLabel>Domain Name Generator</ElementLabel>
                    <ElementDesc>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</ElementDesc>
                </ElementWrapper>
            </ElementRowContainer>
            <ElementRowContainer>
                <ElementWrapper>
                    <ElementImage src={InvoiceLogo} alt="invoice"/>
                    <ElementLabel>Invoice Generator</ElementLabel>
                    <ElementDesc>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</ElementDesc>
                </ElementWrapper>
            </ElementRowContainer>
        </Wrapper>
    )
}