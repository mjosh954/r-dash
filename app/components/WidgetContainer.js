import React, {PropTypes, Component} from 'react';

class WidgetContainer extends Component {

  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
        <div className='container col-md-4'>
          {this.props.children}
        </div>
    );
  }
}

export default WidgetContainer;
