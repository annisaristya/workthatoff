"use strict";

var React = require('react');
var AboutYou = require('./aboutYou');
var AboutFood = require('./aboutFood');

var Form = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="main-form col-xs-12 col-sm-8 col-sm-push-2">
          <AboutYou
            max={this.props.max}
            lengthLarge={this.props.lengthLarge}
            lengthSmall={this.props.lengthSmall}
            aboutAnswers={this.props.aboutAnswers}
            setAboutState={this.props.setAboutState}
            goNext={this.props.goNext}
            errors={this.props.errors}
          />
          <AboutFood
            searchFood={this.props.searchFood}
            searchList={this.props.searchList}
          />
        </div>
      </div>
      );
  }
});

module.exports = Form;