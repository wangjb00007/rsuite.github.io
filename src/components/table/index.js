import React from 'react';
import {
  Table,
  Toggle,
  Popover,
  Whisper,
  Button,
  IconButton,
  Divider,
  Icon,
  Checkbox
} from '../../rsuiteSource';

import fakeData from './data/users';
import fakeTreeData from './data/treeData';
import fakeDataForColSpan from './data/usersForColSpan';
import createComponentExample from '../createComponentExample';
import { getDict } from '../../locales';

const { HeaderCell, Pagination, Cell, Column } = Table;
const TablePagination = Pagination;
const dict = getDict();

export default locale => {
  const localePath = locale === 'en' ? 'en/' : '';
  const tabExamples = [
    'resizable',
    'fluid-column',
    'word-wrap',
    'custom-cell',
    'sort',
    'pagination',
    'tree',
    'expanded',
    'edit',
    'loading',
    'colspan'
  ].map(item => ({
    title: dict.table[`tab.${item}`],
    sorce: require(`./${localePath}${item}.md`)
  }));

  const ComponentExample = createComponentExample({
    id: 'Table',
    examples: ['default'],
    dependencies: {
      Checkbox,
      Toggle,
      fakeData,
      fakeTreeData,
      fakeDataForColSpan,
      TablePagination,
      Popover,
      Whisper,
      Icon,
      Divider,
      IconButton,
      Table,
      Button,
      HeaderCell,
      Cell,
      Column
    }
  })(locale);

  return () => <ComponentExample tabExamples={tabExamples} />;
};
