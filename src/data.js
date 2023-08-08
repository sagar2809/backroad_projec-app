import image_tour1 from "./images/tour-1.jpeg";
import image_tour2 from "./images/tour-2.jpeg";
import image_tour3 from "./images/tour-3.jpeg";
import image_tour4 from "./images/tour-4.jpeg";
export const pageLink = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Service" },
  { id: 4, href: "#tours", text: "Tours" },
];
export const socialLink = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
  },
];
export const tourData = [
  {
    id: 1,
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: image_tour1,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    location: "china",
    duration: 6,
    price: 280,
  },
  {
    id: 2,
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: image_tour2,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    location: "india",
    duration: 6,
    price: 380,
  },
  {
    id: 3,
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: image_tour3,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    location: "finland",
    duration: 6,
    price: 480,
  },
  {
    id: 4,
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: image_tour4,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    location: "honkong",
    duration: 6,
    price: 580,
  },
];
