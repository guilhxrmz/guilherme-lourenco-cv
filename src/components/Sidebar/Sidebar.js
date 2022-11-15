import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { Education, Enterprise, Code, User, Email } from '@carbon/icons-react';
import { StyledSideNav, CustomSideNavItems } from './styles';

const items = [
  { name: 'Me', path: '/', icon: User },
  { name: 'Projects', path: '/projects', icon: Code },
  { name: 'Work', path: '/work', icon: Enterprise },
  { name: 'Education', path: '/education', icon: Education },
  { name: 'Contact', path: '/contact', icon: Email },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledSideNav expanded={false} isChildOfHeader={false} aria-label="Side navigation">
      <CustomSideNavItems>
        {items.map(i => (
          <SideNavLink
            renderIcon={i.icon}
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>
        ))}
      </CustomSideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;
