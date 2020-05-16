import React from 'react';

// let ImageCard render itself & image
// reach into DOM & figure out height of img
// set the image height on state to get component to rerender
// when rerendering, assign a 'grid-row-end' 

// REACT Refs
// give access to a single DOM element
// create refs in the constructor, assign them to instance variables, then pass as props
class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.imageRef = React.createRef()
        this.state={spans:0}
    }

    componentDidMount() {
        // console.log(this.imageRef.current.clientHeight) returns 0 cause too early
        // need to add event listener to check that it has loaded first
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    // MUST BE ARROW FUNCTION if used as callback
    setSpans = () => { //DYNAMIC SPANNING
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);

        this.setState({spans: spans})
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                {/* this is a JSX tag not HTML element need ref to get element info */}
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;