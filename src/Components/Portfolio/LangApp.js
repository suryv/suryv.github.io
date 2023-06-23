import '../../App.css';
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryItem } from "react-lightgallery";

import LangAppMainImg from "../../Assets/LangApp/langapp_img1.png";
import LangAppCompAnalysis from "../../Assets/LangApp/langapp_ca.png";
import LangAppAffinityMap from "../../Assets/LangApp/langapp_am.png";
import LangAppPersona from "../../Assets/LangApp/langapp_persona.png";
import LangAppMatrix from "../../Assets/LangApp/langapp_matrix.png";
import LangAppWireFrames1 from "../../Assets/LangApp/langapp_lf1.png";
import LangAppWireFrames2 from "../../Assets/LangApp/langapp_lf2.png";
import LangAppWireFrames3 from "../../Assets/LangApp/langapp_lf3.png";
import LangAppMidFiWF1 from "../../Assets/LangApp/langapp_mf1.png";
import LangAppMidFiWF2 from "../../Assets/LangApp/langapp_mf2.png";
import LangAppMidFiWF3 from "../../Assets/LangApp/langapp_mf3.png";
import LangAppMidFiWF4 from "../../Assets/LangApp/langapp_mf4.png";
import LangAppMidFiWF5 from "../../Assets/LangApp/langapp_mf5.png";
import LangAppMidFiWF6 from "../../Assets/LangApp/langapp_mf6.png";
import LangAppHiFiWF1 from "../../Assets/LangApp/langapp_hf1.png";
import LangAppHiFiWF2 from "../../Assets/LangApp/langapp_hf2.png";
import LangAppHiFiWF3 from "../../Assets/LangApp/langapp_hf3.png";
import LangAppHiFiWF4 from "../../Assets/LangApp/langapp_hf4.png";
import LangAppHiFiWF5 from "../../Assets/LangApp/langapp_hf5.png";
import LangAppHiFiWF6 from "../../Assets/LangApp/langapp_hf6.png";
import LangAppHiFiWF7 from "../../Assets/LangApp/langapp_hf7.png";
import LangAppHiFiWF8 from "../../Assets/LangApp/langapp_hf8.png";
import LangAppFinal1 from "../../Assets/LangApp/langapp_f1.png";
import LangAppFinal2 from "../../Assets/LangApp/langapp_f2.png";
import LangAppFinal3 from "../../Assets/LangApp/langapp_f3.png";
import LangAppFinal4 from "../../Assets/LangApp/langapp_f4.png";

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

<div className="project-section-outer project-intro">

<div className="banner">
  <div className="section-content sc-flex-horizontal">
    <div className="sc-flex-item sc-flex-item-half banner-text sc-flex-margin-right">
      <div className="banner-content">
        <div className="banner-header"><h2>Reto</h2></div>
        <div className="intro-text-container"> 
        <p>Reto is a language practice app with a game-like approach that connects people learning foreign languages. Users with different learning styles and interests can benefit from a variety of topics and methods of learning to help with maintaining motivation.</p>
        </div>
        <div className="details accent-link">
          <p><b>Solo | Concept Project</b></p>
          <p><b>Role:</b> UX/UI Designer, Researcher</p>
          <p><b>Timeline:</b> 10 Weeks</p>
          <p><b>Platform:</b> Mobile</p>
          <p><b>Tools & Methods:</b> Pencil/Paper, Figma, Maze Remote Testing</p>
        </div>
      </div>
    </div>
    <div className="sc-flex-item sc-flex-item-half flex-center-content content-background">
    <LightgalleryItem src={LangAppMainImg}>
              <img src={LangAppMainImg}  alt="project details" className="project-image-filler" />
            </LightgalleryItem>
    </div>
  </div>
