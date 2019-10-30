import React from 'react';
import { INavLink } from '..';
import './index.scss';
interface IProps {
    navLinks: INavLink[];
    handleNavTo: (route: string) => void;
}
declare const SideNav: React.FC<IProps>;
export { SideNav };
