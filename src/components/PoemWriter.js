import React from 'react'

const countWords = line => {
  return line.trim().split(' ').length
}

const checkValidPoem = poem => {
  if (poem == "") return false
  const lines = poem.trim().split('\n')
  const isThreeWords = lines.length === 3
  const correctWordsPerLine = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5
  return isThreeWords && correctWordsPerLine ? true : false
}

class PoemWriter extends React.Component {
  constructor() {
    super()

    this.state = {
      poem: '',
      isValid: false
    }
  }

  handlePoemChange = event => {
    let text = event.target.value
    this.setState({
      poem: text,
      isValid: checkValidPoem(text)
    })
  }

  render() {
    let message = null;
    if (!this.state.isValid) {
      message = <div id="poem-validation-error" style={{color: 'red'}}>
        This poem is not written in the right structure!
      </div>
    }
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handlePoemChange}
        />
        {message}
      </div>
    )
  }
}

export default PoemWriter
