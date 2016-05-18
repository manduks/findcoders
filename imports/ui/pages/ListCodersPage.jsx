import React from 'react';
import { Meteor } from 'meteor/meteor';

/* Import components*/
import Header from '../components/Header.jsx';
import Legend from '../components/Legend.jsx';
import SearchField from '../components/SearchField.jsx';
import Coders from '../components/Coders.jsx';
import Footer from '../components/Footer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: [],
    };
    this.searchForCoders = this.searchForCoders.bind(this);
    this.onGetDataFromGithub = this.onGetDataFromGithub.bind(this);
  }

  onGetDataFromGithub(err, data) {
    if (err) {
      return console.log(err);
    }
    return this.setState({ resultData: data.items });
  }

  searchForCoders(component, values) {
    Meteor.call('github.find', values, this.onGetDataFromGithub);
  }

  goToPay() {
    this.context.router.replace('/pay');
  }

  render() {
    return (
      <main className="container">
        <div className="content-scrollable">
          <Header />
          <Legend />
          <SearchField onSearch={this.searchForCoders} />
          <Coders data={this.state.resultData} />
          <section className="qc-go-pro">
            <span> WANT MORE ?</span>
            <button className="btn-primary"> GO PRO </button>
          </section>
          <Footer />
        </div>
      </main>
    );
  }
}
