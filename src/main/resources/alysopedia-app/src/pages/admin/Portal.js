import React from 'react';
import axios from 'axios';
import Navigation from '../../components/Navigation';

export default class portal extends React.Component {

    state = {
        title: '',
        category: '',
        author: 'Chris',
        body: ''
    }

    handleChange = event => {
        this.setState({ 
            title: event.target.value,
            category: event.target.value,
            author: event.target.value,
            body: event.target.value 
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
    
        const wiki = {
            title: this.state.title,
            category: this.state.category,
            author: this.state.author,
            body: this.state.body 
        };
    
        axios.post(`http://localhost:8181/addWiki`, { wiki })
          .then(res => {
            console.log(res);
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
                            <input type="text" id="wikiName" name="title" placeholder="Put title here..." onChange={this.handleChange}></input>
                        </section>
                        <section>
                            <label for="wikiCategory">Category<br></br></label>
                            <input type="text" id="wikiCategory" name="category" placeholder="Put category here..." onChange={this.handleChange}></input>
                        </section>
                        <section>
                            <label for="wikiBody">Body<br></br></label>
                            <input type="text" id="wikiBody" name="body" placeholder="Put body here..." className="body-input" onChange={this.handleChange}></input>
                        </section>
                        <button type="submit">Submit</button>
                    </form>
                </article>
            </div>
        </div>
        );
    }
}


