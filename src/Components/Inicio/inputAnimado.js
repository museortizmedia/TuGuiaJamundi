import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import React, {useState, useEffect} from "react";
import {Form, Button} from 'react-bootstrap'

export const AnimatedInput = ({placeholder_animado}) => {

    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [placeholder, setPlaceholder] = useState("");
    

    useEffect(() => {
        const intr = setInterval(() => {
            setPlaceholder(placeholder + [...placeholder_animado[placeholderIndex].split(''),''][charIndex]);
            
            if (charIndex + 1 >= [...placeholder_animado[placeholderIndex].split(''),''].length) {
                setCharIndex(0)
                setPlaceholder('');
                if (placeholderIndex + 1 >= placeholder_animado.length) {
                    setPlaceholderIndex(0)
                } else {
                    setPlaceholderIndex(placeholderIndex + 1)
                }
            } else {
                setCharIndex(charIndex + 1)
            }

        }, 250);
        return () => {
            clearInterval(intr)
        }
    },);

    //version de solo frases
    /*useEffect(() => {
        const intr = setInterval(() => {
            setPlaceholder(placeholder_animado[placeholderIndex]);
            if (placeholderIndex + 1 >= placeholder_animado.length) {
                setPlaceholderIndex(0)
            } else {
                setPlaceholderIndex(placeholderIndex + 1)
            }
        }, 2500);
        return () => {
            clearInterval(intr)
        }
    },);*/

    let navigate = useNavigate();

    const Buscar = () => {
        navigate("/mapa?filtro="+document.getElementById('search').value);
    }

    const SetPlaceholder = () =>{
        if(document.getElementById('search').placeholder===placeholder_animado[placeholderIndex])
        {
            document.getElementById('search').value=placeholder_animado[placeholderIndex]
        }
    }

    return <><Form.Control id="search" style={{borderRadius:"30px 0px 0px 30px"}} placeholder={placeholder} autoComplete="off" onFocus={SetPlaceholder}/><Button style={{borderRadius:"0px 30px 30px 0px"}} variant="warning" className='text-white' onClick={Buscar}><FaSearch/></Button></>
};

export default AnimatedInput;