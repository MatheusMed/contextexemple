import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../contexts/Context';



export function ShowData() {

  const { name, age } = useContext(Context);

  return (
    <div>
      Tela SHOWDATA {name}
      <br />
      <Link to="/" >Ir para signUp</Link>
    </div>);
}