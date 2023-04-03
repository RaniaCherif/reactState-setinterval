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
        <div className="skills">
          {this.state.shows ? (
            <>
              <span class="pro">PRO</span>
              <h2>Hello i'm : {this.state.Person.fullName}</h2>
              <h3>My bio is : {this.state.Person.bio}</h3>
              <h style={{ color: "bisque" }}>
                My last profession is : {this.state.Person.profession}
              </h>
              <img classeName="round" src={this.state.Person.imgSrc}></img>
              <h3>Time:{this.state.mountingTime}</h3>
            </>
          ) : null}
          <div class="buttons" onClick={this.change}>
            <button class="primary">Profile</button>
            <button class="primary ghost">Follow Me</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
