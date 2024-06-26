import React from 'react'
import styled from 'styled-components'

const PageWrapper = ({ children }) => {
  return (
    <PageWrapperStyled>
        {children}
    </PageWrapperStyled>
  )
}

const PageWrapperStyled = styled.div`
    width: 1280px;
    margin: 0 auto;
    padding: 0 70px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export default PageWrapper;