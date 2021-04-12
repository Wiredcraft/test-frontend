import React, {useState, useMemo} from 'react';
import {Link} from 'react-router-dom';
import {iconsMap} from '../../common/icons'

export default function Header(props) {

  const [menuClassName, setMenuClassName] = useState('');
  const [itemsClassName, setItemsClassName] = useState('');

  const toggleNav = (e) => {
    // show or hide navbar items
    setMenuClassName(menuClassName ? '' : 'show-items');
    // do animation
    setItemsClassName(itemsClassName ? '' : 'scale-fade-animation');
    // show or hide scroll bar
    document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'scroll' : 'hidden';
  };

  const items = useMemo(() =>
      props.items.map((item, i) => {
        let html = item.html;
        if (html) {
          return html
        } else if (item.type === 'input') {
          html =
            <div className="search-input">
              {iconsMap[item.icon]}
              <input type="text" onChange={item.onChange}/>
            </div>
        } else if (item.type === 'link') {
          html = <Link to={item.to}>{item.text || iconsMap[item.icon]}</Link>
        }
        return (
          <li key={i} className={itemsClassName}>{html}</li>
        );
      }),
    [props.items, menuClassName, itemsClassName]);

  return (
    <div className="navbar">
      <h1></h1>

      <ul className={'items ' + menuClassName}>
        {items}
      </ul>

      <div className={'burger ' + menuClassName} onClick={toggleNav}>
        <div className="line1"/>
        <div className="line2"/>
        <div className="line3"/>
      </div>
    </div>
  )
}