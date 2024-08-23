import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h1>About Us</h1>
            <h2>Learning React</h2>
            <User/>
            <UserClass name={"raghib"} />
        </div>
    )
}

export default About;