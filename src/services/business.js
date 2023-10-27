import { TrophyIcon } from '@heroicons/react/20/solid'

export const business = {
  title: 'Lorem Ipsum',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae venenatis leo. Sed fermentum vestibulum justo, non lacinia nunc imperdiet at. Morbi et egestas tortor. Vivamus euismod purus nec ligula hendrerit, at fermentum neque malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nulla facilisi.',
  keywords:
    'lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, vestibulum, praesent, morbi',
  author: 'Lorem Ipsum - Dolor Sit Amet',
  email: 'lorem@ipsum.com',
  image: '',
  url: '',
  businessName: 'Lorem Ipsum',
  address: {
    streetAddress: '123 Ipsum St.',
    addressLocality: 'Dolor City',
    addressRegion: 'Lorem Region',
    postalCode: '12345',
    addressCountry: 'Elitland',
  },
  phone: '1234567890',
  geo: {
    latitude: '12.345678',
    longitude: '98.765432',
  },
  openingHours: "",
  socialLinks: ["https://www.instagram.com/loremipsum/",""],
  testimonials: [
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed lacinia urna, eget imperdiet mauris. Morbi a ante ac lacus fringilla tincidunt at eu nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      rating: 5,
      author: {
        name: 'John Doe',
      },
    },
    {
      body: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      rating: 5,
      author: {
        name: 'Jane Smith',
      },
    },
    {
      body: 'Vivamus euismod purus nec ligula hendrerit, at fermentum neque malesuada. Curabitur vel dui eu augue cursus luctus a non risus. Sed nec sapien quis turpis facilisis congue. Etiam ac neque eu lorem volutpat rhoncus. Maecenas tincidunt, orci ut efficitur eleifend, urna ligula molestie ex, ac porttitor diam urna at lacus.',
      rating: 5,
      author: {
        name: 'James Bond',
      },
    },
    {
      body: 'Sed fermentum vestibulum justo, non lacinia nunc imperdiet at. Nullam a est elit. Integer id mauris nec orci efficitur bibendum non a magna. Vivamus in mollis purus. In vulputate, magna eget vehicula finibus, odio metus ultricies dolor, ac sollicitudin elit orci a dui.',
      rating: 5,
      author: {
        name: 'Lucy Heartfilia',
      },
    },
  ],
  features: [
    {
      name: 'Lorem Feature 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et egestas tortor.',
      icon: TrophyIcon,
    },
    {
      name: 'Lorem Feature 2',
      description:
        'Vivamus euismod purus nec ligula hendrerit, at fermentum neque malesuada.',
      icon: TrophyIcon,
    },
    {
      name: 'Lorem Feature 3',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
      icon: TrophyIcon,
    },
  ],
  images: [
    {
      src: 'https://www.example.com/image1.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      src: 'https://www.example.com/image2.jpeg',
      description: 'Praesent vitae venenatis leo',
    },
    {
      src: 'https://www.example.com/image3.jpeg',
      description: 'Morbi et egestas tortor',
    },
    {
      src: 'https://www.example.com/image4.jpeg',
      description: 'Sed fermentum vestibulum justo',
    },
    {
      src: 'https://www.example.com/image5.jpeg',
      description: 'Vivamus euismod purus nec ligula hendrerit',
    },
    {
      src: 'https://www.example.com/image6.jpeg',
      description: 'Vestibulum ante ipsum primis in faucibus',
    }
  ],
  faqs: [
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Consectetur adipiscing elit. Vivamus euismod purus nec ligula hendrerit.',
    },
    {
      question: 'Praesent vitae venenatis leo?',
      answer:
        'Morbi et egestas tortor. Sed fermentum vestibulum justo.',
    },
    {
      question: 'Vivamus euismod purus nec ligula?',
      answer:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
    },
    {
      question: 'Sed fermentum vestibulum justo?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et egestas tortor.',
    },
    {
      question: 'Morbi et egestas tortor?',
      answer:
        'Vivamus euismod purus nec ligula hendrerit, at fermentum neque malesuada.',
    },
  ],
  placeId: 'LoremIpsumPlaceId12345',
}


/*
{
  title: "John's Pizza Palace",
  description: 'The best pizza in town. Fresh ingredients and classic recipes.',
  keywords: 'pizza, Italian cuisine, fast food, restaurant',
  author: 'John Doe',
  email:'contact@fluxsales.co',
  image: 'https://example.com/images/pizza.jpg',
  url: 'https://johnspizzapalace.com',
  businessName: "John's Pizza Palace",
  address: {
    streetAddress: '123 Main St',
    addressLocality: 'Springfield',
    addressRegion: 'IL',
    postalCode: '62701',
    addressCountry: 'USA',
  },
  phone: '4611166531',
  geo: {
    latitude: '39.7817',
    longitude: '89.6501',
  },
  openingHours: 'Mo,Tu,We,Th,Fr 09:00-17:00',
  socialLinks: [
    'https://facebook.com/johnspizzapalace',
    'https://twitter.com/johnspizza',
  ],
  testimonials : [{
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    rating:5,
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }],
  features:[
    {
      name: 'Push to deploy',
      description:
        'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
      icon: TrophyIcon,
    },
    {
      name: 'SSL certificates',
      description:
        'Pellentesque enim a commodProductoso malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
      icon: TrophyIcon,
    },
    {
      name: 'Simple queues',
      description:
        'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
      icon: TrophyIcon,
    },
  ]
}
*/
