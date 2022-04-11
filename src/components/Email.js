import React from 'react';

class Email extends React.Component {
  render() {
    const {email, onChangeHandler} = this.props;
    return (
      <div>
        Email: 
        <input
          type="text"
          name="email"
          onChange={onChangeHandler}
          value={email}
        />
      </div>
    );
  }
}

export default Email;