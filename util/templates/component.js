module.exports = componentName => ({
  content: `
import * as React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import * as S from "./${componentName}.styles";

const ${componentName} = ({ foo }: ${componentName}Props): React.ReactElement => (
    <div data-testid="${componentName}">{foo}</div>
);

export default ${componentName};

`,
  extension: `.tsx`
});
