import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const courses = [
  ['数学 1A 基础', '八章中文概念集：定义、公式、图像说明、易错点与判断框架。', '/docs/math1a-basic'],
  ['数学 1A 进阶', '24讲进阶课程：课前回顾、解题技巧、High Level 讲义题与确认问题。', '/docs/math1a-advanced'],
  ['数学 2BC', '数学 2BC 课程目录与讲义。', '/docs/math2bc-intro'],
];

export default function Home() {
  return (
    <Layout title="日本共通考试数学讲义" description="数学 1A、1A 进阶与 2BC 课程材料">
      <main className="concept-home">
        <p className="concept-home__eyebrow">JAPANESE COMMON TEST MATHEMATICS</p>
        <h1>日本共通考试数学讲义</h1>
        <p className="concept-home__lead">
          数学 1A 基础、数学 1A 进阶和数学 2BC 的课程材料集中在这里。基础部分按八章知识体系整理，进阶部分按24讲实际授课顺序组织。
        </p>
        <div className="concept-card-grid">
          {courses.map(([title, description, to]) => (
            <Link className="concept-card" key={title} to={to}>
              <p className="concept-card__number">课程入口</p>
              <h2>{title}</h2>
              <p>{description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
