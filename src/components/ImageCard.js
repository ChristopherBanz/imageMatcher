import React from 'react';

class ImageCard extends React.Component {

    //this is how we create a reference. We call createRef and assign it to an instance variable so we can reference it inside our class
    constructor(props){
        super(props);

        this.state = {spans:0};

        this.imageRef = React.createRef();
    }

    // the following approach to referencing the image height will not work because it is being called so fast that the actual image has not been loaded into the DOM yet
    // we will get a return of 0 because although the component has been rendered, the actual image being taken from an outside API isn't there yet

    // componentDidMount(){
    //     console.log(this.imageRef)
    //     console.log(this.imageRef.current.clientHeight);
    // }


    // any time an image, or any type of data call to an outside API is received, it emits a "load" event.  This syntax listens for that load event.
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({spans: spans});
    }


    render(){
        const {description, urls} = this.props.image;
        return(
        <div style = {{ gridRowEnd: `span ${this.state.spans}`}}>
            <img 
                ref = {this.imageRef}
                alt = {description} 
                src = {urls.regular}
            />
        </div>
        )
    }
}
export default ImageCard;