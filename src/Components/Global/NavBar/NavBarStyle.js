import styled from "styled-components";
import { Baidu } from "../../../styles/Icons";
export const Container = styled.div`
    z-index: 2;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.7);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
        display: none;
    }
`;
export const LogoBread = styled(Baidu)`
    position: absolute;
    top: 0;
    left: 20px;
    z-index: 1;
    width: 42px;
    height: 42px;
    color: #f0f8ff;
`;
export const List = styled.ul`
    width: 100%;
    max-width: min(600px, 50vw);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const Elements = styled.li`
    list-style: none;
    > a {
        display: block;

        padding: 12px 26px;

        letter-spacing: 1px;
        color: #ddd;
        text-decoration: none;
        transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
            color: #fff;
        }
    }
`;

// moile
export const HamburguerIcon = styled.div`
    z-index: 13;
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;

    margin: 10px 0 0 20px;


    @media (min-width: 768px) {
        display: none;
    }
    & > span {
        position: absolute;
        display: block;

        width: calc(100% - 10px);
        height: 2px;

        background-color: #222632;
        box-shadow: 0 0 10px  #f0f8ff;
        transition:  transform 400ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 400ms ease 300ms;

        &:nth-of-type(1) {
            transform: translate3d(0, 15px, 0);
        }
        &:nth-of-type(2) {
            transform: translate3d(0, 32px, 0);
        }
    }
    &.active > span {
        background-color: #f0f8ff;
        &:nth-of-type(1) {
            transform: translate3d(0, 25px, 0) rotate(-45deg);
        }
        &:nth-of-type(2) {
            transform: translate3d(0, 25px, 0) rotate(45deg);
        }

    }
    &.active ~ div{
        left: 0;
    }
`;
export const ContainerMobile = styled.div`
    z-index: 12;
    backdrop-filter: blur(9px);
    background-color: rgba(0, 0, 0, 0.7);
    display: block;
    position: absolute;
    top: 0;
    left: -400px;

    height: 100%;
    width: 100%;
    min-width: 200px;
    max-width: 300px;
    transition: left 400ms ease-in-out;
    &.active {
        left: 0;
    }
    @media (min-width: 768px) {
        display: none;
    }
`;
export const ListMobile = styled.ul`
    height: 100%;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const ElementsMobile = styled.li`
    list-style: none;
    &:first-child {
        > a {
            margin-top: 60px;
        }
    }
    > a {
        text-decoration: none;
        color: #f0f8ff;
        display: block;
        padding: 20px 30px;
    }
`;
