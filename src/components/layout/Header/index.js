import React from 'react'
import {HeaderStyled} from '../../../../public/styles/custom/components/layout/header'
import LocaleSwitcher from "./../../global/language-switcher";

export default function Header() {
  return (
    <>
    <HeaderStyled> 
      Header Styled
    </HeaderStyled>
      <LocaleSwitcher/>
    </>
  )
}
