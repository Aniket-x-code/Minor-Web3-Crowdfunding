import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CusttomButton} from './CustomButton';
import { logo, menu, search,thirdweb } from '../assets';
import { navlinks } from '../constants';

const Navbar = () => {
const navigate = useNavigate();
const [ isActive , setisActive] = useState('dashboard');





  return (
    <div>Navbar Test </div>
  )
}

export default Navbar