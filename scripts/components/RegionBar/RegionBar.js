import React from 'react';
import './RegionBar.scss';

export default class RegionBar extends React.Component{
  constructor(){
    super();
  }
  render(){
    let baseTitleAreaWidth = 370;
    //use variable here to implement the 'L'
    if(this.props.isTitle === true){
      return (
        <div className='RegionBar'>
          <div className='RegionBarUpdateArea'>
            <p>{'Update'}</p>
          </div>
          <div className='RegionBarVotersArea'>
            <p>{'Number of Voters'}</p>
          </div>
          <div className='RegionBarFormsArea'>
            <p>{'Number of forms'}</p>
          </div>
          <div className='RegionBarDateArea'>
            <p>{'Last Inpot'}</p>
          </div>
          <div className='RegionBarTitleArea' style={{width:baseTitleAreaWidth}}>
            <p className='tilte'>{'Region'}</p>
          </div>
        </div>
      )
    }
    return (
      <div className='RegionBar'>
        <div className='RegionBarUpdateArea'>
          <p>{this.props.source.update}</p>
        </div>
        <div className='RegionBarVotersArea'>
          <p>{this.props.source.votersCounts}</p>
        </div>
        <div className='RegionBarFormsArea'>
          <p>{this.props.source.formsCounts}</p>
        </div>
        <div className='RegionBarDateArea'>
          <p>{this.props.source.lastData}</p>
        </div>

        <div className='RegionBarTitleArea' style={{width:baseTitleAreaWidth}}>
          <div className='RegionBarTitleIcon'>
            <p>A</p>
          </div>
          <p className='RegionBarTitle'>
            {this.props.source.title}
          </p>
          <div className='fa fa-download fa-lg RegionBarDownloadBtn'/>

          <button
            className='RegionBarExpandBtn'>
            X Distinct    +
          </button>
        </div>
      </div>
    );
  }
}

RegionBar.defaultProps = {
  isTitle: false,
  canExpand: false,
  areaLevel: 0
};
