// import styled from 'styled-components';

// export const LeftSection = styled.div`
//   width: 100%;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     width: 80%;
//     display: flex;
//     flex-direction: column;

//     margin: 0 auto;
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     width: 100%;
//     display: flex;
//     flex-direction: column;

//     margin: 0 auto;
//   }
// `;



// mew code
import styled from 'styled-components';

export const LeftSection = styled.div`
  flex: 1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const ProfileImage = styled.img`
  width: 280px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
`;





