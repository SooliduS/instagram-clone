import type { FC } from 'react';

type IconElementProps = {
    icon: string;
    size?: 'medium' | 'large' | 'small';
    className?: string;
    onClick?: () => void;
};
const IconElement: FC<IconElementProps> = ({
    icon,
    size,
    className,
    onClick,
}) => {
    return (
        <img
            onClick={onClick}
            src={icon}
            className={`${
                size === 'small'
                    ? 'size-3.5'
                    : size === 'medium'
                    ? 'size-6'
                    : size === 'large'
                    ? 'size-7'
                    : 'size-6'
            } ${className} `}
        />
    );
};

export default IconElement;
