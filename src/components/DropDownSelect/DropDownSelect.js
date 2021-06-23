import React from "react"
import styled from "styled-components"

const Select = styled.select`
border: none;
outline:none;

option {

background: #F1F2F2;
border: 1px solid #CCCCCC;
box-sizing: border-box;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
border-radius: 7px;
}
`


let DropDownSelect = ({ productId, childId, arrayList, itemChange }) => {
    return (

        <div>
            <Select value={childId} onChange={(e) => itemChange(productId, e.target.value)} >
                {arrayList.map((option, index) => {
                    // if (option.id === Number(childId)) {
                    //     return <option key={index} value={option.id}>
                    //         &#10003;&nbsp;{option.name}
                    //     </option>
                    // }

                    // return <option key={index} value={option.id}>
                    //     &nbsp;&nbsp;&nbsp;&nbsp;{option.name}
                    // </option>

                    return <option key={index} value={option.id}>{option.name}</option>
                })
                }
            </Select>
        </div>
    )
}


export default DropDownSelect