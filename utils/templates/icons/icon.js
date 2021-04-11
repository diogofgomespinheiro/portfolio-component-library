module.exports = ({ componentName, componentFileName }) => ({
  content: `\
import * as React from 'react';

const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={9}
      height={9}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    </svg>
  );
}

export { ${componentName} };
`,
  extension: `.tsx`
});
