import { useRef } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import filter from "../../../images/filter.svg"
import { searchProducts } from "../../../redux/filter-reducer"


const FilterWrapper = styled.div`
background: #60A5EA;
padding: 6px 5px 7px;
display: flex;
`

const FilterInput = styled.input`
margin: 0;
padding: 0;
flex: 1;
height: 32px;

border-radius: 4px;
border:none;

background: url(${filter}) no-repeat;
background-position: 10px;

padding-left:37px;
background-color: #FFFFFF;

font-family: Helvetica;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;

outline:none;
}
`

let Filter = (props) => {

    const inputRef = useRef();
    const dispatch = useDispatch()

    let findProducts = () => {
        dispatch(searchProducts(inputRef.current.value))
    }

    return (
        <FilterWrapper>
            <FilterInput ref={inputRef} placeholder="Filter by name" onChange={findProducts} />
        </FilterWrapper>
    )

}

export default Filter