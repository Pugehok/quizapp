import s from './Header.module.scss';
import { useState } from 'react';
export const Header = () => {
  const [isCreated, setIsCreated] = useState(false);

  const createHandler = () => {
    setIsCreated(!isCreated);
  };
  return (
    <header>
      <ul className={s.header__nav}>
        <li>
          <span onClick={() => createHandler()}>Создать Квиз</span>
        </li>
      </ul>
    </header>
  );
};
