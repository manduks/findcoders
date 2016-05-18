import React from 'react';
import Message from '../components/Message.jsx';
import Legend from '../components/Legend.jsx';

const NotFoundPage = () => (
  <div className="page not-found">
    <div className="content-scrollable">
      <br /> <br /> <br />
      <Legend />
      <Message title="Page not found" />
    </div>
  </div>
);

export default NotFoundPage;
