import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from '../../rsuiteSource';
import MarkdownView from '../../fixtures/MarkdownView';
import PageContainer from '../../fixtures/PageContainer';
import getLocalePath from '../../fixtures/getLocalePath';
import IconList from './IconList';

export default getLocalePath(localePath => {
  class IconPage extends React.Component {
    constructor() {
      super();
      this.state = {
        color: '#2196f3'
      };
    }
    handleChangeComplete = color => {
      this.setState({ color: color.hex });
    };

    render() {
      const { color } = this.state;
      return (
        <PageContainer>
          <Row>
            <Col md={24}>
              <MarkdownView>{require(`.${localePath}index.md`)}</MarkdownView>
            </Col>
          </Row>
          <IconList />
          <Row>
            <Col md={24}>
              <MarkdownView>{require(`.${localePath}footer.md`)}</MarkdownView>
            </Col>
          </Row>
        </PageContainer>
      );
    }
  }

  return IconPage;
});
