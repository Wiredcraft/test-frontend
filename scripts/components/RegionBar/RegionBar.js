import React from 'react';
import './RegionBar.scss';
import VoteInfoActionCreator from '../../actions/VoteInfoActionCreator';

export default class RegionBar extends React.Component{
  constructor(){
    super();
  }
  _expand(){
    VoteInfoActionCreator.expandList(2);
  }
  render(){
    let baseTitleAreaWidth = 365;
    let indent = 30;
    let resultTitleAreaWidth = baseTitleAreaWidth - indent * this.props.areaLevel;
    let expandText = this.props.areaLevel === 0 ? this.props.areaTitles[1] : this.props.areaTitles[2];
    let areaLetters = this.props.areaTitles.map((item) =>{
      return item.substr(0, 1);
    });
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
      );
    }
    return (
      <div className='RegionBar'>
        <div className='RegionBarUpdateArea'>
          <p>{this.props.update}</p>
        </div>
        <div className='RegionBarVotersArea'>
          <p>{this.props.votersCounts}</p>
        </div>
        <div className='RegionBarFormsArea'>
          <p>{this.props.formsCounts}</p>
        </div>
        <div className='RegionBarDateArea'>
          <p>{this.props.lastData}</p>
        </div>

        <div className='RegionBarTitleArea' style={{width: resultTitleAreaWidth}}>
          <div className='RegionBarTitleIcon'>
            <p>{areaLetters[this.props.areaLevel]}</p>
          </div>
          <p className='RegionBarTitle'>
            {this.props.title}
          </p>
          <div className='fa fa-download fa-lg RegionBarDownloadBtn'/>
          {
            this.props.canExpand === false ? '' :
            <button
              className='RegionBarExpandBtn' onClick={this._expand}>
              <span className='RegionBarExpandBtnNumBlock'>{this.props.subItemCount}</span>
              <span className='RegionBarExpandBtnAreaBlock'>{expandText}</span>
              <span className='fa fa-plus RegionBarExpandBtnIconBlock'></span>
            </button>
          }
        </div>
        {
          this.props.areaLevel === 0 ? '' :
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
  areaLevel: 0,
  areaTitles: ['Level1', 'Level2']
};
