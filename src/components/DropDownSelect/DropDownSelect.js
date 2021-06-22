import React, { useEffect } from "react"
import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"




let DropDownSelect = ({productId, childId, arrayList, ...props }) => {
    
    const dispatch = useDispatch
    const Select = styled.select`
    color:gray;
    border: none;
    
    option {
        // color:yellow;
        // position:relative;
        padding:20px 0;
        vertical-align:middle;
        
    }
    option::before {
        // content: "+++";
        // margin-right: 8px;
    } 

    
    `

    let changeValue = (e, productId) => {
        //переделать под диспатч
        dispatch(props.itemChange(productId, e.target.value))

        //  setValue(e.target.value)
    }

    //  let [selectedValue, setValue] = useState(childId)
   
   
    //ФЛАГ ОТКРЫТ/ЗАКРЫТ СПИСОК
    // let [isOpened, setIsOpened] = useState(false)
    //ПЕРЕКЛЮЧАТЕЛЬ
//item.id
    // let toggleIsOpened =useCallback( () => {setIsOpened(!isOpened)}, [setIsOpened])

    // console.log(isOpened)

    return (
        <div>
            <Select value={childId} onChange={changeValue} >

                {arrayList.map((option, index) => {
                    if (option.id === childId) {
                        return <option key={index} value={option.id}>{option.name}</option>
                    } else {
                        return <option key={index} value={option.id}>{option.name}</option>
                    }
                })

                }
            </Select>
        </div>
    )
}

export default DropDownSelect