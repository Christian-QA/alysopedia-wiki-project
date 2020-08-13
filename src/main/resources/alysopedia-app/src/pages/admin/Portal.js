import React from 'react';
import axios from 'axios';

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
            <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{width:250 + 'px'}} id="mySidebar">
                <div className="w3-container w3-display-container w3-padding-16">
                    <i onClick="w3_close()" className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
                    <a href="/" className="w3-wide"><b>Logo</b></a>
                </div>
                <div className="shopping-list"></div>
                <a href="#footer" className="w3-bar-item w3-button w3-padding">Contact</a> 
                <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding" onClick="document.getElementById('newsletter').style.display='block'">Newsletter</a> 
                <a href="/About" className="w3-bar-item w3-button w3-padding">About</a>
            </nav>
            <div>
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
                            <input type="text" id="wikiBody" name="body" placeholder="Put body here..." value={this.state.body} className="body-input" onChange={this.handleBodyChange}></input>
                        </section>
                        <button type="submit">Submit</button>
                    </form>
                </article>
            </div>
        </div>
        );
    }
}


