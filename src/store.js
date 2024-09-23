import { reactive } from 'vue';

export const store = reactive({
      navLinks: [
        {
            label: 'Home',
            url: '#',
            active: true
        },
        {
            label: 'About Us',
            url: '#',
            active: false
        },
        {
            label: 'Facilities',
            url: '#',
            active: false
        },
        {
            label: 'Membership',
            url: '#',
            active: false
        },
        {
            label: 'Testimonials',
            url: '#',
            active: false
        },
        {
            label: 'Blog',
            url: '#',
            active: false
        }
      ],
      cardInfo: [
        {
            image: '/images/review_1-compressor.jpg',
            quote: '"The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could or hoped for. I love it!"',
            memberName: 'Tara Smith'
        },
        {
            image: '/images/review_2-compressor.jpg',
            quote: '"The atmosphere at Avada Gym is amazing, the people are even better. Al in all, it\' a great place to workout."',
            memberName: 'Simon Chel'
        },
        {
            image: '/images/review_3-compressor-2.jpg',
            quote: '"The facilities at Avada Gym stood out to me the most. They are well mantained and have high quality equipment."',
            memberName: 'Jen Wirth'
        },
        {
            image: '/images/review_4-compressor-2.jpg',
            quote: '"No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their costumers"',
            memberName: 'Jeff Glum'
        },
      ],
      facilitiesPhotos: [
        '/images/home-image1.jpg',
        '/images/home-image2.jpg',
        '/images/home-image3.jpg',
        '/images/home-image4.jpg',
        '/images/home-image5.jpg',
        '/images/home-image6.jpg'
      ],
      trainerInfo: [
        {
            image: '/images/trainer1-400x297.jpg',
            trainerName: 'Ann Baker',
            job: 'Personal Trainer'
        },
        {
            image: '/images/trainer3-400x297.jpg',
            trainerName: 'Anne Warren',
            job: 'Personal Trainer'
        },
        {
            image: '/images/trainer4-400x297.jpg',
            trainerName: 'Peter Rice',
            job: 'Personal Trainer'
        }
      ],
      logoImg: '/images/gym_logo_1x.png',
      formImg: '/images/home_img-compressor-400x222.jpg',
      userName: '',
      userMail: '',
      doubleDivider: '/images/divider-xx-red.png',
      singleDivider: '/images/divider-x-red.png',
      doubleDividerWhite: '/images/divider-xx.png',

});