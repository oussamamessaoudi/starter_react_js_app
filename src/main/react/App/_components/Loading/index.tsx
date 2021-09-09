import React from "react";
import styled from "styled-components";



export function Loading() {
    return(<Container><h3> Loading... </h3></Container>)
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: available;
`
