import { ReactElement } from 'react';
export interface IButtonProps {
    children: ReactElement;
    theme?: 'small' | 'large' | 'big';
    size?: 'small' | 'large' | 'big';
}
