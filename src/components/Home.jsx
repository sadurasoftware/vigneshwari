import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <header className="about-section" >
                <h1>Welcome to Sweet Treats Ice Cream!</h1>
                <p>Deliciously creamy, mouthwatering flavors for every craving.</p>
            </header>

            <section className="about-section">
                <h2>About Us</h2>
                <p>At Sweet Treats Ice Cream, we serve the finest handmade ice creams crafted with only the freshest ingredients. Whether you like it classic or adventurous, we have something for everyone!</p>
            </section>


            <section className="cta-section">
                <h2>Get Your Sweet Treat Today!</h2>
                <p>Ready for a scoop of happiness? Order now and enjoy the creamy goodness delivered right to your door!</p>
            </section>
        </div>
    );
};

export default Home;
