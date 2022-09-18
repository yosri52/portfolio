import React  from "react";
const informations = {
   email : "BenHsanYosri@gmail.com",
   phone : "+216 23998194",
   city  : "sfax",
   street :"sidi mansour" ,
   postalcode :"3065",
}
function Contact () {
   return (
    
    <div> 
      <div className="contact-item">
      <i className="fa-sharp fa-solid fa-envelope contact-icon"></i>
       <p className="icon"> {informations.email}</p>  
      </div>
      <div className="contact-item">
      <i className="fa-solid fa-phone contact-icon"></i>
       <p className="icon"> {informations.phone}</p> 
      </div>
      <div className="contact-item">
      <i class="fa-solid fa-location-dot contact-icon "></i>
         <p className="icon"> {informations.street} </p>

      </div>
      </div>
      
   ) 
}
 
export default Contact 