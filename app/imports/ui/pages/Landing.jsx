import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="landing-background">
          <Grid container centered stackable columns={3}>
            <Grid.Column textAlign='center'>
              <Icon size='massive' name='user' inverted/>
              <Header as='h1' inverted>Multiple Users</Header>
              <Header as='h3' inverted>This address book blah blah blah blah blah yada yada yada yada yada</Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon size='massive' name='facebook f' inverted/>
              <Header as='h1' inverted>Social Media Support</Header>
              <Header as='h3' inverted>This address book blah blah blah blah blah yada yada yada yada yada</Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon size='massive' name='address book outline' inverted/>
              <Header as='h1' inverted>Book a Appointment</Header>
              <Header as='h3' inverted>This address book blah blah blah blah blah yada yada yada yada yada</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;
