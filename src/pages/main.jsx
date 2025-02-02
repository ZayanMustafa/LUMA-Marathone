import React from "react";

import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import Services from "../components/service";
import ContactForm from "../components/contactform";
import Project from "../components/project";

export default function Main() {
    return (
        <>
        <Navbar />
        <HeroSection/>
        <Services/>
        <Project/>
        <ContactForm/>
        </>
    );
    }
