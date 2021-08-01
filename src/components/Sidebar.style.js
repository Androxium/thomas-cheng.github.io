import styled from 'styled-components';

export const SidebarContainer = styled.div`
    position: fixed;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 25vw;
    background-color: aquamarine;
    
`;

export const HeadshotPhotoContainer = styled.img`
    border-radius: 100%;
    height: 250px;
    width: 250px;
    object-fit: cover;
    margin-top: 75px;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
`;

export const SectionLink = styled.a`
    margin: 10px 0;
    font-size: 18px;
    line-height: 24px;
`;