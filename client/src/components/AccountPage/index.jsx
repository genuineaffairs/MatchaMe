import React, { Component } from 'react';

import PhotoUpload from './PhotoUpload.jsx';
import Tags from './Tags.jsx';
import BioInfo from './BioInfo.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import SideNavbar from './SideNavbar.jsx'
import Button from '../globals/Button/index.jsx';
import Footer from '../globals/Footer/index.jsx';
import style from './AccountPage.css';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      isFirstTimeUser: false,
      currentPage: 'bio',
      tagtype: null,
      renderButton: false
    };
  }

  nextPage = {
    '/onboarding/bio': '/onboarding/tags/user',
    '/onboarding/tags/user': '/onboarding/tags/pref',
    '/onboarding/tags/pref': '/onboarding/photoupload',
    '/onboarding/photoupload': '/dashboard'
  }

  onNextClick = () => {
    let { pathname } = this.props.location;
    this.props.history.push(this.nextPage[pathname])
    this.shouldRenderNextButton(false)
  }

  shouldRenderNextButton = (bool) => {
    let { renderButton } = this.state
    if (renderButton !== bool) {
      this.setState({
        renderButton: bool
      })
    }
  }

  componentWillMount = () => {
    let { page, tagtype } = this.props.match.params;
    this.setState({
      currentPage: page,
      tagtype: tagtype
    })
  }

  render () {
    let pages = {
      bio: <BioInfo renderButton={this.shouldRenderNextButton} />,
      tags: <Tags type={this.props.match.params.tagtype} renderButton={this.shouldRenderNextButton}/>,
      photoupload: <PhotoUpload renderButton={this.shouldRenderNextButton}/>
    }

    return (
      <div>
        {
          this.state.isFirstTimeUser
          ? null
          : <div><Navbar />
            <SideNavbar 
              history={this.props.history}
              currentPage={this.state.currentPage}
              tagtype={this.state.tagtype}
              />
            </div>
          }
        <div className={style.body}>
          <div className={style.holder}>
          {pages[this.props.match.params.page]}
        { 
          this.state.renderButton
          ? <Button 
              className={'save'}
              text={"Save and Continue"}
              onClick={this.onNextClick}
              />
          :
          <Button 
            className={'disabled'}
            text={"Save and Continue"}
            />
        }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Account;
