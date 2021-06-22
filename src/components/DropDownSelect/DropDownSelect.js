import React from "react"
import styled from "styled-components"

const Select = styled.select`
color:gray;
border: none;
outline:none;

option {
    padding:20px 0;
    vertical-align:middle;
}
`

let DropDownSelect = ({ productId, childId, arrayList, itemChange }) => {
    return (
        <div>
            <Select value={childId} onChange={(e) => itemChange(productId, e.target.value)} >
                {arrayList.map((option, index) => {
                    return <option key={index} value={option.id} >{option.name}</option>
                })
                }
            </Select>
        </div>
    )
}

export default DropDownSelect