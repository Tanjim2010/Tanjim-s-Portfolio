import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import SkillsSection from './HomeSkills/SkillsSection';
import MyProjects from './MyProjects/MyProjects';
import Contact from './Contact/Contact';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='relative'>
            <div className="sticky top-0 z-50 bg-background max-w-[1290px] mx-auto">
                <Navbar />
            </div>
            <div className="max-w-7xl min-h-screen mx-auto ">
                <div id='/' className='mb-7'>
                    <Banner></Banner>
                    <AboutMe></AboutMe>
                    <SkillsSection></SkillsSection>
                    <MyProjects></MyProjects>
                    <Contact></Contact>
                </div>
            </div>
           

        </div>
    );
};

export default Home;