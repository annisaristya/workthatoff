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
            currentCard={this.props.currentCard}
          />
          <AboutFood
            goBack={this.props.goBack}
            searchFood={this.props.searchFood}
            searchList={this.props.searchList}
            selectFood={this.props.selectFood}
            servingsText={this.props.servingsText}
            setServings={this.props.setServings}
            searchedText={this.props.searchedText}
            errors={this.props.errors}
            addToFoodList={this.props.addToFoodList}
            removeFromFoodList={this.props.removeFromFoodList}
            foodList={this.props.foodList}
            calculateResults={this.props.calculateResults}
            currentCard={this.props.currentCard}
            showList={this.props.showList}
            hideList={this.props.hideList}
            searchShown={this.props.searchShown}
          />
        </div>
      </div>
      );
  }
});

module.exports = Form;