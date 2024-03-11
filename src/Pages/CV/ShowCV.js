// //CV

  
//   // Function to generate welcome section
//   function generateWelcome() {
//     const welcomeSection = document.createElement('div');
//     welcomeSection.classList.add('welcome');
  
//     const welcomeTitle = document.createElement('h1');
//     welcomeTitle.textContent = cvData.welcome.title;
//     welcomeSection.appendChild(welcomeTitle);
  
//     const welcomeText = document.createElement('p');
//     welcomeText.textContent = cvData.welcome.content;
//     welcomeSection.appendChild(welcomeText);
  
//     document.body.appendChild(welcomeSection);
//   }
  
//   // Function to generate education section
//   function generateEducation() {
//     const educationSection = document.createElement('div');
//     educationSection.classList.add('education');
  
//     const educationTitle = document.createElement('h2');
//     educationTitle.textContent = 'Education';
//     educationSection.appendChild(educationTitle);
  
//     const educationList = document.createElement('ul');
//     cvData.education.forEach(edu => {
//       const listItem = document.createElement('li');
//       listItem.textContent = `${edu.Status} - ${edu.School}, ${edu.info}`;
//       educationList.appendChild(listItem);
//     });
//     educationSection.appendChild(educationList);
  
//     document.body.appendChild(educationSection);
//   }
  
//   // Function to generate skills section
//   function generateSkills() {
//     const skillsSection = document.createElement('div');
//     skillsSection.classList.add('skills');
  
//     const skillsTitle = document.createElement('h2');
//     skillsTitle.textContent = 'Skills';
//     skillsSection.appendChild(skillsTitle);
  
//     const skillsList = document.createElement('ul');
//     cvData.skills.forEach(skill => {
//       const listItem = document.createElement('li');
//       listItem.textContent = skill;
//       skillsList.appendChild(listItem);
//     });
//     skillsSection.appendChild(skillsList);
  
//     document.body.appendChild(skillsSection);
//   }
  
//   // Function to generate interests section
//   function generateInterests() {
//     const interestsSection = document.createElement('div');
//     interestsSection.classList.add('interests');
  
//     const interestsTitle = document.createElement('h2');
//     interestsTitle.textContent = 'Interests';
//     interestsSection.appendChild(interestsTitle);
  
//     const interestsList = document.createElement('ul');
//     cvData.interests.forEach(interest => {
//       const listItem = document.createElement('li');
//       listItem.textContent = interest;
//       interestsList.appendChild(listItem);
//     });
//     interestsSection.appendChild(interestsList);
  
//     document.body.appendChild(interestsSection);
//   }
  
//   // Function to generate projects section
//   function generateProjects() {
//     const projectsSection = document.createElement('div');
//     projectsSection.classList.add('projects');
  
//     const projectsTitle = document.createElement('h2');
//     projectsTitle.textContent = 'Projects';
//     projectsSection.appendChild(projectsTitle);
  
//     const projectsList = document.createElement('ul');
//     cvData.projects.forEach(project => {
//       const listItem = document.createElement('li');
//       listItem.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
//       projectsList.appendChild(listItem);
//     });
//     projectsSection.appendChild(projectsList);
  
//     document.body.appendChild(projectsSection);
//   }
  
//   // Function to generate achievements section
//   function generateAchievements() {
//     const achievementsSection = document.createElement('div');
//     achievementsSection.classList.add('achievements');
  
//     const achievementsTitle = document.createElement('h2');
//     achievementsTitle.textContent = 'Achievements';
//     achievementsSection.appendChild(achievementsTitle);
  
//     const achievementsList = document.createElement('ul');
//     cvData.achievements.forEach(achievement => {
//       const listItem = document.createElement('li');
//       listItem.textContent = achievement;
//       achievementsList.appendChild(listItem);
//     });
//     achievementsSection.appendChild(achievementsList);
  
//     document.body.appendChild(achievementsSection);
//   }
  
//   // Generate sections
//   generateWelcome();
//   generateEducation();
//   generateSkills();
//   generateInterests();
//   generateProjects();
//   generateAchievements();
  