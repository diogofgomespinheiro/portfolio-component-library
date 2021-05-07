import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  Tabs,
  TabsList,
  Tab,
  TabsPanels,
  TabsPanel,
  SimpleTabsPanelContent
} from './tabs';
import { TabsProps } from './tabs.types';

export default {
  title: 'molecules/Tabs',
  component: Tabs
} as Meta;

const Template: Story<TabsProps> = args => {
  return (
    <Tabs {...args}>
      <TabsList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 4</Tab>
      </TabsList>
      <TabsPanels>
        <TabsPanel>
          <SimpleTabsPanelContent
            items={[
              {
                title: 'Software Engineer - Company',
                subTitle: 'Feb 2020 - Present'
              },
              {
                title: 'Software Engineer - Company 2',
                subTitle: 'Feb 2020 - Present'
              },
              {
                title: 'Software Engineer - Company 3',
                subTitle: 'Feb 2020 - Present'
              }
            ]}
          />
        </TabsPanel>
        <TabsPanel>
          <SimpleTabsPanelContent
            items={[
              {
                title: 'Techs 1:',
                icons: [
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
                    alt: 'react'
                  },
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
                    alt: 'vue'
                  },
                  {
                    url:
                      'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
                    alt: 'angular'
                  }
                ]
              },
              {
                title: 'Techs 2:',
                icons: [
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
                    alt: 'react'
                  },
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
                    alt: 'vue'
                  },
                  {
                    url:
                      'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
                    alt: 'angular'
                  }
                ]
              },
              {
                title: 'Techs 3:',
                icons: [
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
                    alt: 'react'
                  },
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
                    alt: 'vue'
                  },
                  {
                    url:
                      'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
                    alt: 'angular'
                  }
                ]
              }
            ]}
          />
        </TabsPanel>
        <TabsPanel>
          {' '}
          <SimpleTabsPanelContent
            items={[
              {
                title: 'Techs 1:',
                subTitle: 'Feb 2020 - Present',
                icons: [
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
                    alt: 'react'
                  },
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
                    alt: 'vue'
                  },
                  {
                    url:
                      'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
                    alt: 'angular'
                  }
                ]
              },
              {
                title: 'Techs 2:',
                subTitle: 'Feb 2020 - Present',
                icons: [
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
                    alt: 'react'
                  },
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
                    alt: 'vue'
                  },
                  {
                    url:
                      'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
                    alt: 'angular'
                  }
                ]
              },
              {
                title: 'Techs 3:',
                subTitle: 'Feb 2020 - Present',
                icons: [
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
                    alt: 'react'
                  },
                  {
                    url: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
                    alt: 'vue'
                  },
                  {
                    url:
                      'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
                    alt: 'angular'
                  }
                ]
              }
            ]}
          />
        </TabsPanel>
        <TabsPanel>Custom Content</TabsPanel>
      </TabsPanels>
    </Tabs>
  );
};

export const Default = Template.bind({});
Default.args = {
  initialState: 0
};
