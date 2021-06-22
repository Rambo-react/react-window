// import { useSelector } from "react-redux"

import styled from "styled-components"


const FieldNameStyled = styled.div`
font-family: Helvetica;
font-style: normal;
font-weight: bold;
font-size: 10px;
color: #AAAAAA;
`

const ListHeadersStyled = styled.div`
// height: 35px;
display: flex;
flex-wrap: nowrap;
justify-content: space-between;
// align-items: center;
min-width:100%;   
    div{
        
        &:nth-child(1) {
            flex-basis: 200px;
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
            flex-basis: 150px;
        }
        &:nth-child(6) {
            flex-basis: 150px;
        }
    }
`



let FieldName = ({ child }) => {
    return (  
            <FieldNameStyled>{child}</FieldNameStyled> 
    )
}



let ListHeaders = () => {

    let headerNames = ["EAN/PLU", "NAME", "PRODUCER", "Size", "SHELF", "PRODUCT GROUP"]
    let fieldNames = headerNames.map((item) => <FieldName child={item} />)

     return <ListHeadersStyled>
        {fieldNames}
    </ListHeadersStyled>  
    // //берем первый элемент что бы узнать какие вообще поля существуют
    // let obj = useSelector(state => state.products.products[0])

    // //Функция выбора полей для шапки
    // let sortHeaders = ( object, arrayOfFieldsNum ) => {
    //     let outArrayHeaders = []
    //     let arrayOfHeaders = []
    //     for (const key in object) {

    //         arrayOfHeaders.push(key)
    //     }

    //     arrayOfHeaders.filter((item,index) => {
    //         if (arrayOfFieldsNum.includes(index)) {outArrayHeaders.push(item)}
    //     })

    //     return outArrayHeaders
    // }

    //  let Headers = sortHeaders(obj, [1,2,3,4,6,5]).map((item)=>{
    //      <div>
    //         {item}
    //      </div>
    //  })
    

   
}

export default ListHeaders