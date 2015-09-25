import React from 'react';
import './RegionBar.scss';

export default class RegionBar extends React.Component{
  constructor(){
    super();
  }
  render(){
    let baseTitleAreaWidth = 365;
    let indent = 30;
    let resultTitleAreaWidth = baseTitleAreaWidth - indent * this.props.areaLevel;
    let expandText =  this.props.areaLevel === 0? 'District' : 'Township'
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
          <div className='RegionBarTitleArea' style={{width: baseTitleAreaWidth}}>
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

        <div className='RegionBarTitleArea' style={{width:resultTitleAreaWidth}}>
          <div className='RegionBarTitleIcon'>
            <p>A</p>
          </div>
          <p className='RegionBarTitle'>
            {this.props.source.title}
          </p>
          <div className='fa fa-download fa-lg RegionBarDownloadBtn'/>
          {
            this.props.canExpand === false? '':
            <button
              className='RegionBarExpandBtn'>
              <span className='RegionBarExpandBtnNumBlock'>{this.props.subItemCount}</span>
              <span className='RegionBarExpandBtnAreaBlock'>{expandText}</span>
              <span className='fa fa-plus RegionBarExpandBtnIconBlock'></span>
            </button>
          }
        </div>
        {
          this.props.areaLevel === 0? '':
          <svg height="10" width="10" className="lIcon">
            <polygon points="0,0 2,0 2,8, 10,8 10,10, 0,10" />
          </svg>
        }
      </div>

    );
  }
}

RegionBar.defaultProps = {
  isTitle: false,
  canExpand: false,
  subItemCount: 0,
  areaLevel: 0
};
