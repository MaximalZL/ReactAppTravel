import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import MyCard, { Stuff } from "./MyCard";
import Preloader from "../gif/preloader.gif";

const allStuffNet: Stuff[] = [
  {
    title: "Первый товар",
    description: "Very good stuff",
  },
  {
    title: "Second stuff",
    description: "Very Very good stuff",
    price: 50,
  },
  {
    title: "Another one",
    description: "Not Very good stuff",
    price: 1,
  },
  {
    title: "Another one +",
    description: "Not Very good stuff",
    price: 15,
  },
];

interface IState {
  allStuff: Stuff[];
}

export default class MyCards extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      allStuff: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ allStuff: allStuffNet });
    }, 5000);
  }

  deleteElement = (stuff: Stuff) => {
    console.log(`Will delete! ${JSON.stringify(stuff)}`);
    const filtered = this.state.allStuff.filter(
      (item: Stuff) => item !== stuff
    );
    this.setState({ allStuff: filtered });
  };

  render() {
    return (
      <>
        {this.state.allStuff.length > 0 ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={1}>
                {this.state.allStuff.map((item: Stuff) => {
                  return (
                    <MyCard
                      key={item.title}
                      stuff={item}
                      onDelete={this.deleteElement}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <img src={Preloader} />
        )}
      </>
    );
  }
}
