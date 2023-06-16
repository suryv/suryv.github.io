import '../../App.css';

import LangAppMainImg from "../../Assets/langapp_img1.png";
import LangAppCompAnalysis from "../../Assets/langapp_ca.png";
import LangAppAffinityMap from "../../Assets/langapp_am.png";
import LangAppPersona from "../../Assets/langapp_persona.png";
import LangAppMatrix from "../../Assets/langapp_matrix.png";
import LangAppWireFrames from "../../Assets/langapp_lofiwf.png";
import LangAppMidFiWF from "../../Assets/langapp_midfiwf.png";
import LangAppHiFiWF from "../../Assets/langapp_hifiwf.png";
import LangAppFinal from "../../Assets/langapp_final.png";

import React from 'react';

// function FadeInSection(props) {
//   const [isVisible, setVisible] = React.useState(false);
//   const domRef = React.useRef();
//   React.useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => setVisible(entry.isIntersecting));
//     });
//     observer.observe(domRef.current);
//   }, []);
//   return (
//     <div
//       className={`project-section-outer fade-in-section ${isVisible ? 'is-visible' : ''}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }

const LangApp= () => {
  return (
    <div className="project-container lang-app">
      {/* First section Intro*/}
      <div className="project-section-outer">
        <div className="project-section-inner lang-app-first">     
        <div className="section-header"><h2>Reto</h2></div>
        <div className="section-content sc-flex-horizontal">
          <div className="flex-item project-intro">
            <p>Reto is a language practice app with a game-like approach that connects people learning foreign languages. Users with different learning styles and interests can benefit from a variety of topics and methods of learning to help with maintaining motivation.</p>
            <ul>
                <li>Concept</li>
                <li>Solo Project</li>
                <li>Role: UX/UI Designer, Researcher</li>
                <li>Timeline: 10 weeks</li>
                <li>Platform: Mobile</li>
                <li>Tools: Figma, Maze Remote Testing</li>
              </ul>
          </div>
          <div className="flex-item project-main-pic">
            <img src={LangAppMainImg}  alt="project details" className="project-image-filler" />
          </div>
          </div>
        </div>
      </div>

      {/* Second section Background */}

      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h3>Background</h3></div>
          <div className="section-content">
              <p>I developed Reto as my final project for General Assembly's UX Design course. We were asked to design an app to solve a problem of our liking. I like learning languages but find it difficult to practice what I know. For me, language apps are not very helpful and I struggle with motivation to practice. I knew I was not the only one that felt this way so I chose to design an app that helps people practice the language they are learning. My goal for this project was to find the gaps in current language apps and combine those findings with what language learners need to keep them motivated in their learning journey.
              </p>
          </div>
        </div> 
      </div>


      {/* Third section: Research Analysis */}

      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h3>Research and Insights</h3></div>
          <div className="section-content">
            <div>My research consisted of two parts: Competitive Analysis and User Interviews.</div>
          </div>
          <div className="section-content">
            <h4>Competitive Analysis</h4>
            <p>As there are plenty of language learning apps on the market for students to use, my research for this project first focused on competitive analysis against the most popular language learning apps to find any gaps in their features and any opportunities for improvement.</p>
            <div className="lang-app-img" >
              <img src={LangAppCompAnalysis}  alt="competitor analysis"/>
            </div>
            <p> From this research, I found that many of the apps were repetative, limited in content and failed to include any meaningful user-to-user interaction.</p>
          </div>
          <div className="section-content">
            <h4>User Interviews</h4>
            <p>After analysing existing language apps, I turned to User Interviews to discover what people need when they are learning a language. My goal was to understand their methods of learning, study habits, motivations and pain points. I interviewed 5 students enrolled in a foreign language class at a community college and analysed their responses to find common themes.</p>
            <div className="lang-app-img">
              <img src={LangAppAffinityMap}  alt="affinity map"/>
            </div>
            <div>
              The data from these interviews revealed that students:
              <ul>
                <li>Find studying boring</li>
                <li>Like the social aspect of working in small groups</li>
                <li>Count consuming media in their target language towards their study time</li>
                <li>Find learning the grammar of their target language difficult</li>
                <li>Stop learning languages when they do not have any connection to the language</li>
                <li>Are concerned with sounding like a tourist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* Fourth section: Persona */}
   
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h3>Persona</h3></div>
          <div className="section-content">
            <p>To help me focus my efforts to help people learning a language, I used the insights I gathered from my 5 interviewees and created one persona to represent them all. Meet Jordan!</p>
            <div className="lang-app-img" >
              <img src={LangAppPersona}  alt="persona" />
          </div>
          </div>
        </div>
      </div>
    

      {/* Fifth section: Problem */}
    
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h3>Problem</h3></div>
          <div className="section-content">
            <p>The insights from my research and a persona to represent my target audience help define the challenge my target audience faces and synthesize the problem I am solving for.
            </p>
          </div>
          <div className="section-content">
            <h4>The Challenge</h4>
            <p>People learning a foreign language want to become fluent in their target language but feel unmotivated to continue learning because learning alone or with a textbook can be boring, making language learners feel detached from their target language. Language learning apps available are repetitive and focus on teaching the basics, making people lose interest quickly.
            </p>
          </div>
          <div className="section-content">
            <h4>The Problem</h4>
            <p>People learning a foreign language need a fun, interactive, personalized environment to motivate them to continue learning their target language and reach their desired fluency level because available language apps, textbooks, and lack of study buddies make it difficult for them to do so.
            </p>
          </div>
        </div>
      </div>
      

      {/* Fifth section: HMW and Features */} 

      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h3>Features</h3></div>
          <div className="section-content sc-flex-horizontal">
            <div className="flex-item lang-app-feature">
              <p>For the solution, I focused on Jason's interests and pain points to make studying more fun, interactive and personalized for him. I made a list of features that he might need the most and organized them on a matrix to help prioritize certain features over others for an MVP.</p>
              <p>The language app MVP needs:</p>
              <div>
                <ul>
                  <li>Initial survey to find users' interests</li>
                  <li>Ways to interact with other language learners (quiz creation, random topic generator for chat)</li>
                  <li>Grammar explanations and practice</li>
                  <li>Reading, writing, speaking and listening sections</li>
                </ul>
            </div>
            </div>
            <div className="flex-item lang-app-img lang-app-matrix" >
            <img src={LangAppMatrix}  alt="feature matrix" />
          </div>
          </div>
        </div>
      </div>

       {/* Sixth section: Wireframes */}
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h3>Wireframes and Moderated Testing</h3></div>
          <div className="section-content">
            <p>To kick off the design phase of this project, I drew some rough sketches of the MVP features, using the following "How might we...." statements to guide my designs:</p>
            <div>
              <ul>
                <li>How might we provide fun and interesting content for users?</li>
                <li>How might we make grammar less intimidating?</li>
                <li>How might we help users interact with other users in a meaningful and productive way?</li>
              </ul>
            </div>
          </div>
          <div className="section-content">
            {/* FUN, Approachable, Interactive, Meaningful */}
            <p>I turned the sketches to mid-fidelity wireframes, allowing me to create a prototype for testing two features that focused on users interacting with one another: 1) Breaking the ice while chatting with a friend and 2) creating quizzes for other users. With the help of moderated testing using 5 testers, I was able to see the weaknesses and strengths of my intial designs.</p>
            {/* Image of wireframes */}
            <div className="lang-app-img">
              <img src={LangAppWireFrames}  alt="wireframes" />
            </div>
            <h4>Testing Results</h4>
            <div>
              <ul>
                <li>The icons on the home page are confusing</li>
                <li>It is unclear how creating a quiz is beneficial since they are created by users without any fact checking of the content</li>
                <li>The chat features are not intuitive</li>
              </ul>
            </div>
          </div>
          <div className="section-content">
            <p> The feedback on the first prototype was discouraging. I decided to go back to the drawing board and start my designs from scratch keeping in mind the feedback, the list of features, and "How might we...." statements. Going back to the "How might we...." statements, I thought about how the features had to be fun, approachable, interactive, and meaningful. My approach then turned to gamifying the learning experience. I decided to focus more on creating a fun competitive environment for language learners with content provided by the app. I created mid-fidelity wireframes and prototypes to test two features: 1) competing in fun games with other learners and 2) practicing grammar. </p>
            <div  className="lang-app-img">
              <img src={LangAppMidFiWF}  alt="wireframes"/>
            </div>
            <div>Through another round of moderated testing with the same 5 test users I found that:
              <ul>
                <li>The content was overall more intuitive and user friendly</li>
                <li>The Battle feature needs to also be accessible through individual friends, not just the Battle screen</li>
                <li>Each Battle is different but was difficult to understand what users had to do</li>
                <li>The grammar practice feature felt like an experience they could see no end to. It lacked feedback and ability to return to a previous page</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Seventh section: Hi Def and Unmoderated Testing */}

      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h3>High Def and Unmoderated Testing</h3></div>
          <div className="section-content">
            <p>After taking all the findings from the moderated usability testing into consideration, I made changes to the Battle feature and the Grammar Practice feature to improve their usability and clarity. I used Maze.co to conduct a round of unmoderated testing with the same 5 test users as before.</p>
            <div className="lang-app-img">
              <img src={LangAppHiFiWF}  alt="wireframes"/>
          </div>
          </div>
          {/* Outcomes of testing */}
          <div className="section-content">
            <h4>Testing Results</h4>
            <div>
              <ul>
                <li>All users need clear indication of how long they have until a battle begins </li>
                <li>Most users felt they did something wrong when Challenging a friend to a battle because the redirect to the Battles landing page did not feel any different than selecting the Battles menu option</li>
                <li>The app needs to indicate when a user is online and available to participate in a battle</li>
                <li>The Grammar Practice was still unclear on the duration of the practice experience</li>
                <li>All users thought the "Back" functionality was not clear because they didn't know what place in the experience "Back" refered to</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Eight section: Final */}
  
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h3>Final Design</h3></div>
          <div className="section-content">
            <p>I created a final iteration of my designs based on the results from the unmoderated testing. I made the following changes:</p>
            <div>
              <ul>
                <li>Added an Online feature to indicate that the user is online and available to battle</li>
                <li>Added a countdown to tell users how long they have before the battle starts</li>
                <li>Removed the redirect to the Battles landing page from the friends page and implemented a pop up feature instead</li>
                <li>Added an Exit button to the Grammar practice experience as well as a progress bar to indicate how many practice questions a user has</li>
              </ul>
            </div>
            <div className="lang-app-img">
            <img src={LangAppFinal}  alt="wireframes"/>
          </div>
          </div>
        </div>
      </div>
    

      {/* Ninth section: Conclusion */}
   
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h3>Conclusion</h3></div>
          <div className="section-content">
            <p>It is not easy to learn a language, especially on your own. Most language apps available are repetitive, rarely cover grammar, and they do not offer meaningful interaction between users. An app that focuses on user interaction through fun and competitive games and focuses on making grammar more approachable keeps language learners motivated and excited to continue learning. </p>
            <h4>What I would do differently</h4>
            <p>As this was my first UX project, I learned a lot. Some things I would do differently for an MVP:</p>
            <div>
              <ul>
                <li>I would prioritize one or two features to develop instead of many. Addressing too many user needs at one made me feel like the project lacked focus and direction.</li>
                <li>I would focus on creating user flows to better understand how users will interact with a feature.</li>
                <li>I would be more specific in creating a persona. Although Jordan is a good representative of the target audience, explicitly calling out students as the target audience would have helped me think of more ideas to better help this group of people. This app would have more value if it was developed as an extention of a textbook.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default LangApp;
