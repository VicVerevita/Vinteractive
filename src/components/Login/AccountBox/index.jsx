import React from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
    width: 350px;
    min-height: 600px; 
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`
const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`

const BackDrop = styled.div`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 48%;
    transform: rotate(160deg);
    top: -290px;
    left: -70px;
    background: #19E8A6;
`

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 70px;
`

const HeaderText = styled.h2`
    text-align: right;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    margin: 0;
`

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    text-align: right;
    margin: 0;
    margin-top: 14px;
`

export default function AccountBox(props) {
    return(
    <BoxContainer>
        <TopContainer>
            <BackDrop />
            <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
        </TopContainer>
    </BoxContainer>
    )
}