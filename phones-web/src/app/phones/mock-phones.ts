import { Phone } from './phone'

export const PHONES: Phone[] = [
  {
    id: 1,
    brand: 'Apple',
    model: 'iPhone 7',
    color: 'White',
    price: 649,
    image: '/assets/images/iphone7-front-jetblk.png',
    description: `
      An entirely new camera system. The brightest, most colorful iPhone display ever.
      The fastest performance and best battery life in an iPhone. 
      Water and splash resistant. And stereo speakers. Every bit as powerful as it looks—this is iPhone 7.
      `
  },
  {
    id: 2,
    brand: 'Apple',
    model: 'iPhone 7 Plus',
    color: 'Matte Black',
    price: 769,
    image: '/assets/images/apple-iphone-7plus-matteblack-1-sx.jpg',
    description: `
      All-new dual 12MP cameras. 
      The brightest, most colorful iPhone display ever.
      The fastest performance and best battery life in an iPhone. 
      Water and splash resistant. And stereo speakers. Every bit as powerful as it looks—this is iPhone 7 Plus.
      `
  },
  {
    id: 3,
    brand: 'Samsung',
    model: 'Galaxy 8',
    color: 'Midnight Black',
    price: 750,
    image: '/assets/images/samsung-galaxy-s8-midnight-black-1-sx.jpg',
    description: `
      The new Galaxy S8 frees you to live every part of your life anywhere.
      Now, featuring DIGITS™—only from T-Mobile. With DIGITS, you can access up to 5 numbers on one device. 
      Or, use one number across multiple devices.
      Device purchase requires a SIM Starter Kit which will be added to your order automatically.
      `
  },
  {
    id: 4,
    brand: 'Samsung',
    model: 'Galaxy J3 Prime',
    color: 'Orchid Gray',
    price: 150,
    image: '/assets/images/samsung-galaxy-j3-prime-black-1-sx.jpg',
    description: `
      The smartphone that does everything you love and still fits your budget.
      Enjoy all your photos and videos on a vibrant 5.0" HD display and get to everything quickly
      with the streamlined layout of Easy Mode. 
      The Samsung Galaxy J3 Prime has everything you need to do exactly what you want.
      Stay connected with a great device, amazing display, and a brand you trust, all at an affordable price.
      `
  }
]
