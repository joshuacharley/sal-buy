const INITIAL_STATE = {
    sections: [
        {
          title: 'Mobile Phones',
          imageUrl: 'https://i.ibb.co/DRHrt32/mobile.jpg',
          id: 1,
          linkUrl: 'shop/mobilephones'
        },
        {
          title: 'Electronics gadjets',
          imageUrl: 'https://i.ibb.co/yVdpfzj/electronicgadget.jpg',
          id: 2,
          linkUrl: 'shop/electronicsgadjects'
        },
        {
          title: 'Computers',
          imageUrl: 'https://i.ibb.co/tmdbDWD/computers.jpg',
          id: 3,
          linkUrl: 'shop/computers'
        },
        {
          title: 'Home Appliances',
          imageUrl: 'https://i.ibb.co/CMRyYGg/homeapplicances.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/homeappliances'
        },
        {
          title: 'Tv',
          imageUrl: 'https://i.ibb.co/4PZ0YjR/tv.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/tv'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;