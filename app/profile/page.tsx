import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-200">
      <div className="container mx-auto py-10 px-4">
        {/* Profile Image and Name */}
        <div className="text-center mb-8">
          <img
            src="/profile.jpg" // Replace with your profile image path
            alt="Phonsinee Kitchaaum"
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h1 className="text-yellow-400 text-3xl font-bold mt-4">Chinnapat Hadtakong</h1>
          <p className="text-gray-300 mt-2">
            Passionate developer specializing in scalable web applications and modern design.
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-8">
          <h2 className="text-yellow-400 font-semibold">Contact</h2>
          <p>Email: <a href="mailto:66022804@up.ac.th" className="text-blue-300">66026011@up.ac.th</a></p>
          <p>Facebook: <a href="#" className="text-blue-300">Chinnapat Hadtakong</a></p>
          <p>Instagram: <a href="#" className="text-blue-300">chinnapat_ip</a></p>
          <p>Github: <a href="#" className="text-blue-300">raphael4598</a></p>
        </div>

        {/* Skills Section */}
        <div className="text-center mb-8">
          <h2 className="text-yellow-400 font-semibold">Skills</h2>
          <ul className="list-none text-gray-300 mt-2 space-y-1">
            <li>HTML</li>
            <li>TailwindCSS</li>
            <li>Next.js</li>
            <li>UI/UX Designer</li>
          </ul>
        </div>

        {/* About Me Section */}
        <div className="text-center mb-8">
          <h2 className="text-blue-300 text-2xl font-bold">About me</h2>
          <p className="text-gray-300 mt-2">
            Hello, my name is Wit, I'm a 2nd year software engineering student.
          </p>
        </div>

        {/* Projects Section */}
        <div className="text-center">
          <h2 className="text-blue-300 text-2xl font-bold">Projects</h2>
          <div className="mt-4">
            <h3 className="text-yellow-400 font-semibold">Coding Website Project</h3>
            <p className="text-gray-300 mt-2">
              A user-friendly web application designed to help individuals calculate their Body Mass Index (BMI)
              and receive personalized food recommendations based on their results. Built using JavaScript, HTML,
              and CSS, this project focuses on simplicity and user engagement.
            </p>
            <ul className="list-none text-gray-300 mt-2 space-y-1">
              <li>Provides a quick and accurate BMI calculation tool</li>
              <li>Offers tailored dietary advice based on BMI results</li>
              <li>Focuses on promoting health awareness and lifestyle improvements</li>
              <li>Features a clean and responsive design for seamless use across devices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
