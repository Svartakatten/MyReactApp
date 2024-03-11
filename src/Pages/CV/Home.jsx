import "./HomeStyle.css"
import "./ShowCV"
import cvDatajson from "./cvData.json";

export default function Home() {
    const fetchjson = (dataType) => {
        if (dataType === "Welcome") {
            return (
                <>
                    <h1>{cvDatajson.Welcome.title}</h1>
                    <p>{cvDatajson.Welcome.content}</p>
                </>
            )
        } else if (dataType === "Education") {
            return cvDatajson.Education.map((education) => (
                <li key={education.Id}>{education.School}, {education.Status}, {education.info}</li>
            ))
        } else if (dataType === "Skills") {
            return cvDatajson.Skills.map((skills) => (
                <li key={skills.Id}>{skills.Skill}, {skills.SkillLevel}</li>
            ))
        }
    }
    return (
        <>
            <section id="introduction">
                {fetchjson("Welcome")}
            </section>
            <section id="education">
                <h2>Education</h2>
                <ul>{fetchjson("Education")}</ul>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    {fetchjson("Skills")}
                </ul>
            </section>

        </>
    )
}