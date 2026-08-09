import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor"; 

// Local Data
import data from "../data/portfolio.json"; 

export default function Home() {
// Ref
const workRef = useRef();
const aboutRef = useRef();
const textOne = useRef();
const textTwo = useRef();
const textThree = useRef();
const textFour = useRef(); 

// Handling Scroll
const handleWorkScroll = () => {
window.scrollTo({
top: workRef.current.offsetTop - 50,
left: 0,
behavior: "smooth",
});
}; 

const handleAboutScroll = () => {
window.scrollTo({
top: aboutRef.current.offsetTop - 50,
left: 0,
behavior: "smooth",
});
}; 

useIsomorphicLayoutEffect(() => {
stagger(
[textOne.current, textTwo.current, textThree.current, textFour.current],
{ y: 30, x: 0, transform: "scale(0.98)" },
{ y: 0, x: 0, transform: "scale(1)" }
);
}, []); 

return ( 

);
}
