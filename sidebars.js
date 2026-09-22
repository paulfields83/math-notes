// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '数学 1A 基础',
      collapsed: false,
      items: [
        'math1a-basic',
        'math1a/set-and-proposition',
        'math1a/number-and-expression',
        'math1a/quadratic-function',
        'math1a/geometry-and-measurement',
        'math1a/properties-of-figures',
        'math1a/data-analysis',
        'math1a/counting',
        'math1a/probability',
      ],
    },
    {
      type: 'category',
      label: '数学 1A 进阶',
      collapsed: false,
      items: ['math1a-advanced'],
    },
    {
      type: 'category',
      label: '数学 2BC',
      collapsed: false,
      items: ['math2bc-intro', 'math2bc/functions'],
    },
  ],
};

export default sidebars;
