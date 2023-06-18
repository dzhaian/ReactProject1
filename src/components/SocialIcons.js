import React from 'react';
import '../styles/SocialIcons.css';
import { FaYoutube, FaFacebook, FaVk, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="https://www.youtube.com"><FaYoutube /></a>
            <a href="https://www.facebook.com"><FaFacebook /></a>
            <a href="https://vk.com"><FaVk /></a>
            <a href="https://www.instagram.com"><FaInstagram /></a>
        </div>
    );
};

export default SocialIcons;
