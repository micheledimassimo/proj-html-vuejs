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
      logoImg: '/images/gym_logo_1x.png',
      formImg: '/images/home_img-compressor-400x222.jpg',
      userName: '',
      userMail: ''
});