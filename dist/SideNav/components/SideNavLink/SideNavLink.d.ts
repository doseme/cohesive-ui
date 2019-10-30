import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './index.scss';
interface IProps {
    handleNavigateTo: () => void;
    label: string;
    route: string;
    faIcon: IconProp;
}
declare const SideNavLink: React.FC<IProps>;
export { SideNavLink };
