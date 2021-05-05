import React from 'react';
import { render } from '@testing-library/react';

import { ProjectCard } from './project-card';
import { ProjectCardProps } from './project-card.types';

describe('Test Component', () => {
  let props: ProjectCardProps;

  beforeEach(() => {
    props = {
      title: 'title',
      description: 'description',
      imageUrl: 'test'
    };
  });

  const renderComponent = () => render(<ProjectCard {...props} />);

  it('should render foo text correctly', () => {
    props.title = 'Project Title';
    props.description = 'Project Description';

    const { getByTestId } = renderComponent();

    const component = getByTestId('project-card');

    expect(component).toHaveTextContent('Project Title');
    expect(component).toHaveTextContent('Project Description');
  });
});
