import React from 'react';
import { Image, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Contact extends React.Component {
  render() {
    const contactInfo = this.props.contact;
    return (
        <Card>
          <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={contactInfo.image}
            />
            <Card.Header>{contactInfo.firstName} {contactInfo.lastName}</Card.Header>
            <Card.Meta>{contactInfo.address}</Card.Meta>
            <Card.Description>{contactInfo.description}</Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Contact);