</div>
</div>
      {/* Second section Background */}

      <div className="project-section-outer ps-two">
        <div className="project-section-inner">
          <div className="section-header"><h3>Background</h3></div>
          <div className="section-content">
              <p>I developed Reto as my final project for General Assembly's UX Design course. We were asked to design an app to solve a problem of our liking. I like learning languages but find it difficult to practice what I know. For me, language apps are not very helpful and I struggle with motivation to practice. I knew I was not the only one that felt this way so I chose to design an app that helps people practice the language they are learning. My goal for this project was to find the gaps in current language apps and combine those findings with what language learners need to keep them motivated in their learning journey.
              </p>
          </div>
        </div> 
      </div>


      {/* Third section: Research Analysis */}

      <div className="project-section-outer ps-three">
        <div className="project-section-inner">
          <div className="section-header"><h3>Research and Insights</h3></div>
          <div className="section-content">
            <div>My research consisted of two parts: Competitive Analysis and User Interviews.</div>
          </div>
          <div className="section-content">
            <h4>Competitive Analysis</h4>
            <p>As there are plenty of language learning apps on the market for students to use, my research for this project first focused on competitive analysis against the most popular language learning apps to find any gaps in their features and any opportunities for improvement.</p>
            <div className="lang-app-img centered-txt" >
              <LightgalleryItem src={LangAppCompAnalysis}>
                <img src={LangAppCompAnalysis}  alt="competitor analysis"/>
              </LightgalleryItem>
              
            </div>
            <p> From this research, I found that many of the apps were repetitive, limited in content, and failed to include any meaningful user-to-user interaction.</p>
          </div>
          <div className="section-content">
            <h4>User Interviews</h4>
            <p>After analyzing existing language apps, I turned to User Interviews to discover what people need when they are learning a language. My goal was to understand their methods of learning, study habits, motivations, and pain points. I interviewed 5 students enrolled in a foreign language class at a community college and analysed their responses to find common themes.</p>
            <div className="lang-app-img centered-txt">
              <LightgalleryItem src={LangAppAffinityMap}>
                <img src={LangAppAffinityMap}  alt="affinity map"/>
              </LightgalleryItem>
              
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
      <div className="project-section-outer ps-four">
        <div className="project-section-inner">
          <div className="section-header"><h3>Persona</h3></div>
          <div className="section-content">
            <p>To help me focus my efforts to help people learning a language, I used the insights I gathered from my 5 interviewees and created one persona to represent them all. Meet Jordan!</p>
            <div className="lang-app-img centered-txt" >
              <LightgalleryItem src={LangAppPersona}>
                <img src={LangAppPersona}  alt="persona" />
              </LightgalleryItem>
          </div>
          </div>
        </div>
      </div>
    

      {/* Fifth section: Problem */}
    
      <div className="project-section-outer ps-five">
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
      

      {/* Six section: HMW and Features */} 

      <div className="project-section-outer ps-six">
        <div className="project-section-inner">
          <div className="section-header"><h3>Features</h3></div>
          <div className="section-content sc-flex-horizontal">
            <div className="sc-flex-item sc-flex-item-half sc-flex-margin-right">
              <p>For the solution, I focused on Jason's interests and pain points to make studying more fun, interactive and personalized for him. I made a list of features that he might need the most and organized them on a matrix to help prioritize certain features over others for an MVP.</p>
              <p>The language app MVP needs:</p>
              <div>
                <ul>
                  <li>Initial survey to find users' interests</li>
                  <li>Ways to interact with other language learners (quiz creation, random topic generator for chat)</li>
                  <li>Grammar explanations and practice</li>
                  <li>Reading, writing, speaking, and listening sections</li>
                </ul>
            </div>
            </div>
            <div className="sc-flex-item sc-flex-item-half" >
              <LightgalleryItem src={LangAppMatrix}>
                <img src={LangAppMatrix}  alt="feature matrix" />
              </LightgalleryItem>
            
            </div>
          </div>
        </div>
      </div>

       {/* Seven section: Wireframes */}
      <div className="project-section-outer ps-seven">
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
          </div>
          <div className="section-content sc-flex-horizontal unset-width">
            {/* Image of wireframes */}
            <div className="lang-app-img">
              <LightgalleryItem src={LangAppWireFrames1}>
                <img src={LangAppWireFrames1}  alt="wireframes" />
              </LightgalleryItem>
            </div>
            <div className="lang-app-img">
              <LightgalleryItem src={LangAppWireFrames2}>
                <img src={LangAppWireFrames2}  alt="wireframes" />
              </LightgalleryItem>
            </div>
            <div className="lang-app-img">
              <LightgalleryItem src={LangAppWireFrames3}>
                <img src={LangAppWireFrames3}  alt="wireframes" />
              </LightgalleryItem>
            </div>
          </div>
          <div className="section-content">
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
          </div>
          <div className="section-content">
            <div className="section-row sc-flex-horizontal unset-width flex-three">
              <div  className="lang-app-img">
                <LightgalleryItem src={LangAppMidFiWF1}>
                  <img src={LangAppMidFiWF1}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div  className="lang-app-img">
                <LightgalleryItem src={LangAppMidFiWF2}>
                  <img src={LangAppMidFiWF2}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div  className="lang-app-img">
                <LightgalleryItem src={LangAppMidFiWF3}>
                  <img src={LangAppMidFiWF3}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div  className="lang-app-img">
                <LightgalleryItem src={LangAppMidFiWF4}>
                  <img src={LangAppMidFiWF4}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div  className="lang-app-img">
                <LightgalleryItem src={LangAppMidFiWF5}>
                  <img src={LangAppMidFiWF5}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div  className="lang-app-img">
                <LightgalleryItem src={LangAppMidFiWF6}>
                  <img src={LangAppMidFiWF6}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
            </div>
          </div>


          <div className="section-content">
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

      {/* Eight section: Hi Def and Unmoderated Testing */}

      <div className="project-section-outer ps-eight">
        <div className="project-section-inner">
          <div className="section-header"><h3>High Def and Unmoderated Testing</h3></div>
          <div className="section-content">
            <p>After taking all the findings from the moderated usability testing into consideration, I made changes to the Battle feature and the Grammar Practice feature to improve their usability and clarity. I used Maze.co to conduct a round of unmoderated testing with the same 5 test users as before.</p>
          </div>
          <div className="section-content">
            <div className="section-row sc-flex-horizontal unset-width flex-four">
                <div className="lang-app-img">
                <LightgalleryItem src={LangAppHiFiWF1} >
                  <img src={LangAppHiFiWF1}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div className="lang-app-img">
                <LightgalleryItem src={LangAppHiFiWF2} >
                  <img src={LangAppHiFiWF2}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div className="lang-app-img">
                <LightgalleryItem src={LangAppHiFiWF3} >
                  <img src={LangAppHiFiWF3}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div className="lang-app-img">
                <LightgalleryItem src={LangAppHiFiWF4} >
                  <img src={LangAppHiFiWF4}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div className="lang-app-img">
                <LightgalleryItem src={LangAppHiFiWF5} >
                  <img src={LangAppHiFiWF5}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div className="lang-app-img">
                <LightgalleryItem src={LangAppHiFiWF6} >
                  <img src={LangAppHiFiWF6}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div className="lang-app-img">
                <LightgalleryItem src={LangAppHiFiWF7} >
                  <img src={LangAppHiFiWF7}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div className="lang-app-img">
                <LightgalleryItem src={LangAppHiFiWF8} >
                  <img src={LangAppHiFiWF8}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
            </div>
            
          </div>
          {/* Outcomes of testing */}
          <div className="section-content">
            <h4>Testing Results</h4>
            <div>
              <ul>
                <li>All users need clear indication of how long they have until a Battle begins </li>
                <li>Most users felt they did something wrong when Challenging a friend to a Battle because the redirect to the Battles landing page did not feel any different than selecting the Battles menu option</li>
                <li>The app needs to indicate when a user is online and available to participate in a Battle</li>
                <li>The Grammar Practice was still unclear on the duration of the practice experience</li>
                <li>All users thought the "Back" functionality was not clear because they didn't know what place in the experience "Back" referred to</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Ninth section: Final */}
  
      <div className="project-section-outer ps-nine">
        <div className="project-section-inner">
          <div className="section-header"><h3>Final Design</h3></div>
          <div className="section-content">
            <p>I created a final iteration of my designs based on the results from the unmoderated testing. I made the following changes:</p>
            <div>
              <ul>
                <li>Added an Online feature to indicate that the user is online and available to battle</li>
                <li>Added a countdown to tell users how long they have before the Battle starts</li>
                <li>Removed the redirect to the Battles landing page from the friends page and implemented a pop up feature instead</li>
                <li>Added an Exit button to the Grammar practice experience as well as a progress bar to indicate how many practice questions a user has</li>
              </ul>
            </div>
            <div>
            <p>You can see the final prototype <a href="https://www.figma.com/proto/IaGqO0QXluKNS9EkwtC6Ac/LanguageProject2.0-HiFi?type=design&node-id=1-6075&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A6075" target="_blank">here</a>.</p>
            </div>
          </div>

          <div className="section-content sc-flex-horizontal">
          
                <div className="sc-flex-item sc-flex-item-half lang-app-img">
                <LightgalleryItem src={LangAppFinal1}>
                <img src={LangAppFinal1}  alt="wireframes"/>
                </LightgalleryItem>
              </div>
              <div className="sc-flex-item sc-flex-item-half lang-app-img">
              <LightgalleryItem src={LangAppFinal2}>
                <img src={LangAppFinal2}  alt="wireframes"/>
              </LightgalleryItem>
              </div>
              </div>    
              <div className="section-content sc-flex-horizontal">
              <div className="sc-flex-item sc-flex-item-half lang-app-img">
              <LightgalleryItem src={LangAppFinal3}>
                <img src={LangAppFinal3}  alt="wireframes"/>
              </LightgalleryItem>
              </div>
              <div className="sc-flex-item sc-flex-item-half lang-app-img">
              <LightgalleryItem src={LangAppFinal4}>
                <img src={LangAppFinal4}  alt="wireframes"/>
              </LightgalleryItem>
              </div>
          
          </div>
        </div>
      </div>
    

      {/* Ninth section: Conclusion */}
   
      <div className="project-section-outer ps-ten">
        <div className="project-section-inner">
          <div className="section-header"><h3>Conclusion</h3></div>
          <div className="section-content">
            <p>It is not easy to learn a language, especially on your own. Most language apps available are repetitive, rarely cover grammar, and they do not offer meaningful interaction between users. An app that focuses on user interaction through fun and competitive games and focuses on making grammar more approachable keeps language learners motivated and excited to continue learning. </p>
            <h4>What I would do differently</h4>
            <p>As this was my first UX project, I learned a lot. Some things I would do differently for an MVP:</p>
            <div>
              <ul>
                <li>I would prioritize one or two features to develop instead of many. Addressing too many user needs at once made me feel like the project lacked focus and direction.</li>
                <li>I would focus on creating user flows to better understand how users will interact with a feature.</li>
                <li>I would be more specific in creating a persona. Although Jordan is a good representative of the target audience, explicitly calling out students as the target audience would have helped me think of more ideas to better help this group of people. This app would have more value if it was developed as an extension of a textbook.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default LangApp;
