import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scroll-menu';
import { Navigate } from "react-router-dom";
import './mid.css';

// list of items
const list = [
  { name: '29th June 2022' },
  { name: '30th June 2022' },
  { name: '01st July 2022' },
  { name: '02nd July 2022' },
  { name: '03rd July 2022' },
  { name: '04th July 2022' },
  { name: '05th July 2022' },
  { name: '06th July 2022' },
  { name: '07th July 2022' },
  { name: '08th July 2022' },
  { name: '09th July 2022' },
  { name: '10th July 2022' },
  { name: '11th July 2022' },
  { name: '12th July 2022' },
  { name: '13th July 2022' },
  { name: '14th July 2022' },

];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
  >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = '9th July';

export class Mid extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  state = { redirect: null };

  onSelect = key => {
    console.log('fo')
    this.setState({ selected: key });
    this.setState({ redirect: '/details/' + key })
  }


  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div style={{ "margin": '8vh 0 2vh 0', boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", borderRadius: "20px" }}>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}