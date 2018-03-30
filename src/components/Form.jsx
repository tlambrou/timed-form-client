import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios'
import serverPath from '../paths'
import { withRouter } from 'react-router-dom'
import Question from './Question'

class Form extends Component {

  state = {
    user: {
      name: "",
      id: this.props.match.params.userId
    },
    form: null,
    activeQuestionIndex: null,
    activeAnswer: null
  }

  componentWillMount() {
    this.getForm()
  }

  getForm() {
    const { formId } = this.props.match.params
    axios.get(`${serverPath}/forms/${formId}`)
    .then(response => {
      const { form } = response.data
      console.log('FORM', form)

      this.setState({
        form: {
          title: form.name,
          questions: form.Questions
        },
        activeQuestionIndex: 0
      }, this.getUser())
    })
    .catch(error => {
      console.log('ERROR', error)
    }
  )
}

getUser() {
  console.log('GETUSER()')

  const { userId } = this.props.match.params
  console.log('USERID', userId)
  axios.get(`${serverPath}/users/${userId}`)
  .then(response => {
    console.log('RESPONSE', response)
    const { name } = response.data
    console.log('NAME', name)
    this.setState({ user: {
      name,
      id: this.props.match.params.userId
    }})
  })
  .catch(error => {
    console.log('ERROR', error)
  })
}

setActiveAnswer(text) {
  const { user, activeQuestionIndex } = this.state
  const { id: userId } = user
  const { id: questionId } = this.state.form.questions[activeQuestionIndex]
  this.setState({
    activeAnswer: {
      text,
      userId,
      questionId
    }
  })
}

postAnswer() {
  const { activeAnswer } = this.state
  const { id: questionId } = this.state.form.questions[activeQuestionIndex]

  axios.post(`${serverPath}/`)
}

renderQuestion() {
  const { activeQuestionIndex, form, user } = this.state
  console.log('USER', user)
  if (activeQuestionIndex != null && form && user) {
    const question = form.questions[activeQuestionIndex]
    return (
      <Question
        question={question}
        user={user}
        first={activeQuestionIndex === 0}
        last={activeQuestionIndex === form.questions.length - 1}
        set={this.setActiveAnswer.bind(this)}
        />
    )
  } else {
    return (`Sorry something is wrong`)
  }
}

render() {

  return (
    <div className='col-md-6 offset-md-3'>
      {this.renderQuestion()}
    </div>
  );
}
}

export default withRouter(Form);
