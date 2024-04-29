import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = React.memo((): JSX.Element => {
  return (
    <div>
     <nav>
      <ul>
        <li><NavLink to={'/'}>Users</NavLink></li>
        <li><NavLink to={'/addUser'}>Add Users</NavLink></li>
    
      </ul>
     </nav>
    </div>
  );
});
