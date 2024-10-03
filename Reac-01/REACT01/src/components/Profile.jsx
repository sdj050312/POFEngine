import "./profile.css";

function Profile(prof) {

    return (
           
         <div className="imgFile">
            <h1>{prof.name}</h1>
            <img src={prof.image} alt=""  className = "img"/>
            <p>{prof.title}</p>
        </div>
      
    );

}
export default Profile;