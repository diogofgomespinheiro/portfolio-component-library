module.exports = ({ componentName, componentFileName }) => ({
  content: `\
import * as React from 'react';

import { ${componentName}Props } from './${componentFileName}.types';

import * as S from './${componentFileName}.styles';

const ${componentName} = ({ foo }: ${componentName}Props): React.ReactElement => (
    <div data-testid="${componentFileName}">{foo}</div>
);

export { ${componentName} };

`,
  extension: `.tsx`
});
