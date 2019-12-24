import React, { Component } from "react";
import { Button, Card, List, Divider } from "@material-ui/core";
import Axios from "axios";
// import HighlightOffIcon from "@material-ui/icons/HighlightOff";

class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      url: "",
      loading: false,
      uploading: false,
      // deleteIcon: false
    };
  }

  // component will mount to get all the image urls from db:
  UNSAFE_componentWillMount() {
    Axios.get("http://15.206.140.31:8001/allFiles")
      .then(data => {
        this.setState({ files: data.data });
      })
      .catch(err => console.error(err));
  }

  // this function work after selecting an image and it uploads the image to `coudinary` and recives
  // an url for the image and set that to state
  onChangeHandler = async event => {
    const files = event.target.files[0];
    if (files.type.slice(0, 5) === "image") {
      const data = new FormData();
      data.append("file", files);
      data.append("upload_preset", "galaryApp");
      this.setState({ loading: true });
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dtr3wqhya/image/upload",
        {
          method: "POST",
          body: data
        }
      );
      const file = await res.json();

      this.setState({ url: file.secure_url, loading: false, uploading: true });
    } else {
      window.alert("wrong file type \n Please choose an image");
    }
  };

  // this function will work after clinking submit button and it sends the url to backend
  // and get the list of url from database
  onClickHandler = () => {
    if (this.state.url) {
      this.setState({ uploading: false });
      Axios.post("http://15.206.140.31:8001/uploadFile", { url: this.state.url })
        .then(data => {
          const allFiles = data.data;
          this.setState({ url: "", files: allFiles });
        })
        .catch(err => console.log(err));
    } else if (!this.state.url && this.state.loading) {
      window.alert(
        " Please wait for a while... \n while the image is uploading. :)"
      );
    } else {
      window.alert("Please choose an image first");
    }
  };
  // onHover = () => {
  //   this.setState({ deleteIcon: true });
  // };
  // onHoverOut = () => {
  //   this.setState({ deleteIcon: false });
  // };
  // deleteHandler=()=>{
  //   console.log('delete');
    
  // }

  render() {
    // creating object for image list to listing the images
    const images = this.state.files.map((e, i) => {
      return (
        <Card key={i}
          style={{ margin: 10 }}
          // onMouseOver={this.onHover}
          // onMouseOut={this.onHoverOut}
        >
          {// {this.state.deleteIcon ? (
          //   <HighlightOffIcon
          //   style={{ float: "right", cursor: "pointer" }} />
          // ) : (
          //   <p></p>
          // )}
        }
          <List key={i}>
            <a href={e.url} rel="noopener noreferrer" target="_blank" style={{ cursor: "default" }}>
              <img src={e.url} alt="Img" width="340px" height="200px" />
            </a>
          </List>
        </Card>
      );
    });

    // final return to render the page
    return (
      <div>
        {this.state.loading ? <h1>Uploading....</h1> : <p></p>}
        {this.state.uploading ? <h2>File is ready to submit...</h2> : <p></p>}
        <input type="file" onChange={this.onChangeHandler} />
        <Button
          style={{ background: "green", color: "white" }}
          onClick={this.onClickHandler}
        >
          Submit
        </Button>
        <Divider />
        {/* object to list the images / files */}
        <div style={{ display: "flex", flexWrap: "wrap" }}>{images}</div>
      </div>
    );
  }
}

export default Files;
