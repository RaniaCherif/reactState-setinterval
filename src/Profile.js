import React from "react";
import "./profile.css";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        imgSrc: "profile.jpg",
        fullName: "Rania Cherif",
        bio: "Developper FullStack (MEARN)",
        profession: "Developper",
        shows: true,
        mountingTime: 0,
      },
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ mountingTime: (this.state.mountingTime += 1) });
    }, 1000);
  }

  // componentDidMount() {
  // this.setState({ brand: "peugot" });
  //}
  componentDidUpdate() {
    console.log("hello");
  }
  change = () => {
    this.setState({ shows: !this.state.shows });
    this.setState({ mountingTime: 0 });
  };
  render() {
    return (
      <div className="card-container">
        {this.state.shows ? (
          <>
            <span class="pro">PRO</span>
            <img className="round" src={this.state.Person.imgSrc}></img>
            <h3>Hello i'm : {this.state.Person.fullName}</h3>
            <h6>My bio is : {this.state.Person.bio}</h6>
            <h6>My last profession is : {this.state.Person.profession}</h6>
            <h3>Time:{this.state.mountingTime}</h3>
            <div class="skills">
              <h6>Skills</h6>
              <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
          </>
        ) : null}
        <div class="button" onClick={this.change}>
          <button class="primary">Profile</button>
          <button class="primary ghost">Follow Me</button>
        </div>
      </div>
    );
  }
}
export default Profile;
