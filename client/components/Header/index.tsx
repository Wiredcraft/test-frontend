import React from 'react';
import './index.less';

interface IProps {
  children: JSX.Element[]
}

export default function Header ({ children }: IProps): React.ReactElement {
  return (
    <div className="header" aria-label="header">
      {children}
    </div>
  )
};
