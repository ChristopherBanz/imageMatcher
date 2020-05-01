import React from 'react';

class SearchBar extends React.Component{
    
    /*through our input component, we we call this function and be given whatever the user has input*/
    /*the naming convention "onInputChange" is a community accepted convention wherein we name the special property along with the element type it is to be assigned to*/
    /*instead of defining a separate class to handle events, you can also use an arrow function within the onChange property witih input (e)=> console.log(e.target.value)*/

    // onInputChange(event){
    //     console.log(event.target.value)
    // }
    
    // alternative to above, we can and should use this method to store input.  it is called a controlled element. By attaching
    // the element to the component state, we are keeping our data within the react/js side of out application instead of the html
    // side.  This allows us to better manipulate and manage the data.  We create a property within the state, set this within onChange, and also refer it 
    // back to the input via the value={this.state.term}.

state = { term: ''};

    // a default behavior of the form element is to refresh the page when a user hits enter.  we want to disable that with this event handler containing event.preventDefault()
    // we use an arrow function here because, one of the best, behaviors of an arrow function is that it automatically binds everything within it to 'this'
    
onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
}
    /* with this.onInputChange, we do not include parenthesis even though it is a callback function.  If we did, it will get called whenever the component is rendered */
    /* without the parenthesis, we are passing a reference to the function onto the input, allowing it to call onInputChange at some other time*/
    /* onChange is a special property name, called whenever a user changes the input text.  Alternatively there is an onClick for when a user clicks something*/



    render(){
        return (
            <div className="ui segment">
                <form onSubmit ={this.onFormSubmit} className = "ui form">
                    <div className = "field">   
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;