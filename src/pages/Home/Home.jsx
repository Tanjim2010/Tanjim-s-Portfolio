import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import SkillsSection from './HomeSkills/SkillsSection';
import MyProjects from './MyProjects/MyProjects';

const Home = () => {
    return (
        <div id='/' className='mb-7'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;