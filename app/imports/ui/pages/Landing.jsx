import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="landing-background">
          <Grid centered columns={3} stackable container>

            <Grid.Column textAlign='center'>
              <Icon size='large' name='user' inverted/>
              <Header as='h1' inverted>User Features</Header>
              <Header as='h3' inverted>Blah blah</Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon size='large' name='user' inverted/>
              <Header as='h1' inverted>User Features</Header>
              <Header as='h3' inverted>Blah blah</Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon size='large' name='user' inverted/>
              <Header as='h1' inverted>User Features</Header>
              <Header as='h3' inverted>Blah blah</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
