import React, { FunctionComponent } from 'react';
import Profile from './Profiles';
import { Basics } from  '../types';

interface Props extends Basics {
  isLoading?: Boolean;
}

const Header: FunctionComponent<Props> = ({ website, name, profiles, isLoading = false }: Props) => (
  <header className={`App-header ${isLoading ? 'loading' : ''}`}>
    <h1><a href={website}>{name}</a></h1>
    <Profile profiles={profiles}></Profile>
  </header>
)

export default Header;