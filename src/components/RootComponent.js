import styled from 'styled-components';
import Details from './Details';
import Footer from './Footer';
import FreeProducts from './FreeProducts';
import Header from './Header';
import Slogan from './Slogan';

const RootWrapper = styled.div`
    height: 100%;
    width: 100%;
`


export default function RootComponent(){
    return(
        <RootWrapper>
            <Header/>
            <Slogan/>
            <Details/>
            <FreeProducts/>
            <Footer/>
        </RootWrapper>
    )
}