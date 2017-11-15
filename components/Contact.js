var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'} /> 
        <div className={'contactDesc'}>   
          <p className={'contactLabel'}> Imię: {this.props.item.firstName} </p>
          <p className={'contactLabel'}>Nazwisko: {this.props.item.lastName}</p>
          <a href={'maito:' + this.props.item.email} className={'contactEmail'}>Imię: {this.props.item.email}</a>
        </div>
      </div>    
    )
  },
});