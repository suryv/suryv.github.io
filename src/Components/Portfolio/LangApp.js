import '../../App.css';

import LangAppMainImg from "../../Assets/langapp_img1.png";
import LangAppCompAnalysis from "../../Assets/langapp_ca.png";
import LangAppAffinityMap from "../../Assets/langapp_am.png";
import LangAppPersona from "../../Assets/langapp_persona.png";
import LangAppMatrix from "../../Assets/langapp_matrix.png";
import LangAppWireFrames from "../../Assets/langapp_lofiwf.png";
import LangAppMidFiWF from "../../Assets/langapp_midfiwf.png";
import LangAppHiFiWF from "../../Assets/langapp_hifiwf.png";

const LangApp= () => {
  return (
    <div className="project-content-outer lang-app">
      {/* First section Intro*/}
      <div className="project-content-inner">
        <div className="project-section ps-flex lang-app-first">
          <div className="flex-item"><h1>Polyglot</h1>
            <p>Polyglot is an interactive language practice app with a game-like approach that connects language learners with others learning the same language. Language learners with different learning styles and interests can benefit from a variety of topics and methods of learning to help with maintaing modivation.</p>
            <ul>
                <li>Concept</li>
                <li>Solo Project</li>
                <li>Role: UX/UI Designer</li>
                <li>Timeline: May - July 2022</li>
                <li>Platform: Mobile</li>
                <li>Tools: Figma, Maze Remote Testing, Zoom</li>
              </ul>
          </div>
          <div className="flex-item project-main-pic">
            <img src={LangAppMainImg}  alt="project details" className="project-image-filler" />
          </div>
        </div>
      </div>
      {/* Second section Background */}
      <div class="project-content-inner">
        <div className="project-section">
          <div className="flex-item"><h2>Background</h2>
            <p>Polyglot was created as my final project for a UX Course offered by General Assembly. We were asked to design an app to solve a problem of our liking. I like learning languages but find it difficult to practice what I know. For me, language apps are not very helpful and I struggle with motivation to continue learning or practicing. Since I knew I was not alone in this, I chose to design an app that tackles learning a language. My goal for this project was to find the gaps in current language apps and combine those findings with what language learners need in an app to keep them motivated in learning a language.
            </p>
            </div>
          </div>
      </div>
      {/* Third section: Research Analysis */}
      <div class="project-content-inner">
        <div className="project-section">
          <div className="flex-item"><h2>Research and Insights</h2></div>
            <div>My research consisted of two parts: Competitive Analysis and User Interviews.</div>
            <div>
              <h4 className="sub-cat">Competitive Analysis</h4>
              As there are plenty of language learning apps available for students to use, my research first focused on competitive analysis against the most popular language learning apps to find any gaps in their features and any opportunities for improvement.
              <div className="lang-app-img" >
                <img src={LangAppCompAnalysis}  alt="competitor analysis"/>
              </div>
              From this research, I found that many of the apps failed to include any meaningful student to student interaction.
            </div>
          <div>
            <div>
              <h4 className="sub-cat">User Interviews</h4>
              After analysing existing language apps, I turned to User Interviews to discover what students actually need when learning a language. My goal was to understand their methods of learning, study habits, motivations and pain points. I interviewed 5 students enrolled in a foreign language class at a community college and analysed their responses to find common themes.
            </div>
            <div className="lang-app-img">
              <img src={LangAppAffinityMap}  alt="affinity map"/>
            </div>
            <div>
              The data from these interviews revealed that students:
              <ul>
                <li>Find studying boring</li>
                <li>Like practicing with one other person or in small groups</li>
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
      <div class="project-content-inner">
        <div className="project-section">
          <div className="flex-item"><h2>Persona</h2></div>
          <div>Meet Jordan! To help me focus my efforts to help language students, I used the insights I gathered from my 5 interviewees and created one persona to represent them all.
          </div>
          <div className="lang-app-img" >
            <img src={LangAppPersona}  alt="persona" />
          </div>
        </div>
      </div>
    {/* Fifth section: Problem */}
      <div class="project-content-inner">
        <div className="project-section">
          <div className="flex-item"><h2>Problem</h2></div>
          <div>
            The insights from my research and a persona to represent my target audience help define the challenge my target audience faces and synthesize the problem I am solving for.
            
            <h4 className="sub-cat">The Challenge</h4>
            Foreign language students want to become fluent in their target language but feel unmotivated to learn their target language because learning alone or with a textbook can be boring and can make the student feel detached from their target language. Language learning apps available are repetitive and focus on teaching the basics, making students lose interest quickly.
          </div>
          <div>
            <h4 className="sub-cat">The Problem</h4>
            Students learning a foreign language need a fun, interactive, personalized environment to motivate them to continue learning their target language and reach their desired fluency level because available language apps, textbooks, and lack of study buddies make it difficult for them to do so.
          </div>
        </div>
      </div>
    {/* Fifth section: HMW and Features */}
      <div class="project-content-inner">
        <div className="project-section ps-flex">
          <div className="flex-item">
            <h2>Features</h2>
            <p>Keeping Jason in mind, I focus my solution on incorporating Jason's interests and pain points to make studying more fun, interactive and personalized for him. I made a list of features that he might need the most and arranged the features on a matrix to organize to help prioritize certain features over others for an MVP.
            </p>
            The language app MVP needs:
            <div>
              <ul>
                <li>Survey to find user interests</li>
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
       {/* Sixth section: Wireframes */}
      <div class="project-content-inner">
        <div className="project-section">
          <div>
            <div className="flex-item"><h2>Wireframes and Moderated Testing</h2></div>
            To kick off the design phase of this project, I drew some rough sketches of the MVP features, using the following "How might we...." statements to influence my designs:
          </div>
          <div>
            <ul>
              <li>How might we provide fun and interesting content for users?</li>
              <li>How might we make grammar less intimidating?</li>
              <li>How might we help users interact with other users in a meaningful and productive way?</li>
            </ul>
            {/* FUN, Approachable, Interactive, Meaningful */}
        
            These sketches turned into mid-fidelity wireframes, allowing me to create a prototype for testing two features that focused on user interacting with other users: 1) Breaking the ice while chatting with a friend and 2) creating quizzes for other users. With the help of moderated testing using 5 testers, I was able to see the weaknesses and strengths of my intial designs.
          </div>
          {/* Image of wireframes */}
          <div className="lang-app-img">
            <img src={LangAppWireFrames}  alt="wireframes" />
          </div>
          {/* Outcomes of testing */}
          <div>The first round of testing provided these insights:
            <ul>
              <li>The icons on the home page are confusing</li>
              <li>It is unclear how creating a quiz is beneficial since they are created by users without any fact checking of the content</li>
              <li>The chat features are not intuitive</li>
            </ul>
          </div>
          <div>
            The feedback on the first prototype was discouraging. I decided to go back to the drawing board and start my designs from scratch keeping in mind the feedback, the list of features, and "How might we...." statements. Going back to the "How might we...." statements, I knew that in order to address these, the features had to be fun, approachable, interactive, and meaningful. My approach then turned to gamifying the learning experience. I decided to focus more on creating a fun competative environment for language learners with content provided by the app. I created mid-fidelity wireframes and prototypes to test two features: 1) competing in fun games with other learners and 2) practicing grammar. 
          </div>
          <div  className="lang-app-img">
            <img src={LangAppMidFiWF}  alt="wireframes"/>
          </div>
          <div>A round of moderated testing with the same 5 test users provided these insights:
            <ul>
              <li>The content was overall more intuitive and user friendly</li>
              <li>The Battle feature needs to also be accessible through individual friends, not just the Battle screen</li>
              <li>Each Battle is different but was difficult to understand what users had to do</li>
              <li>The grammar practice feature felt like an experience they could see no end to. It lacked feedback and ability to return to a previous page</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Seventh section: Hi Def and Unmoderated Testing */}
      <div class="project-content-inner">
        <div className="project-section">
          <div>
            <div className="flex-item"><h2>High Def and Unmoderated Testing</h2></div>
            After taking all the findings from the moderated usability testing into consideration, I made changes to the Battle feature and the Grammar Practice feature to improve their usability and clarity.
          </div>
          <div className="lang-app-img">
            <img src={LangAppHiFiWF}  alt="wireframes"/>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default LangApp;
