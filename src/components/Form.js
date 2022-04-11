import React from 'react'
import NameInput from './NameInput';
import Email from './Email';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      disabled: true,
    };
  }

  onChangeHandler = ({ target }) => {
    const {name, email} = this.state;
    
    this.setState({
      [target.name]: target.value,
    });

    const errorCases = [
      name.length < 40,
      name.length !== 0,
      email.length < 50,
      email.length !== 0,
    ];

    const isDisabled = errorCases.every((err) => err === true);

    this.setState({
      disabled: isDisabled,
    })
  };

  onClickHandler = () => {
    const {name, email} = this.state;
    console.log({
      name,
      email,
    })
  }

  render() {
    const {name, email, disabled} = this.state;
    return (
      <div>
        <NameInput value={name} onChangeHandler={this.onChangeHandler} />
        <Email value={email} onChangeHandler={this.onChangeHandler} />
        <button
          type='button'
          onClick={ this.onClickHandler }
          disabled={!disabled}
        >Submit</button>
      </div>
    )
  }
}

export default Form;