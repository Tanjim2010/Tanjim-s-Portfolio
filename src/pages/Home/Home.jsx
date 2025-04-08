import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import SkillsSection from './HomeSkills/SkillsSection';
import MyProjects from './MyProjects/MyProjects';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div id='/' className='mb-7'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;