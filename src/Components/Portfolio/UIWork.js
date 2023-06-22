import '../../App.css';
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryItem } from "react-lightgallery";

import UI1 from "../../Assets/UI1.jpg"
import UI2 from "../../Assets/UI2.png"
import UI3 from "../../Assets/UI3.png"
import UI3a from "../../Assets/UI3a.png"
import UI4 from "../../Assets/UI4.png"
import UI4a from "../../Assets/UI4a.png"
import UI5 from "../../Assets/UI5.png"
import UI6 from "../../Assets/UI6.png"
import UI6a from "../../Assets/UI6a.png"
import UI7 from "../../Assets/UI7.png"
import UI8 from "../../Assets/UI8.png"
import UI9 from "../../Assets/UI9.png"

const UIWork= () => {
  return (
    <div className="sub-content ui-work">
      <div className="ui-work-text">
        <h2>Selected UI designs</h2>
        <div className="large-txt">Click on images to see the full designs. Visit my <a href="https://www.dribbble.com/sury_villalobos" target="_blank">Dribbble profile</a> to see the rest of the collection.</div>
      </div>

      {/* Gallery broken into Rows with Two Columns */}
      <div className="ui-gallery">

        {/* ROW 1 */}
        <div className="ui-gallery-row">
          <div className="ui-gallery-column">
          <LightgalleryItem src={UI9}>
        <img src={UI9}></img>
        </LightgalleryItem> 
          </div>
          <div className="ui-gallery-column">
          <LightgalleryItem src={UI3}>
        <img src={UI3a}></img>
      </LightgalleryItem> 
          </div>
        </div>

        {/* ROW 2 */}
        <div className="ui-gallery-row">
   <div className="ui-gallery-column">
            <LightgalleryItem src={UI5}>
              <img src={UI5}></img>
            </LightgalleryItem> 
          </div>
          <div className="ui-gallery-column">
            <LightgalleryItem src={UI2}>
          <img src={UI2}></img>
          </LightgalleryItem>
            </div>
        
        </div>

         {/* ROW 3 */}
        <div className="ui-gallery-row">
          <div className="ui-gallery-column">
          <LightgalleryItem src={UI6}>
        <img src={UI6a}></img>
      </LightgalleryItem> 
          </div>
        <div className="ui-gallery-column">
          <LightgalleryItem src={UI4}>
        <img src={UI4a}></img>
        </LightgalleryItem>
          </div>
          
        </div>

 {/* ROW 4*/}
        <div className="ui-gallery-row">
           <div className="ui-gallery-column">
          <LightgalleryItem src={UI1}>
        <img src={UI1}></img>
      </LightgalleryItem> 
          </div> 
          <div className="ui-gallery-column">
          <LightgalleryItem src={UI7}>
        <img src={UI7}></img>
      </LightgalleryItem> 
          </div>
        
        </div>

 {/* ROW 5*/}
        <div className="ui-gallery-row">
          <div className="ui-gallery-column">
          <LightgalleryItem src={UI8}>
        <img src={UI8}></img>
      </LightgalleryItem> 
          </div>
          <div className="ui-gallery-column">
          </div>
        </div>
      </div>
    </div>
  )
}

export default UIWork;