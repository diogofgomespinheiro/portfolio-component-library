module.exports = ({ componentFileName }) => ({
  content: `\
import styled from 'styled-components';
import {theme} from './${componentFileName}.theme';
`,
  extension: `.styles.ts`
});
