import React from 'react';
import axios from 'axios';
import Navigation from '../../components/Navigation';

export default class portal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            author: 'Chris',
            body: ''
        }
    }

    handleTitleChange = (event) => {       
        this.setState({ 
            title: event.target.value,
        });
    }

    handleCategoryChange = (event) => {       
        this.setState({ 
            category: event.target.value,
        });
    }

    handleBodyChange = (event) => {       
        this.setState({ 
            body: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, category, author, body } = this.state;
        axios.post(`http://localhost:8181/addWiki`, { title, category, author, body })
          .then(res => {
            console.log(res.data);
          })
      }

      render() {
        return (
        <div className="portal">
          <Navigation />
          
          <div style={{marginLeft:250 + 'px'}}>
                <article className="App-article">
                    <h1>Admin Portal</h1>
                    <h3>Import new wiki documents using the fields below</h3>
                    <form onSubmit={this.handleSubmit}>
                        <section>
                            <label for="wikiName">Title<br></br></label>
                            <input type="text" id="wikiName" name="title" placeholder="Put title here..." value={this.state.title} onChange={this.handleTitleChange}></input>
                        </section>
                        <section>
                            <label for="wikiCategory">Category<br></br></label>
                            <input type="text" id="wikiCategory" name="category" placeholder="Put category here..." value={this.state.category} onChange={this.handleCategoryChange}></input>
                        </section>
                        <section>
                            <label for="wikiBody">Body<br></br></label>
                            <textarea id="wikiBody" name="body" placeholder="Put body here..." value={this.state.body} className="body-input" rows='20' onChange={this.handleBodyChange}></textarea>
                        </section>
                        <button type="submit">Submit</button>
                    </form>
                </article>
            </div>
        </div>
        );
    }
}


