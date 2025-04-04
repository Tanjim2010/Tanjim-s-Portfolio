import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import SkillsSection from './HomeSkills/SkillsSection';

const Home = () => {
    return (
        <div className='mb-7'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
        </div>
    );
};

export default Home;