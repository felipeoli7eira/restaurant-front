import styled from "styled-components";

export const Aside = styled.aside`
  &[data-open=true] {
    width: fit-content;
  }

  &[data-open=false] {
    width: 4.3rem;
  }

  ul {
    li {
      img {
        width: 2.4rem;
        height: 2.4rem;
      }

      a {
        &:hover {
          background-color: #e53b31;
        }

        &.active {
          &::before {
            content: '';
            position: absolute;
            width: 4px;
            height: 100%;
            left: 0;
            background-color: ${({theme}) => theme.colors.yellow};
            border-radius: 10px;
          }

          color: ${({theme}) => theme.colors.yellow};
        }
      }
    }
  }

  @media (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100% !important;
    height: 5rem;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 !important;

    .menu-hamburger-container {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        margin: 0 !important;
        flex-direction: row !important;
        align-items: center;

        li a {
          padding: 0 !important;
          &.active {
            &::before {
              display: none;
            }
          }

          span {
            display: none;
          }
        }
      }
    }
  }
`
