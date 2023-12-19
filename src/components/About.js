// import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <>
      <h1>This is About us page!!</h1>
      {/* <User name={"Rahul Kumar (function)"} /> */}
      <UserClass name={"Rahul Kumar (class)"} location={"Khagaria (class)"} />
    </>
  );
};

export default About;
