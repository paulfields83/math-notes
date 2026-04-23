import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="日本共通考试数学讲义" description="1A・2BC 上课与备考材料">
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <h1>日本共通考试数学讲义</h1>
        <p>1A、2BC 上课与备考材料</p>

        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a className="button button--primary button--lg" href="/math-notes/docs/category/%E6%95%B0%E5%AD%A61a">
  进入数学1A
</a>
           <a
    className="button button--secondary button--lg"
    href="/math-notes/docs/math2bc"
  >
    进入数学2BC
  </a>
        </div>

        <section style={{ marginTop: '48px' }}>
          <h2>网站内容</h2>
          <ul>
            <li>数学1A 讲义</li>
            <li>数学2BC 讲义</li>
            <li>配套 PDF、例题、练习</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
