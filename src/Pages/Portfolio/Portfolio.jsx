import "./Portfolio.css"
import React, { useState, useEffect } from 'react';

export default function Portfolio() {

    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('https://api.github.com/users/Svartakatten/repos');
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }
            const data = await response.json();
            setProjects(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading projects...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <section id="about">
                <h2>About Me</h2>
                <p>Enthusiastic programmer in web development and software engineering. I love turning ideas into reality through clean, efficient code.</p>
            </section>

            <section id="portfolio">
                <br />
                <div>
                    <h2>Portfolio</h2>
                    <br />
                    {projects.map(project => (
                        <div key={project.id}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}