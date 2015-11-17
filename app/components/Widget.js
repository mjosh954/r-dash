import React, {PropTypes, Component} from 'react';
import Listing from './Listing';
import WidgetTitle from './WidgetTitle';
import WidgetContainer from './WidgetContainer';

class Widget extends Component {

  render () {
    const listings = this.props.subreddit.data.children.slice(0, 5)
    .map((listing) => <Listing key={listing.data.id} title={listing.data.title} />);

    return (
      <WidgetContainer>
        <ul className='list-group'>
          <WidgetTitle
            key={this.props.key}
            title={this.props.subreddit.title}
            removeSubredditClick={this.props.removeSubreddit}/>
          {listings}
        </ul>
      </WidgetContainer>
    );
  }

}

Widget.propTypes = {
  key: PropTypes.string,
  subreddit: PropTypes.object,
  removeSubreddit: PropTypes.function
};

export default Widget;
