import React, {Component} from 'react';
import Listing from './Listing';
import WidgetTitle from './WidgetTitle';
import WidgetContainer from './WidgetContainer';

export default class Widget extends Component {
  constructor(props){
    super(props);
  }

  render() {

    var listings = this.props.subreddit.data.children.slice(0, 5)
    .map((listing) => <Listing key={listing.data.id} title={listing.data.title} />)

    return (
      <WidgetContainer>
          <ul className='collection with-header'>
            <WidgetTitle
              key={this.props.key}
              title={this.props.subreddit.title}
              removeSubredditClick={this.props.removeSubreddit}/>
            {listings}
          </ul>
        </WidgetContainer>
    )
  }

}
