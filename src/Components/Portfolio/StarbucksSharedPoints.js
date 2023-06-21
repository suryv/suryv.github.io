import '../../App.css';
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryItem } from "react-lightgallery";

import SBMap from "../../Assets/sb_map.png";
import SBStoryboard1 from "../../Assets/sb_storyboard1.png"
import SBStoryboard2 from "../../Assets/sb_storyboard2.png"
import SBStoryboard3 from "../../Assets/sb_storyboard3.png"
import SBStoryboard4 from "../../Assets/sb_storyboard4.png"
import SBFlow from "../../Assets/sb_flows1.png"
import SBMainStar from "../../Assets/sb_main.png"
import SBMidFi from "../../Assets/sbstars_midfid_prototype.gif"
import SBHiFi from "../../Assets/sbstars_hifid_prototype.gif"
import SBFinal from "../../Assets/sb_finaldesign.png"
import SBHiFi1 from "../../Assets/sb_hifi_1.png"
import SBHiFi2 from "../../Assets/sb_hifi_2.png"
import SBHiFi3 from "../../Assets/sb_hifi_3.png"
import SBHiFi4 from "../../Assets/sb_hifi_4.png"

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
//       className={`project-content-inner fade-in-section ${isVisible ? 'is-visible' : ''}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }




