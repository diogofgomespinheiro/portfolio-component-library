import * as React from 'react';

import {
  TabsContextValue,
  TabProps,
  TabsProps,
  TabsListProps,
  TabsPanelsProps,
  TabsPanelProps,
  SimpleTabsPanelContentProps
} from './tabs.types';
import { callAll, cloneValidElement } from '../../../utils';

import * as S from './tabs.styles';

const TabsContext = React.createContext({} as TabsContextValue);
TabsContext.displayName = 'TabsContext';

const useTabsContext = component => {
  const context = React.useContext(TabsContext);

  if (context === undefined || typeof context === 'undefined') {
    throw new Error(`${component} must be used within a Tabs`);
  }

  return context;
};

const Tabs = ({ children, initialState = 0 }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  const value: TabsContextValue = { selectedIndex, setSelectedIndex };

  return (
    <TabsContext.Provider value={value}>
      <S.TabsContainer>{children}</S.TabsContainer>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children }: TabsListProps) => {
  const { selectedIndex, setSelectedIndex } = useTabsContext('TabList');

  return (
    <S.TabsListContainer>
      {React.Children.map(children, (child, index) => {
        return cloneValidElement<TabProps>(child, {
          index,
          isSelected: index === selectedIndex,
          onClick: callAll(child.props.onClick, () => setSelectedIndex(index))
        });
      })}
    </S.TabsListContainer>
  );
};

const Tab = ({ children, isSelected, onClick }: TabProps) => {
  return (
    <S.Tab isSelected={isSelected} onClick={onClick}>
      {children}
    </S.Tab>
  );
};

const TabsPanels = ({ children }: TabsPanelsProps) => {
  const { selectedIndex } = useTabsContext('TabsPanel');
  const selectedChildren = React.Children.toArray(children).find(
    (_, index) => index === selectedIndex
  );

  return <S.TabsPanelsContainer>{selectedChildren}</S.TabsPanelsContainer>;
};

const TabsPanel = ({ children }: TabsPanelProps) => {
  return <S.TabsPanelContainer>{children}</S.TabsPanelContainer>;
};

const SimpleTabsPanelContent = ({ items }: SimpleTabsPanelContentProps) => {
  return (
    <div>
      {Boolean(items.length) &&
        items.map(item => (
          <S.SimpleTabsPanelItem key={item.title}>
            <S.SimpleTabsPanelItemTitle>
              {item.title}
            </S.SimpleTabsPanelItemTitle>
            {Boolean(item.icons?.length) && (
              <S.SimpleTabsPanelItemSubIconsContainer>
                {item.icons.map(icon => (
                  <img
                    key={icon.url}
                    src={icon.url}
                    alt={icon.alt}
                    height={icon.height}
                    width={icon.width}
                  />
                ))}
              </S.SimpleTabsPanelItemSubIconsContainer>
            )}
            {Boolean(item.subTitle) && (
              <S.SimpleTabsPanelItemSubTitle>
                {item.subTitle}
              </S.SimpleTabsPanelItemSubTitle>
            )}
          </S.SimpleTabsPanelItem>
        ))}
    </div>
  );
};

export { Tabs, TabsList, Tab, TabsPanels, TabsPanel, SimpleTabsPanelContent };
