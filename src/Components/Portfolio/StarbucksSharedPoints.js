import '../../App.css';

import projectImageFiller from "../../Assets/projectimagefiller.jpg";
import SBMap from "../../Assets/sb_map.png";
import SBSketch1 from "../../Assets/sb_sketch1.png"
import SBSketch2 from "../../Assets/sb_sketch2.png"
import SBSketch3 from "../../Assets/sb_sketch3.png"

const StarbucksSharedPoints= () => {
  return (
    <div className="project-container starbucks-sp">

      {/* First Section -- Intro Image & info */}
      <div className="project-section-outer project-intro">
        <div className="project-section-inner">
          <div className="section-header"><h1>Starbucks Shared Rewards</h1></div>
          <div className="section-content sc-flex-horizontal">
            <div className="project-intro-img sc-flex-tiem">
              <img src={ projectImageFiller }  alt="project main" />
            </div>
            <div className="sc-flex-item">
              <ul>
                <li>Concept</li>
                <li>Solo Project</li>
                <li>Role: UX/UI Designer</li>
                <li>Timeline: One Week</li>
                <li>Platform: Mobile</li>
                <li>Tools & Methods: Pencil/Paper, Figma, Starbucks Design System Guide, Design Sprint</li>
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
                <li>Thursday (Day 4): build a high-fidelity prototype.</li>
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
              <p>I created a map to visualize the flow of group sharing from a Starbucks customer and listed "How might we...." questions along each path to help me identify possible features, flows, as well as help me choose a target to focus on.</p>
              <p>For this project, I decided to focus mainly on the functionality of point sharing. Creating value for point sharing is another important focus, however, I will leave that for another time after the flow of point sharing is in place. </p>
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
              <p>For Day 2 I did some research on existing point sharing programs.I made notes on how these programs work, their product flow, and what I thought were good ideas.</p>
              <ul>
                <li>Airlines, hotels, and credit cards point sharing - Members can share points if they want. They can  purchase a service for another person or transfer points to another existing member.</li>
                <li>Scandanavian Airlines - Members can pool their airline points to redeem for later group trips by inviting existing members by using a member number.</li>
                <li>Stamp cards - A little different than the rest but a stamp card makes it possible for multiple people to collect stamps on one card. However, the reward is usually redeemed by one person.</li>
                <li>Grocery store member discount programs - They require only a phone number to prove membership, making it possible for multiple people to take advantage of the program.</li>
              </ul>
              <p>I sketched out my own solution and as I was working alone, this is the solution I went with.</p>
              <div className="sb-sketch-container">
                <div><img src={ SBSketch1 }  alt="day two sketch" /></div>
                <div><img src={ SBSketch2 }  alt="day two sketch" /></div>
                <div><img src={ SBSketch3 }  alt="day two sketch" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default StarbucksSharedPoints;