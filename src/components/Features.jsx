import React from 'react'
import img1 from '../images/a2.jpeg'
import img2 from '../images/f2.jpeg'
import img3 from '../images/f3.jpeg'


const Features = () => {
  return (
    <section className='w-full max-w-[1024] flex flex-col lg:flex-row gap-y-5 justify-between gap-x-5 container mx-auto z-20'>
        <div className="featureitems">
            <img src={img1} alt="" className='featuresImg'/>
            <div className="featuresTitles">
                <h1>lagos</h1>
                <h4>234 properties</h4>
            </div>
        </div>

        <div className="featureitems">
            <img src={img2} alt="" className='featuresImg'/>
            <div className="featuresTitles">
                <h1>abuja</h1>
                <h4>234 properties</h4>
            </div>
        </div>

        <div className="featureitems">
            <img src={img3} alt="" className='featuresImg'/>
            <div className="featuresTitles">
                <h1>calabar</h1>
                <h4>234 properties</h4>
            </div>
        </div>


    </section>
  )
}

export default Features