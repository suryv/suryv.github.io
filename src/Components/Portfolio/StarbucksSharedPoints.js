import '../../App.css';

import SBMap from "../../Assets/sb_map.png";
import SBSketch1 from "../../Assets/sb_sketch1.png"
import SBSketch2 from "../../Assets/sb_sketch2.png"
import SBSketch3 from "../../Assets/sb_sketch3.png"
import SBStoryboard1 from "../../Assets/sb_storyboard1.png"
import SBStoryboard2 from "../../Assets/sb_storyboard2.png"
import SBStoryboard3 from "../../Assets/sb_storyboard3.png"
import SBStoryboard4 from "../../Assets/sb_storyboard4.png"
import SBFlow from "../../Assets/sb_flows1.png"
import SBLoFi from "../../Assets/sb_lofi.png"
import SBMainStar from "../../Assets/sb_mainstar.png"
import SBHiFi from "../../Assets/sb_hifi.png"




const StarbucksSharedPoints= () => {
  return (
    <div className="project-container starbucks-sp">

      {/* First Section -- Intro Image & info */}
      <div className="project-section-outer project-intro">
        <div className="project-section-inner">
          <div className="section-header"><h1>Starbucks Shared Rewards</h1></div>
          <div className="section-content sc-flex-horizontal">
            <div className="project-intro-img sc-flex-item">
              <img src={ SBMainStar }  alt="project main" />
            </div>
            <div className="sc-flex-item section-link">
              <ul>
                <li>Concept</li>
                <li>Solo Project</li>
                <li>Role: UX/UI Designer</li>
                <li>Timeline: One Week</li>
                <li>Platform: Mobile</li>
                <li>Tools & Methods: Pencil/Paper, Figma, <a href="https://creative.starbucks.com/" target="blank">Starbucks Design System Guide</a>, <a href="http://www.gv.com/sprint/" target="blank">Design Sprint</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section -- Project Overview */}
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h2>Project Overview</h2></div>
          <div className="section-content">
            <p>Starbucks offers reward points to their customers through the Starbucks mobile app. These points can be redeemed for drinks, food, and other Starbucks merchandise. The points expire, are redeemable only if a customer has enough to cash in, and are only available to the customer that earned the points. For some customers, for example those that do not use the app frequently, reward points go unredeemed.  </p>
            <p>Although this was a solo project, I decided to follow the Design Sprint process. With this process, I explored how customers can get the most of their points through group sharing.</p>
            <p>Here is a quick overview of the Design Sprint:</p>
            <div>
              <ul>
                <li>Monday (Day 1): set a goal, map out the problem, and pick a target to focus on.</li>
                <li>Tuesday (Day 2): research existing solutions and sketch own solutions on paper.</li>
                <li>Wednesday (Day 3): turn ideas into testable storyboards.</li>
                <li>Thursday (Day 4): build a prototype.</li>
                <li>Friday (Day 5): test prototype with people.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section -- Day 1 */}
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h2>Day 1</h2></div>
          <div className="section-content">
            <p>I started Day 1 by stating a goal for the project and asking myself <em>"what could fail or be a roadblock?"</em>.</p>
            <div>
              <h4>Goal</h4>
              <div>The main long-term goal of this project is to allow Starbucks customers to maximize the benefits of their rewards points.</div>
            </div>
            <div>
              <h4>Sprint Questions</h4>
              <div>
                <ul>
                  <li>Will people be able to modify their groups?</li>
                  <li>Can people belong to more than one sharing group?</li>
                  <li>Are people willing to split their rewards?</li>
                  <li>What happens if someone decides to no longer be in a group/share points?</li>
                  <li>Would it be easier to just transfer points from one member to another?</li>
                </ul>
              </div>
            </div>
            <div>
              <h4>Map & Focus</h4>
              <p>I created a map to visualize the flow of group sharing from a Starbucks customer and listed "How might we...." questions along each path to help me identify possible features, flows, as well as help me choose a target to focus on. For this project, I decided to focus mainly on the functionality of point sharing from the point of view of a Starbucks member initiating the sharing.</p>
              <p>I wanted to address these questions:</p>
              <ul>
                <li>How will a member create a group?</li>
                <li>How will a member invite other members to a group?</li>
                <li>How will a member redeem points?</li>
                <li>How will a member separate their individual points from group points?</li>
                <li>How will a member manage their group membership?</li>
              </ul>
              <p> Creating value for point sharing is another important focus, however, I will leave that for another time. </p>
              <div>
                <img src={ SBMap }  alt="project map" className="picture-inner-width"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section -- Day 2 */}
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h2>Day 2</h2></div>
          <div className="section-content">
            <div>
              <p>For Day 2 I did some research on existing point sharing programs. I made notes on how these programs work, their product flow, and what I thought were good ideas.</p>
              <ul>
                <li>Airlines, hotels, and credit cards point sharing - Members can share points if they want. They can  purchase a service for another person or transfer points to another existing member.</li>
                <li>Scandanavian Airlines - Members can pool their airline points to redeem for later group trips by inviting existing members by using a member number.</li>
                <li>Stamp cards - A little different than the rest but a stamp card makes it possible for multiple people to collect stamps on one card. However, the reward is usually redeemed by one person.</li>
                <li>Grocery store member discount programs - They require only a phone number to prove membership, making it possible for multiple people to take advantage of the program.</li>
              </ul>
              <p>I also went through the Starbucks Mobile App to familiarize myself with the app design system and flow patterns.</p>
              <p>I sketched out a rough solution and as I was working alone, this is the solution I went with.</p>
              <div className="sketch-container">
                <div><img src={ SBSketch1 }  alt="day two sketch" /></div>
                <div><img src={ SBSketch2 }  alt="day two sketch" /></div>
                <div><img src={ SBSketch3 }  alt="day two sketch" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Fourth Section -- Day 3 */}
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h2>Day 3</h2></div>
          <div className="section-content">
            <div>
              <p>Using my sketches from the previous day, I created a user flow detailing the following processes: creating a shared rewards group, redeeming points, collecting points, and managing the group. I then used the user flows and my Day 2 sketches to create storyboard detailing my solution. </p>
            </div>
            <div>
              <img src={ SBFlow }  alt="user flow" className="picture-inner-width"/>
            </div>
            <div className="sketch-container">
              <div><img src={ SBStoryboard1 }  alt="day two sketch" /></div>
              <div><img src={ SBStoryboard2 }  alt="day two sketch" /></div>
            </div>
            <div className="sketch-container sketch-uneven">
              <div className="sketch-uneven-left"><img src={ SBStoryboard3 }  alt="day two sketch"/></div>
              <div className="sketch-uneven-right"><img src={ SBStoryboard4 }  alt="day two sketch"/></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section -- Day 4 */}
      <div className="project-section-outer ps-five">
        <div className="project-section-inner">
          <div className="section-header"><h2>Day 4</h2></div>
          <div className="section-content section-link">
            <div>
              <p>Day 4 was dedicated to creating a prototype for testing. I used Figma to create a mid-fidelity prototype of my solution. You can access the working prototype <a href="https://www.figma.com/proto/rFecwd0fdKmj3SFC0uR4OC/SB_Sharing?node-id=20-2609&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A2609" target="blank">here</a>.</p>
            </div>
            <div>
              <img src={ SBLoFi }  alt="prototype" className="picture-inner-width"/>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Section -- Day 5 */}
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h2>Day 5</h2></div>
          <div className="section-content">
            <div>
              <p>With a working prototype, I moved on to testing this prototype. It is recommended that a prototype is tested with five test users but at this time I was only able to find three test users. Tests were done over Zoom and one was done in person. The main goal for testing was to identify the aspects of the prototype that work, as well as the aspects that might need adjustment. After a quick intro to the point sharing feature, I asked the test user to go through three tasks:</p>
              <div>
                <ul>
                  <li>Sign up for the rewards sharing program.</li>
                  <li>From the Rewards Program Management screen, remove a rewards sharing group member.</li>
                  <li>Redeem shared points.</li>
                  <li>After an order, choose to apply the order points to your rewards group.</li>
                </ul>
              </div>
              <p>Here are the findings:</p>
              <div>
                <ul>
                  <li>Users need an indication that invites are pending.</li>
                  <li>On the Home Page, if someone is part of a group, it is difficult to know what point count corresponds to the point meter.</li>
                  <li>Users need to know the benefits of the rewards sharing program before seeing an intimidating "Terms of Use" screen.</li>
                  <li>It makes more sense to apply order points to the group before user finalizes order.</li>
                  <li>Users appreciate the freedom to choose if to share their points or keep under their individual count.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>      

      {/* Fifth Section -- Conclusion */}
      <div className="project-section-outer">
        <div className="project-section-inner">
          <div className="section-header"><h2>Conclusion & Final Thoughts</h2></div>
          <div className="section-content section-link">
            <div>
              <p>The feedback from the user tests was very helpful in moving forward with the shared rewards feature. The test users all expressed a desire to show more information on the value of the program. That was one think I knew I had to focus on but left out for the first prototype. Looking back, I should have included it as part of the initial solution. With that in mind, I reworked some of the flows and then moved on to a high fidelity prototype. You can access the updated prototype  <a href="https://www.figma.com/proto/rFecwd0fdKmj3SFC0uR4OC/SB_Sharing_Wireframes?node-id=31-325&scaling=scale-down&page-id=31%3A74&starting-point-node-id=31%3A325&show-proto-sidebar=1" target="blank">here</a>.</p>
            </div>
            <div>
              <img src={ SBHiFi}  alt="final protype" className="picture-inner-width"/>
            </div>
          </div>
        </div>
      </div> 

    </div>
  );
}

export default StarbucksSharedPoints;