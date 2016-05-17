import React from 'react';
import { Meteor } from 'meteor/meteor';

/* Import components*/
import Header from '../components/Header.jsx';
import Legend from '../components/Legend.jsx';
import SearchField from '../components/SearchField.jsx';
import Coders from '../components/Coders.jsx';
import Footer from '../components/Footer.jsx';

const CONNECTION_ISSUE_TIMEOUT = 5000;

export default class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     resultData: [],
   };
  }

  componentDidMount() {  }

  componentWillReceiveProps() {  }

  goToPay() {
    this.context.router.replace('/pay');
  }
  searchForCoders(component, values) {
    const self = this;
    console.log(121231232);
    Meteor.call('github.find', values, function (err, data) {
      if (err) {
        return console.log(err);
      }
      self.setState({resultData: data.items});
    });
  }
  render() {
    return (
      <main className="container">
        <Header/>
        <Legend/>
        <SearchField onSearch={this.searchForCoders.bind(this)}/>
        <Coders data={this.state.resultData}/>
        <section className="qc-go-pro">
          <span> WANT MORE ?</span>
          <button  className="btn-primary">GO PRO</button>
        </section>
        <Footer/>
      </main>
    );
  }
}
