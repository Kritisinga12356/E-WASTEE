import React from 'react';

function Hero() {
    return (
<section className='container-fluid' id="support">
<div className='p-3 ' id="spportt">
    <h4>Support Portal </h4>
    <a href=' '>E-Waste</a>
</div>
<div className=' row p-5 m-3 ' >
  <div className=' col-6 p-5'>
    <h1 className='fs-3'>E-Waste refers to discarded electrical and electronic devices</h1>
    <input placeholder="Includes computers,phones,TVs & applications " /><br/>
    <a href=' '>Track account opening</a>
    <a href=' '>Track segment activation</a>
    <a href=' '>Intraday margins</a>
    <a href=' '>Kite user manual</a>
  </div>
   <div className=' col-6 p-5'>
    <h1 className="fs-3">Featured</h1>
    <ol>
  <li>  <a href=' ' id="dd">Promote recycling and reuse of electronics</a></li>
   <li> <a href=' ' id="dd">Safe disposal methods and certified facilities</a></li></ol>
   </div>
</div>

</section>
    );
}

    export default Hero;