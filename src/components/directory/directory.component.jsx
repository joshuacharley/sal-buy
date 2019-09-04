import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Mobile Phones',
          imageUrl: 'https://i.ibb.co/DRHrt32/mobile.jpg',
          id: 1
        },
        {
          title: 'Electronics gadjets',
          imageUrl: 'https://i.ibb.co/yVdpfzj/electronicgadget.jpg',
          id: 2
        },
        {
          title: 'Computers',
          imageUrl: 'https://i.ibb.co/tmdbDWD/computers.jpg',
          id: 3
        },
        {
          title: 'Home Appliances',
          imageUrl: 'https://i.ibb.co/CMRyYGg/homeapplicances.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'Tv',
          imageUrl: 'https://i.ibb.co/4PZ0YjR/tv.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;