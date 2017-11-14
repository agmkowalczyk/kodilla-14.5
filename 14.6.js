var Counter = React.createClass({   
    getInitialState: function() {
        return {
            counter1: 0,
            counter2: 10,
            counter3: 100
        };
    },

    increment: function() {
        this.setState({
            counter1: this.state.counter1 + 1
        });
    },

    decrement: function() {
        this.setState({
            counter1: this.state.counter1 - 1
        });
    },

    render: function() {
        return (
          React.createElement('div', {}, 
            React.createElement('div', {}, 
              React.createElement('button', {className: 'buttonBlue', onClick: this.increment}, '+ 1'),
              React.createElement('button', {className: 'buttonBlue', onClick: this.decrement}, '- 1'),
              React.createElement('span', {}, ' Licznik 1: ' + this.state.counter1)),
            React.createElement('div', {},   
              React.createElement('button', {className: 'buttonGreen', onClick: this.increment}, '+ 1'),
              React.createElement('button', {className: 'buttonGreen', onClick: this.decrement}, '- 1'),
              React.createElement('span', {}, ' Licznik 2: ' + this.state.counter2)),
            React.createElement('div', {},   
              React.createElement('button', {className: 'buttonOrange', onClick: this.increment}, '+ 1'),
              React.createElement('button', {className: 'buttonOrange', onClick: this.decrement}, '- 1'),
              React.createElement('span', {}, ' Licznik 3: ' + this.state.counter3)),
            
            )
        );
    }
});  

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));      