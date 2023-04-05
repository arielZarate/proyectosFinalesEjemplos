import React from 'react'
import {Link} from 'react-router-dom'

// styles
import {StyledNav, StyledLink} from '../Styles/StyledShelterDetails'

const ShelterDetailNav = ({id}) => {
  return (
    <StyledNav>
        <StyledLink to={`/shelters/${id}`}>Ver Todas las Mascotas</StyledLink>
        <StyledLink to={`/shelters/${id}/form`}>Quiero ser un hogar de Tránsito</StyledLink>
    </StyledNav>
  )
}


export default ShelterDetailNav