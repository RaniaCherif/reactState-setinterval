import React from "react";
import "./Car.css";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Rania Cherif",
        bio: "Developper FullStack (MEARN)",
        imgSrc:
          "https://th.bing.com/th/id/OIP.LSXD1bPd5DcA_UIJ2QeDewHaEK?pid=ImgDet&rs=1",
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
            <h2>Hello i'm : {this.state.Person.fullName}</h2>
            <h3>My bio is : {this.state.Person.bio}</h3>
            <h3 style={{ color: "bisque" }}>
              My last profession is : {this.state.Person.profession}
            </h3>
            <footer>
              <p>
                Created with <i class="fa fa-heart"></i> by
                <a target="_blank" href="https://florin-pop.com">
                  Florin Pop
                </a>
                - Read how I created this
                <a
                  target="_blank"
                  href="https://florin-pop.com/blog/2019/04/profile-card-design"
                >
                  here
                </a>
                - Design made by
                <a
                  target="_blank"
                  href="https://dribbble.com/shots/6276930-Profile-Card-UI-Design"
                >
                  Ildiesign
                </a>
              </p>
            </footer>
            <img classeName="round" src={this.state.Person.imgSrc}></img>
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
        <div class="buttons" onClick={this.change}>
          <button class="primary">Profile</button>
          <button class="primary ghost">Follow Me</button>
        </div>
      </div>
    );
  }
}
export default Profile;
