import React from 'react';
import './MemeGenerator.css';

class MemeGenerator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemes: [],
            textSize: 40
        };
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({
                    allMemes: memes
                })
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var randomURL = this.state.allMemes[Math.floor(Math.random() * this.state.allMemes.length)].url;
        this.setState({
            randomImage: randomURL,
            topText: "",
            bottomText: ""
        })
    }

    handleTextChange = (event) => {
        var { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const h2Style = {
            'fontSize': this.state.textSize + 'px'
        }

        console.log(h2Style)

        return (
            <div className="meme-generator">
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            type="text" 
                            name="topText" 
                            value={this.state.topText} 
                            onChange={this.handleTextChange} />
                        <p>Top Text</p>
                    </label>
                    
                    <label>
                        <input 
                            type="text"
                            name="bottomText" 
                            value={this.state.bottomText} 
                            onChange={this.handleTextChange} />
                        <p>Bottom Text</p>
                    </label>

                    <button>Generate</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top" style={h2Style}>{this.state.topText}</h2>
                    <h2 className="bottom" style={h2Style}>{this.state.bottomText}</h2>
                </div>
            </div>
          );
    }
}

export default MemeGenerator;