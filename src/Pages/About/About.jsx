import React, { useState, useEffect } from 'react';
import Svartkatt from "../../Assets/Images/Blackcat.jpg"
import "../CV/HomeStyle.css"

export default function About() {

    const [inputBuffer, setInputBuffer] = useState('');

    // Keyboard Easter Egg
    const secretCode = '1337';

    useEffect(() => {
        function handleKeyUp(e) {
            setInputBuffer(prevInputBuffer => prevInputBuffer + e.key);
        }

        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        if (inputBuffer.includes(secretCode)) {
            setInputBuffer('');
            showModalWithFunnyMessage();
        }
    }, [inputBuffer, secretCode]);

    function showModalWithFunnyMessage() {
        alert("Haha, You found the Easter egg! Enjoy your day!");
    }

    // Clicks Easter Egg
    function handleCatClick() {
        document.body.style.backgroundColor = getRandomColor();
    }

    // Generates random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <>
            <section id="introduction"></section>
            <section id="image-section">
                <img src={Svartkatt} alt="A Blackcat" onClick={handleCatClick} />
            </section>
            <section id="introduction">

                <p1>Greetings,</p1>
                <br />
                <p1>I am Erik Berglund, a highly motivated and results-driven person with a passion for programming. With a solid foundation in troubleshooting and optimizing clean code, I have consistently demonstrated my commitment to delivering exceptional results in dynamic and challenging environments.</p1>
                <br />
                <br />
                <p1>About Me:</p1>
                <br />
                <p1>Having earned my high school in computer science, I am well-versed in the principles of many areas. My academic journey has instilled in me a strong analytical mindset and a commitment to continuous learning, ensuring that I stay at the forefront of industry advancements.</p1>
                <br />
                <p1>Throughout my career, I have accumulated valuable experience working with different people and honed my skills in programming, allowing me to contribute effectively to any project or team.</p1>
                <br />
                <br />
                <p1>Passion and Expertise:</p1>
                <br />
                <p1>My passion for programming extends beyond the workplace. I actively engage with the different communities, staying informed about emerging trends and technologies. This dedication has not only deepened my understanding of programming languages but also positioned me as a thought leader within the industry.</p1>
                <br />
                <br />
                <p1>Projects and Portfolio:</p1>
                <br />
                <p1>I take pride in my diverse portfolio of projects, ranging from software to hardware. Each project showcases my ability to adapt and execute. I invite you to explore my portfolio and witness firsthand the tangible impact I have made in programming.</p1>
                <br />
                <br />
                <p1>Why Work With Me:</p1>
                <br />
                <p1>Collaborative, innovative, and detail-oriented, I bring a unique blend of technical expertise and creative problem-solving to every challenge. My commitment to excellence, paired with effective communication skills, enables me to seamlessly collaborate with cross-functional teams and deliver solutions that exceed expectations.</p1>
                <br />
                <br />
                <p1>Conclusion:</p1>
                <br />
                <p1>I am excited about the prospect of contributing my skills and passion to new and exciting opportunities. Whether it's Web Development, html, css, or leadership, I am confident in my ability to bring value to any project.</p1>
                <br />
                <p1>Thank you for considering my profile. I look forward to the possibility of working together and contributing to the success of your team or project.</p1>
                <br />
                <br />
                <p1>Best regards,</p1>
                <br />
                <br />
                <p1>Erik Berglund</p1>
                <br />
                <p1>erik.berglund.NET23@edu.edugrade.se</p1>
            </section>
            {/* Skills Section */}
            <section id="skills">
                <h2>Skills</h2>
                <div class="skill-grid">
                    <div class="skill-item">
                        <h3>Web Development</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                    <div class="skill-item">
                        <h3>Programming</h3>
                        <p>Python, Java, C++, C#</p>
                    </div>
                </div>
            </section>
        </>
    )
}
