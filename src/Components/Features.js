import React from 'react'

const Features = () => {
  return (
    <> 
   <div id="features">
    <h2 className='featuresheading'data-aos="fade-left" ><u>Features</u> </h2>
   </div> 
   <div className='features'>
       
      <div className="featurecard" data-aos="fade-right">
        <div className="strengthcard"></div>
        <div className="description"><h4>STRENGTH</h4>Our strength training facility is dedicated to helping you build and enhance your muscle strength. 
        </div>
      </div>
      <div className="featurecard" data-aos="fade-up">
        <div className="cardiocard"></div>
        <div className="description"><h4>CARDIO</h4>Our cardio facility is equipped with the latest cardiovascular exercise machines to help you improve your heart health, stamina, and overall fitness.</div>
      </div>
      <div className="featurecard" data-aos="fade-left">
        <div className="weightliftingcard"></div>
        <div className="description"><h4>WEIGHTLIFTING</h4>Equipped with the latest and most robust weightlifting equipment,
         we provide an ideal environment for anyone looking to enhance their strength and build muscle.
        </div>
      </div>
    </div>
    </>
  )
}

export default Features
