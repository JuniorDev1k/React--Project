import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const Pagelinks = [
  
      {id : 1 , href : '#home' , text : 'home'},
      {id : 2 ,href : '#about' , text : 'about'},
      {id : 3 , href : '#services' , text : 'services'},
      {id : 4 ,href : '#tours' , text : 'tours'}



]


export const SocialLinks = [
    { id : 1 , href :"https://www.twitter.com" ,  icon : "fab fa-twitter" },
    { id : 2 , href :"https://www.instagram.com" ,  icon : "fab fa-instagram" },
    { id : 3 , href :"https://www.facebook.com" ,  icon : "fab fa-facebook" }
     
]




export const services = [
    { id : 1 ,icon :'fas fa-tree fa-fw' , title : 'endless hiking' , p : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
    {id : 2 , icon : 'fas fa-socks fa-fw' , title : 'amazing comfort', p: 'comfort for real wealthy subjet amazing comfort async'},
    {id : 3 , icon : 'fas fa-wallet fa-fw', title : 'saving money',  p: 'wallet starm can be as so hard as u conver your money to papaytl' }
]


export const tours =[
{id: 1, img: tour1, date : 'august 26th, 2020' , title : 'Tibet Adventure',
p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatm maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
location : 'china', price : 'from $5000', duration : '13 days'},

{id: 2, img: tour2, date : 'september 14th, 2020' , title : 'Tibet Adventure',
p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatm maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
location : 'korea', price : 'from $12000', duration : '2 months'},

{id: 3, img: tour3 , date : 'april 20th, 2019' , title : 'Tibet Adventure',
p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatm maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
location : 'china', price : 'from $4000', duration : '10 days'},

{id: 4, img: tour4 , date : 'february 1st, 2022' , title : 'Tibet Adventure',
p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatm maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
location : 'canada', price : 'from $5300', duration : '8 days'}


        
]