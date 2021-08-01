import { SidebarContainer, HeadshotPhotoContainer, LinksContainer, SectionLink } from './Sidebar.style'
import headshot from '../assets/headshot.jpg'

const Sidebar = () => {
    return <SidebarContainer>
        <HeadshotPhotoContainer src={headshot}/>
        <LinksContainer>
            <SectionLink >Home</SectionLink>
            <SectionLink >About</SectionLink>
            <SectionLink >Experience</SectionLink>
            <SectionLink >Projects</SectionLink>
            <SectionLink >Contact</SectionLink> 
        </LinksContainer>
    </SidebarContainer>;
}

export default Sidebar;