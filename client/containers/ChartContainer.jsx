import React from 'react'
import { connect } from 'react-redux';

import store from '../store'

import Chart from '../components/Chart'

const mapState = state => ({
  //destructure state object
  ...state
})

export default connect(
  mapState,
  null
)( Chart );