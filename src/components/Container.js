import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #f7f8fa;
  padding: 00px;
`;

const Container = ({ children, ...props }) => <StyledContainer {...props}>{children}</StyledContainer>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