const StarbucksSharedPoints= () => {
  return (
    <div className="project-container starbucks-sp mobile tablet main-container">
    
      {/* First Section -- Intro Image & info */}
      <div className="project-section-outer project-intro">

        <div className="banner">
          <div className="section-content sc-flex-horizontal">
            <div className="sc-flex-item sc-flex-item-half banner-text sc-flex-margin-right">
              <div className="banner-content">
                <div className="banner-header"><h2>Starbucks Shared Stars</h2></div>
                <div className="intro-text-container"> 
                <p>Through the Starbucks Mobile App rewards program, customers earn Stars with every purchase which can be redeemed for drinks, customizations and other Starbucks merchandise. Stars can be redeemed only by the customer that earned them before the Stars expire. Some customers take a longer time to collect enough Stars to cash in and unfortunately the Stars expire before they can be used.</p>
                <p>I set out to design a solution to help Starbucks customers make the most of their Stars through a group sharing feature.</p>
                </div>
                <div className="details accent-link">
                  <p><b>Solo | Concept Project</b></p>
                  <p><b>Role:</b> UX/UI Designer</p>
                  <p><b>Timeline:</b> One Week</p>
                  <p><b>Platform:</b> Mobile</p>
                  <p><b>Tools & Methods:</b> Pencil/Paper, Figma, <a href="https://creative.starbucks.com/" target="blank">Starbucks Design System Guide</a>, <a href="http://www.gv.com/sprint/" target="blank">Design Sprint</a></p>
                </div>
              </div>
            </div>
            <div className="sc-flex-item sc-flex-item-half flex-center-content content-background">
              <LightgalleryItem src={SBMainStar}>
                <img src={ SBMainStar }  alt="project main" />
            </LightgalleryItem>
            </div>
          </div>
        </div>
        

          {/* <div className="section-content sc-flex-horizontal">
            <div className="project-intro-img sc-flex-item">
              <img src={ SBMainStar }  alt="project main" />
            </div>
            <div className="sc-flex-item section-link">
                <p><b>Solo | Concept Project</b></p>
                <p><b>Role:</b> UX/UI Designer</p>
                <p><b>Timeline:</b> One Week</p>
                <p><b>Platform:</b> Mobile</p>
                <p><b>Tools & Methods:</b> Pencil/Paper, Figma, <a href="https://creative.starbucks.com/" target="blank">Starbucks Design System Guide</a>, <a href="http://www.gv.com/sprint/" target="blank">Design Sprint</a></p>
            </div>
          </div> */}



         
     
      </div>

      {/* Second Section -- Project Overview */}

      <div className="project-section-outer pco-accent-style">
        <div className="project-section-inner">
          <div className="section-content sc-flex-horizontal">
            <div className="sc-flex-item sc-flex-item-half sc-flex-margin-right">
              <h4>Problem</h4>
              <p>Starbucks customers miss out on rewards because they do not earn enough Stars to redeem before the Stars expire. Currently, Starbucks Stars cannot be shared between customers. Starbucks customers need a way to share their Stars with friends and family to make the most of the Starbucks Rewards program.</p>
            </div>
            <div className="sc-flex-item sc-flex-item-half">
              <h4>Outcome</h4>
              <p>The Starbucks Shared Stars program allows people to pool their Stars with others, while maintaining complete control of how Stars are allocated, resulting in maximized benefits from the rewards program.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Third Section -- Project origin and initial research */}

      <div className="project-section-outer ps-two">
        <div className="project-section-inner">
          <div className="section-header"><h3>Project Origin & Initial Research</h3></div>
          <div className="section-content">
            <p>The idea for this project originated from a conversation with a group of people about Starbucks. The conversation turned to the Stars rewards program. While most involved in the conversation feel positive about the program, some people expressed dissatisfaction with the program claiming they rarely use it. Seeing the need for an improved user experience, I took the opportunity to conduct mini user interviews, asking the participants about their feelings and thoughts on the Starbucks Stars rewards program. </p>
            <p>
            Participants of the conversation expressed the following pain points:
            </p>
          </div>
          <div className ="section-content sc-flex-horizontal">
            <div className="sc-flex-item sc-flex-three card-container sc-flex-margin-right">
              <div className="large-txt card-content">
                <p>They can never accumulate enough Stars to cash in for the rewards they want</p>
              </div>
            </div>
            <div className="sc-flex-item sc-flex-three card-container sc-flex-margin-right">
              <div className="large-txt card-content">
                <p>They feel like their Stars go wasted because they expire before they can be used</p>
              </div>
            </div>
            <div className="sc-flex-item sc-flex-three card-container">
              <div className="large-txt card-content">
                <p>They never know when their Stars will expire</p>
              </div>
            </div>
          </div>
          <div className= "section-content">
            <p>These led them to rarely using the Stars in the rewards program.</p>
            <p>As most of the participants are in a relationship, they expressed the desire to be able to share their Stars with their significant others so that at least one person could redeem the Stars for a reward. </p>
            <p>Taking this into consideration, I moved to create a conceptual product feature for the Starbucks Mobile app that would allow customers to share Stars with others.</p>
          </div>
        </div>
      </div>


      {/* Third Section -- Goal & Focus */}

      <div className="project-section-outer ps-three">
        <div className="project-section-inner">
          <div className="section-header"><h3>Setting a Project Goal & Choosing a Focus</h3></div>
          <div className="section-content">
            <p>Drawing from the initial research, I kicked off the project with a high-level goal, a map of the current user flow to help find opportunities for a Stars sharing feature, and a set of questions to keep in mind while generating solutions.</p>
          </div>
          <div className="section-content">
            <h4>Goal</h4>
            <p>The goal of this project is to create a user experience that <b>allows Starbucks customers to maximize the benefits of the Stars rewards program by sharing their Stars.</b></p>
            <p>To reach this goal, it is important to identify potential roadblocks and challenges early on. I asked myself the following to guide me while generating ideas for a solution:</p>
            <ul>
              <li>How will sharing be organized?</li>
              <li>Can people share with more than one person?</li>
              <li>Are people willing to split their rewards?</li>
              <li>What happens if someone decides to no longer share points?</li>
            </ul>
          </div>
          <div className="section-content"> 
              <h4>Map & Focus</h4>
              <p>I created a map showing the current user flow of a customer earning Stars at Starbucks to help me visualize where in the flow the Star sharing feature could be fit in. I began asking “How might we….” questions along each step of the user flow to help me identify possible features, flows, as well as help me choose a target to focus on while developing the sharing feature.</p>
              <p>I wanted to address these questions:</p>
              <ul>
                <li>How will a member share points?</li>
                <li>How will a member choose who to share points with?</li>
                <li>How will a member redeem points?</li>
                <li>How will a member separate their individual points from shared points</li>
                <li>How will a member manage their sharing capability?</li>
              </ul>
              <p>For this project, I decided to focus mainly on the functionality of the Star sharing feature from the point of view of a Starbucks customer (customer A) initiating the sharing.  Showing value and creating an incentive for point sharing are two additional aspects of the project to focus on, however, I will leave that for another time.</p>
          </div>
          <div className="section-content lightbox-container">
            <LightgalleryItem src={SBMap}>
              <img src={SBMap} alt-text="order process map"></img>
            </LightgalleryItem>
          </div>
        </div>
      </div>


       {/* Fourth Section -- Researching Solutions */}

      <div className="project-section-outer ps-four">
        <div className="project-section-inner">
          <div className="section-header"><h3>Researching Solutions</h3></div>
          <div className="section-content">
            <p>With a project goal and focus, I researched various industries with point sharing programs in place to help me generate ideas for a point sharing program for Starbucks. I took notes on how the programs worked, their user flows, and any other aspects that might be helpful in creating a similar experience for Starbucks customers. </p>
          </div>
          <div className ="section-content sc-flex-horizontal">
            <div className="sc-flex-item sc-flex-three card-container sc-flex-margin-right">
              <div className="card-content">
                <div className="centered-txt"><b>Airlines, hotels, and credit cards point sharing</b></div>
                <p>Members can share points, purchase a service for another person or transfer points to another existing member. </p>
                <p>Scandinavian Airlines is a little different. Members can also pool their airline points to redeem for later group trips by inviting existing members by using a member number.</p>
              </div>
            </div>
            <div className="sc-flex-item sc-flex-three card-container sc-flex-margin-right">
              <div className="card-content">
                <div className="centered-txt"><b>Grocery store discount programs</b></div>
                <p> They require only a phone number to prove membership, making it possible for multiple people to take advantage of the program.</p>
              </div>
            </div>
            <div className="sc-flex-item sc-flex-three card-container">
              <div className="card-content">
                <div className="centered-txt"><b>Stamp cards</b></div>
                <p>A little different than the rest but a stamp card makes it possible for multiple people to collect stamps on one card. However, the reward is usually redeemed by one person.</p>
              </div>
            </div>
          </div>
          <div className="section-content">
            <h4>Key Takeaways</h4>
            <p>After looking at these existing point sharing programs, a few features stood out as candidates to build the solution. I decided to incorporate the following:</p>
            <ul>
              <li>Allow Starbucks customers to create groups and pool their Stars</li>
              <li>Allow Starbucks customers to redeem any Stars belonging to the group</li>
              <li>Allow Starbucks customers to have control over what Stars they want to share</li>
            </ul>
          </div>
          <div className="section-content">
            <p>In addition to researching existing point sharing programs, I did a deep dive into the current Starbucks Mobile app. I familiarized myself with the app’s current design system and user flow patterns in order to design a solution that is seamless and in line with Starbucks brand identity.</p>
          </div>
        </div>
      </div>


      {/* Fifth Section --User Flow */}

      <div className="project-section-outer ps-five">
        <div className="project-section-inner">
          <div className="section-header"><h3>User Flow & Storyboard</h3></div>
          <div className="section-content">
            <p>I sketched out a rough solution with the initial pain points and the research findings in mind. To elaborate on the solution, I used a flow chart detailing the process users would go through to share Stars with others, redeem Stars, and manage their groups. </p>
          </div>
          <div className="section-content">
            <LightgalleryItem src={SBFlow}>
              <img src={SBFlow} alt-text="user flow"></img>
            </LightgalleryItem>
          </div>
          <div className="section-content">
            <p>The user flow chart help me work out the logic of each process and create a storyboard of the user experience, setting me up for faster decision making when creating the first prototype.</p>
          </div>
          <div className="section-content">
            <div className="sketch-container">
              <div>
                <LightgalleryItem src={SBStoryboard1}>
                  <img src={ SBStoryboard1 }  alt="day two sketch" />
                </LightgalleryItem>
              </div>
              <div>
                <LightgalleryItem src={SBStoryboard2}>
                  <img src={ SBStoryboard2}  alt="day two sketch" />
                </LightgalleryItem>
              </div>
            </div>
            <div className="sketch-container sketch-uneven">
              <div className="sketch-uneven-left">
                <LightgalleryItem src={SBStoryboard3}>
                  <img src={ SBStoryboard3}  alt="day two sketch" />
                </LightgalleryItem>
              </div>
              <div className="sketch-uneven-right">
                <LightgalleryItem src={SBStoryboard3}>
                  <img src={ SBStoryboard4}  alt="day two sketch" />
                </LightgalleryItem>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Section -- First Iteration & Testing */}

      <div className="project-section-outer ps-six">
        <div className="project-section-inner">
          <div className="section-header"><h3>First Prototype & Testing</h3></div>
          <div className="section-content sc-flex-horizontal">
            <div className="sc-flex-item sc-flex-item-half sc-flex-margin-right">
              <p>The following is the first prototype of the Starbucks Shared Stars feature. This mid-fidelity prototype was used to conduct a round of usability testing. The working prototype is accessible below and through Figma <a href="https://www.figma.com/proto/rFecwd0fdKmj3SFC0uR4OC/Starbucks-Shared-Stars-Wireframes?type=design&node-id=20-2609&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A2609&show-proto-sidebar=1" target="blank">here</a>.</p>
              <p>
              It is recommended that a prototype is tested with five test users but at this time I was only able to find three test users. The main goal for testing was to identify the aspects of the prototype that work, as well as the aspects that might need adjustment.
              </p>

              <p>Testing involved the following tasks:</p>
              <ul>
                <li>Sign up for the rewards sharing program.</li>
                <li>From the Rewards Program Management screen, remove a rewards sharing group member.</li>
                <li>Redeem shared points.</li>
                <li>After an order, choose to apply the order points to your rewards group.</li>
              </ul>
            </div>
            <div className="sc-flex-item sc-flex-item-half centered-txt">
              <img src={SBMidFi} alt-text="mid-fi prototype gif"></img>
            </div>
          </div>
          <div className="section-content">
            <h4>Results</h4>
            <ul>
              <li><b>2 out of 3</b> testers expressed confusion regarding the Stars meter on the Home Page stating it was unclear which Stars it represented, individual or group Stars.</li>
              <li><b>2 out of 3</b> testers felt they need to know more about the benefits of the Stars sharing program before seeing an intimidating "Terms of Use" screen.</li>
              <li><b>All</b> testers felt they needed an indication that group invites are pending.</li>
              <li><b>All</b> testers said it makes more sense to apply order points to the group before user finalizes order.</li>
              <li><b>All</b> testers appreciated the freedom to share or keep their earned Stars once they were part of the Stars sharing program.</li>
            </ul>
          </div>
          <div className="section-content">
              <p>The feedback from usability testing was very helpful in moving forward with the shared stars feature. With the feedback in mind, I created a high fidelity prototype focusing on improving clarity, streamlining flows, and explaining the benefits of the feature.</p>
          </div>
        </div>
      </div> 


      {/* Seventh Section -- Conclusion */}
    
      <div className="project-section-outer ps-seven">
        <div className="project-section-inner">
          <div className="section-header"><h3>Final Design</h3></div>
          <div className="section-content">
              <p>The final product is a feature allowing Starbucks customers to share their Stars with a select group of people on the Starbucks Mobile App. The feature gives customers complete control over who they share with and when they share, allowing them to choose to share Stars with the group when they make a purchase and allowing them to use either their own Stars or the Group Stars when redeeming for rewards.</p> 
          </div>
        </div>
        
        <div className="banner">
          {/* <div className="project-section-inner"> */}
            <div className="section-content sc-flex-horizontal no-margin">
              <div className="sc-flex-item sc-flex-item-half flex-center-content">
                <div className="banner-text centered-txt">
                  <div className="banner-header">Starbucks Shared Stars</div>
                  <div className="large-txt">An easy way to share Stars with friends and family!</div>
                  <div className="button-one large-txt">
                    <div>
                      <a href="https://www.figma.com/proto/rFecwd0fdKmj3SFC0uR4OC/Starbucks-Shared-Stars-Wireframes?type=design&node-id=31-325&scaling=scale-down&page-id=31%3A74&starting-point-node-id=31%3A325&show-proto-sidebar=1" target="blank"> View Prototype</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-flex-item sc-flex-item-half flex-center-content content-background">
                <LightgalleryItem src={SBFinal}>
                  <img src={SBHiFi} alt-text="hi-fi prototype gif"></img>
                </LightgalleryItem>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="project-section-inner">

          <div className="section-content sc-flex-horizontal">
            <div className="sc-flex-item sc-flex-item-half">
              <LightgalleryItem src={SBHiFi1}>
                <img src={ SBHiFi1}  alt="sb-final-design" />
              </LightgalleryItem>
            </div>
            <div className="sc-flex-item sc-flex-item-half">
              <LightgalleryItem src={SBHiFi2}>
                <img src={ SBHiFi2}  alt="sb-final-design" />
              </LightgalleryItem>
            </div>
          </div>
          <div className="section-content sc-flex-horizontal">
            <div className="sc-flex-item sc-flex-item-half">
              <LightgalleryItem src={SBHiFi3}>
                <img src={ SBHiFi3}  alt="sb-final-design" />
              </LightgalleryItem>
            </div>
            <div className="sc-flex-item sc-flex-item-half">
              <LightgalleryItem src={SBHiFi4}>
              <img src={ SBHiFi4}  alt="sb-final-design" />
              </LightgalleryItem>
            </div>
        </div>
        <div className="section-content">
          <h4>Conclusion</h4>
          <p>Starbucks is a great place to get delicious drinks and earn Stars with every purchase for even more delicious drinks. However, some people can't cash in their Stars before they expire, leaving Stars unused. The Starbucks Shared Stars feature aims to help these Starbucks customers by allowing them to use Stars shared by selected friends and family.</p>
          <p>However, having reached a final design, I wonder if my solution is the best way to help customers make the most of their Stars. Generating multiple ideas is one of the main goals of the Design Sprint and that is made possible by conducting the sprint with a team of people. As I worked alone, only a limited number of ideas were generated. Looking back I limited my solution to be "sharing" pretty early on, even before doing any research. This could be because my initial interviews were with the group I was having a conversation with, which comprised mostly of people with significant others, implanting the idea of "sharing" into my mind. Perhaps another route would have been the implementation of notifications, alerting customers of their expiring Stars.</p>
          <p>I will incorporate this into my second round of usability testing on the final prototype, asking test users to rate how useful they think the Starbucks Shared Stars feature would be.</p>
        </div>
      </div> 
    </div>

      

  </div>
  );
}

export default StarbucksSharedPoints;