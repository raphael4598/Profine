import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-200">
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10">
          {/* Profile Card */}
          <div className="text-center lg:text-left w-full lg:w-1/3">
            <img
              src="/profile.jpg" // Replace with your profile image path
              alt="Phonsinee Kitchaaum"
              className="w-32 h-32 rounded-full mx-auto lg:mx-0 lg:mb-4"
            />
            <h1 className="text-yellow-400 text-3xl font-bold mt-4">Chinnapat Hadtakong</h1>
            <p className="text-gray-300 mt-2">
              Passionate developer specializing in scalable web applications and modern design.
            </p>

            <div className="mt-6 space-y-2 text-left">
              <h2 className="text-yellow-400 font-semibold">Contact</h2>
              <p>Email: <a href="mailto:66022804@up.ac.th" className="text-blue-300">66022804@up.ac.th</a></p>
              <p>Facebook: <a href="#" className="text-blue-300">Phonsinee Kitchaaum</a></p>
              <p>Instagram: <a href="#" className="text-blue-300">gift_028</a></p>
              <p>Github: <a href="#" className="text-blue-300">6622804</a></p>
            </div>

            <div className="mt-6">
              <h2 className="text-yellow-400 font-semibold">Skills</h2>
              <ul className="list-none text-gray-300 mt-2 space-y-1">
                <li>HTML</li>
                <li>TailwindCSS</li>
                <li>Next.js</li>
                <li>UI/UX Designer</li>
              </ul>
            </div>
          </div>

          {/* About Me and Projects */}
          <div className="w-full lg:w-2/3 mt-10 lg:mt-0">
            <h2 className="text-blue-300 text-2xl font-bold">About me</h2>
            <p className="text-gray-300 mt-2">
              Hello, my name is Ms. Phonsinee Kitchaaum. My nickname is Gift. I am currently studying at
              Phayao University, Faculty of Information and Communication Technology, Software
              Engineering Program, 2nd year.
            </p>

            <h2 className="text-blue-300 text-2xl font-bold mt-6">Projects</h2>
            <div className="mt-4">
              <h3 className="text-yellow-400 font-semibold">Coding Website Project</h3>
              <p className="text-gray-300 mt-2">
                A website for practicing programming, with an answer checking system, supporting multiple
                languages, and won first place in the 2nd year project competition within the department. It is a
                project in the subject of databases and software processes.
              </p>
              <ul className="list-none text-gray-300 mt-2 space-y-1">
                <li>Can practice doing questions</li>
                <li>Have ranking of scores in doing questions</li>
                <li>Have profile showing doing questions</li>
                <li>Can create/edit/delete/view questions</li>
                <li>Can create test cases for questions in both random and correct answer types and write code answers</li>
                <li>Can manage various topics</li>
                <li>Can manage admins (add/delete/edit)</li>
                <li>Can send notifications to users (individually/groups/everyone)</li>
                <li>Can save questions of interest</li>
                <li>
                  Answer checking system supports Python 3, Python 2, C, C++, C#, Golang, PHP, Rust, Lua, Java,
                  JavaScript, TypeScript
                </li>
                <li>
                  Have LLM system (Gemini-1.5-flash) to help check, write prompts to check conditions
                </li>
                <li>Can search for questions to use (lexical + semantic)</li>
              </ul>

              <div className="mt-4">
                <a href="#" className="text-blue-300 underline">coding-web-frontend LINK</a>
                <br />
                <a href="#" className="text-blue-300 underline">Figma Coding Website Project LINK</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
