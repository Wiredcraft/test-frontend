import React from 'react';
import { FontIcon, IconButton, FlatButton } from 'material-ui';

import './RegionBar.scss';

export default class RegionBar extends React.Component{
  constructor(){
    super();
  }
  render(){
    let hoverColor = '#897ad0';
    if(this.props.isTitle === true){
      return (
        <div className='RegionBar'>
          <div className='RegionBarTitleArea'>
            <p>{'Region'}</p>
          </div>
          <div className='RegionBarDateArea'>
            <p>{'Last Inpot'}</p>
          </div>

          <div className='RegionBarFormsArea'>
            <p>{'Number of forms'}</p>
          </div>
          <div className='RegionBarVotersArea'>
            <p>{'Number of Voters'}</p>
          </div>
          <div className='RegionBarUpdateArea'>
            <p>{'Update'}</p>
          </div>
        </div>
      )
    }
    return (
      <div className='RegionBar'>
        <div className='RegionBarTitleArea'>
          <FontIcon className='RegionBarTitleIcon'
            style={{
              fontSize:'16px',
              color: '#fff'}}
          >
            A
          </FontIcon>
          <p className='RegionBarTitle'>
            {this.props.source.title}
          </p>
          <FontIcon className='fa fa-download RegionBarDownloadBtn'
            style={{color:'#fff'}}
            hoverColor={hoverColor}/>
          <FlatButton  style={{
              marginTop: '13px',
              marginRight: '12px',
              backgroundColor: '#f0f2f8',
              lineHeight: '20px',
              textTransform: 'initial'}}
            hoverColor={hoverColor}
            className='RegionBarExpandBtn' label='X Distinct    +'>
          </FlatButton>
        </div>
        <div className='RegionBarDateArea'>
          <p>{this.props.source.lastData}</p>
        </div>

        <div className='RegionBarFormsArea'>
          <p>{this.props.source.formsCounts}</p>
        </div>
        <div className='RegionBarVotersArea'>
          <p>{this.props.source.votersCounts}</p>
        </div>
        <div className='RegionBarUpdateArea'>
          <p>{this.props.source.update}</p>
        </div>
      </div>
    );
  }
}

RegionBar.defaultProps = {
  isTitle: false
};
