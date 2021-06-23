import styled from "styled-components"

const FieldNameStyled = styled.div`
font-family: Helvetica;
font-style: normal;
font-weight: bold;
font-size: 10px;
color: #AAAAAA;
`

const ListHeadersStyled = styled.div`
height: 35px;
display: flex;
justify-content: space-between;
align-items: center;
min-width:100%;  
margin:0;
padding:0; 
    div{
        &:nth-child(1) {
            flex-basis: 150px;
            padding-left: 30px;
        }
        &:nth-child(2) {
            flex-basis: 300px;
        }
        &:nth-child(3) {
            flex-basis: 200px;
        }
        &:nth-child(4) {
            flex-basis: 80px;
        }
        &:nth-child(5) {
            flex-basis: 200px;
        }
        &:nth-child(6) {
            flex-basis: 200px;
        }
    }
`

let FieldName = ({ child }) => {
    return <FieldNameStyled>{child}</FieldNameStyled>
}

let ListHeaders = () => {
    let headerNames = ["EAN/PLU", "NAME", "PRODUCER", "Size", "SHELF", "PRODUCT GROUP"]
    let fieldNames = headerNames.map((item) => <FieldName key={item} child={item} />)
    return <ListHeadersStyled>{fieldNames}</ListHeadersStyled>

}

export default ListHeaders