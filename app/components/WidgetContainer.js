import React, {PropTypes, Component} from 'react';

class WidgetContainer extends Component {

  render () {
    return (
        <div className='container col-md-4'>
          {this.props.children}
        </div>
    );
  }
}

WidgetContainer.propTypes = {
  children: PropTypes.element
};

export default WidgetContainer;
