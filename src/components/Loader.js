import loadingGif from "../loading.gif"

import React, { Component } from 'react'

export class Loader extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src={loadingGif} alt="loader" />
      </div>
    )
  }
}

export default Loader