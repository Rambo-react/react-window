import styled from "styled-components"


const HeaderTitle = styled.div`
// text-align:center;
// position: absolute;
width: 100%;
height: 54px;
background: linear-gradient(180deg, #387DC2 0%, #2B65B5 100%);

font-family: Helvetica;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
justify-content:center;

color: #FFFFFF;


`


let Title = (props) => {
    return <HeaderTitle>
        Products
    </HeaderTitle>
}

export default Title