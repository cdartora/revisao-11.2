import React from 'react';

class NameInput extends React.Component {
  render() {
    const {name, onChangeHandler} = this.props;
    return (
      <div>
        Nome: 
        <input
          type="text"
          name="name"
          onChange={onChangeHandler}
          value={name}
        />
      </div>
    );
  }
}

export default NameInput;