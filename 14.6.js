var Counter = React.createClass({   
    getInitialState: function() {
        console.log('getInitialState // początkowy stan komponentu');
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        console.log('render');  
        return ( 
            React.createElement('div', {}, 
              React.createElement('button', {onClick: this.increment}, '+ 1'),
              React.createElement('button', {onClick: this.decrement}, '- 1'),
              React.createElement('span', {}, ' Licznik: ' + this.state.counter))
        );
    },

    getDefaultProps: function () {
        console.log('getDefaultProps // ustawia domyślne wartości propsów, które nie zostały przekazane do komponentu'); 

    },

    componentWillMount: function() {
        console.log('componentWillMount');
    },

    componentDidMount: function () {
        console.log('componentDidMount // metoda wywoływana wraz z render, komponent jest już w drzewie DOM i można na nim pracować');
    },
    
    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps // metoda wywoływana gdy komponent otrzyma nowe właściwości propsów');
    },
    
    shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate // sprawdza czy trzeba zmienić komponent');
        return true;
    },
    
    componentWillUpdate: function () {
        console.log('componentWillUpdate');
    },
    
    componentDidUpdate: function () {
        console.log('componentDidUpdate // po dokonaniu zmiany można wykonać jakieś manipulacje DOM');
    },

    componentWillUnmount: function () {
        console.log('componentWillUnmount // można odpinać timery czy nasłuchiwania zdarzeń na elementach DOM');
    }


});  

var element = 
    React.createElement('div', {}, 
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter));
    

ReactDOM.render(element, document.getElementById('app'));      