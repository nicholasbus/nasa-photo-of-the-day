import React from "react";
import styled from "styled-components";

// styled component for wrapper div
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export default (props) => {
  const { data } = props;

  return (
    <Div>
      <div>
        <h1>
          {data.title}{" "}
          <span role='img' aria-label='rocket'>
            🚀
          </span>
        </h1>
        <h4>{data.date}</h4>
        <h4>{data.copyright}</h4>
      </div>
      <p>{data.explanation}</p>
    </Div>
  );
};
