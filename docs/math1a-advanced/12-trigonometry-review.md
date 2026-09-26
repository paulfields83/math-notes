---
title: 第12讲 三角比的复习
sidebar_position: 12
---

# 第12讲 三角比的复习

对应 **High Level 数学I 第8講 PART1～3**。

## 图形与计量｜领域回顾

- 锐角、钝角三角比
- 三角比相互关系
- 仰角、俯角
- 正弦定理、余弦定理
- 三角形面积
- 复合图形计量

完整概念见 **数学1A基础 → 第4章 图形与计量**。

## 本讲课前回顾

$$
\sin A=\frac{\text{对边}}{\text{斜边}},
\qquad
\cos A=\frac{\text{邻边}}{\text{斜边}},
\qquad
\tan A=\frac{\text{对边}}{\text{邻边}}.
$$

---

## 1　锐角三角比

### 解题技巧

先确认角，再确认对边、邻边、斜边。

:::info[High Level 讲义题｜第8講 PART1]
**［1］** 在直角三角形 $ABC$ 中，从顶点 $A$ 向边 $BC$ 作垂线，垂足为 $D$。

已知

$$
AB>AC,qquad BC=5,qquad AD=2.
$$

求

$$
\sin B,qquad \cos B.
$$

【图片占位符：直角三角形 ABC 与垂足 D】

**［2］** 在

$$
\angle ACB=90^\circ
$$

的直角三角形 $ABC$ 中，已知

$$
\sin A=\frac23.
$$

求：

1. $\cos A,	an A$
2. $\sin B,cos B,	an B$
:::

<details className="solution-details">
<summary>查看答案</summary>

### ［1］

由直角三角形相似可得

$$
BD:AD=AD:CD.
$$

已知 $AD=2,\ BC=5$，所以

$$
BD\cdot CD=4,\qquad BD+CD=5.
$$

解得 $BD=4,\ CD=1$（由 $AB>AC$ 选择 $BD>CD$）。

在直角三角形 $ABD$ 中，

$$
AB=\sqrt{4^2+2^2}=2\sqrt5.
$$

因此

$$
\boxed{\sin B=\frac1{\sqrt5}=\frac{\sqrt5}{5}},
$$

$$
\boxed{\cos B=\frac2{\sqrt5}=\frac{2\sqrt5}{5}}.
$$

### ［2］

已知

$$
\sin A=\frac23.
$$

因为 $A$ 为锐角，

$$
\cos A=\sqrt{1-\frac49}
=\boxed{\frac{\sqrt5}{3}},
$$

$$
\tan A=\frac{\sin A}{\cos A}
=\boxed{\frac{2}{\sqrt5}}
=\boxed{\frac{2\sqrt5}{5}}.
$$

又因为 $B=90^\circ-A$，

$$
\boxed{\sin B=\frac{\sqrt5}{3}},
$$

$$
\boxed{\cos B=\frac23},
$$

$$
\boxed{\tan B=\frac{\sqrt5}{2}}.
$$

</details>


:::note[同类型练习｜第8講 PART1 確認問題]
**1.** 在同样的直角三角形结构中，

$$
AB>AC,qquad BC=10,qquad AD=3.
$$

求

$$
\sin B,qquad \cos B.
$$

【图片占位符：確認問題直角三角形】

**2.** 在 $\angle ACB=90^\circ$ 的直角三角形中，

$$
\sin A=\frac13.
$$

求

$$
\cos A,quad \tan A,quad
\sin B,quad \cos B,quad \tan B.
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

由相似关系

$$
BD:AD=AD:CD
$$

得到

$$
BD\cdot CD=9,
$$

又

$$
BD+CD=10.
$$

所以 $BD=9,\ CD=1$。

$$
AB=\sqrt{9^2+3^2}=3\sqrt{10}.
$$

因此

$$
\boxed{\sin B=\frac1{\sqrt{10}}=\frac{\sqrt{10}}{10}},
$$

$$
\boxed{\cos B=\frac3{\sqrt{10}}=\frac{3\sqrt{10}}{10}}.
$$

### 2.

$$
\sin A=\frac13
$$

且 $A$ 为锐角，所以

$$
\boxed{\cos A=\frac{2\sqrt2}{3}},
$$

$$
\boxed{\tan A=\frac{\sqrt2}{4}}.
$$

由余角关系，

$$
\boxed{\sin B=\frac{2\sqrt2}{3}},
$$

$$
\boxed{\cos B=\frac13},
$$

$$
\boxed{\tan B=2\sqrt2}.
$$

</details>


---

## 2　利用三角比求长度

### 知识点

仰角、俯角问题先把实际场景翻译成直角三角形。

### 解题技巧

同一物体从两个地点观测时，分别写出两个 $	an$ 关系，再联立。

:::info[High Level 讲义题｜第8講 PART2]
**［1］** 边长为8的正五边形，求其对角线长度。

必要时可使用

$$
\cos36^\circ=0.8090.
$$

**［2］** 水平地面上有一座垂直于地面的塔。

从地点 $A$ 观察塔顶，仰角为 $45^\circ$；向塔方向前进30 m 到地点 $B$ 后，仰角为 $60^\circ$。

忽略眼睛高度，求塔高。
:::

<details className="solution-details">
<summary>查看答案</summary>

### ［1］正五边形的对角线

正五边形内角为

$$
108^\circ.
$$

取由一条边和两条对角线组成的等腰三角形，将顶角平分，则底角为

$$
36^\circ.
$$

若边长为 $8$，对角线长为 $l$，则

$$
\frac l2=8\cos36^\circ.
$$

所以

$$
\boxed{l=16\cos36^\circ\approx12.944}.
$$

### ［2］塔高

设从地点 $B$ 到塔脚的距离为 $x$ m，塔高为 $h$。

从 $B$ 看：

$$
\tan60^\circ=\frac hx
\Rightarrow
h=\sqrt3\,x.
$$

从 $A$ 看：

$$
\tan45^\circ=\frac{h}{x+30}=1
\Rightarrow
h=x+30.
$$

联立：

$$
\sqrt3\,x=x+30.
$$

解得

$$
x=15(\sqrt3+1).
$$

因此

$$
\boxed{h=45+15\sqrt3\ \text{m}}.
$$

</details>


:::note[同类型练习｜第8講 PART2 確認問題]
**1.** 边长为10的正五边形，求对角线长度 $l$。

必要时可使用

$$
\cos36^\circ=0.8090,
\qquad
\cos54^\circ=0.5878.
$$

**2.** 从地点 $A$ 观察一棵垂直于地面的树，树顶仰角为 $30^\circ$；向树方向前进16 m 到地点 $B$ 后，仰角为 $45^\circ$。

忽略眼睛高度，求树高 $h$。
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

同样由正五边形得到

$$
\frac l2=10\cos36^\circ.
$$

所以

$$
\boxed{l=20\cos36^\circ\approx16.18}.
$$

### 2.

设从 $B$ 到树脚的距离为 $x$ m，高为 $h$。

从 $B$ 看：

$$
\tan45^\circ=\frac hx
\Rightarrow h=x.
$$

从 $A$ 看：

$$
\tan30^\circ=\frac{h}{x+16}
=\frac1{\sqrt3}.
$$

代入 $h=x$：

$$
\sqrt3x=x+16.
$$

所以

$$
x=8(\sqrt3+1).
$$

因此

$$
\boxed{h=8\sqrt3+8\ \text{m}}.
$$

</details>


---

## 3　钝角三角比与三角比相互关系

### 知识点

当

$$
0^\circ\le\theta\le180^\circ
$$

时，必须根据角的范围判断三角比符号。

### 解题技巧

遇到

$$
\sin\theta+\cos\theta=k
$$

时先平方，利用

$$
\sin^2\theta+\cos^2\theta=1
$$

求 $\sin\theta\cos\theta$。

:::info[High Level 讲义题｜第8講 PART3]
**［1］** 设

$$
0^\circ\le\theta\le180^\circ.
$$

1. 若
   $$
   \sin\theta=\frac{12}{13},
   $$
   求 $\cos\theta,	an\theta$。
2. 若
   $$
   \tan\theta=\frac12,
   $$
   求 $\sin\theta,cos\theta$。

**［2］** 若

$$
\sin\theta+\cos\theta=\frac1{\sqrt2},
\qquad
0^\circ<\theta<180^\circ,
$$

求：

1. $\sin\theta\cos\theta$
2. $\sin^3\theta+\cos^3\theta$
3. $\sin\theta-\cos\theta$
4. $\sin\theta,cos\theta$
:::

<details className="solution-details">
<summary>查看答案</summary>

### ［1］1.

由

$$
\sin\theta=\frac{12}{13}
$$

得

$$
\cos^2\theta=1-\frac{144}{169}
=\frac{25}{169}.
$$

由于 $0^\circ\le\theta\le180^\circ$，$\theta$ 可能为锐角或钝角：

$$
\boxed{(\cos\theta,\tan\theta)
=\left(\frac5{13},\frac{12}{5}\right)
\text{ 或 }
\left(-\frac5{13},-\frac{12}{5}\right)}.
$$

### ［1］2.

$$
\tan\theta=\frac12>0
$$

在该范围内只能是锐角。

由

$$
1+\tan^2\theta=\frac1{\cos^2\theta}
$$

得

$$
\boxed{\cos\theta=\frac{2}{\sqrt5}},
$$

$$
\boxed{\sin\theta=\frac1{\sqrt5}}.
$$

### ［2］

已知

$$
\sin\theta+\cos\theta=\frac1{\sqrt2}.
$$

平方：

$$
1+2\sin\theta\cos\theta=\frac12,
$$

所以

$$
\boxed{\sin\theta\cos\theta=-\frac14}.
$$

利用

$$
a^3+b^3=(a+b)^3-3ab(a+b),
$$

得到

$$
\boxed{\sin^3\theta+\cos^3\theta=\frac{5\sqrt2}{8}}.
$$

又

$$
(\sin\theta-\cos\theta)^2
=1-2\sin\theta\cos\theta
=\frac32.
$$

由于乘积为负且 $\sin\theta>0$，故 $\cos\theta<0$，从而

$$
\boxed{\sin\theta-\cos\theta=\frac{\sqrt6}{2}}.
$$

联立和与差：

$$
\boxed{\sin\theta=\frac{\sqrt2+\sqrt6}{4}},
$$

$$
\boxed{\cos\theta=\frac{\sqrt2-\sqrt6}{4}}.
$$

</details>


:::note[同类型练习｜第8講 PART3 確認問題]
设

$$
0^\circ\le\theta\le180^\circ.
$$

**1.** 若

$$
\sin\theta=\frac{\sqrt{13}}7,
$$

判断可能的 $\cos\theta,	an\theta$。

**2.** 若

$$
\tan\theta=\frac5{12},
$$

判断可能的 $\sin\theta,cos\theta$。

**3.** 若

$$
\sin\theta+\cos\theta=\frac13,
\qquad
0^\circ<\theta<180^\circ,
$$

求

$$
\sin\theta\cos\theta,qquad
\sin^3\theta+\cos^3\theta.
$$

**4.** 在同一条件下，再求

$$
\sin\theta-\cos\theta,
qquad
\sin\theta,
qquad
\cos\theta.
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

$$
\sin\theta=\frac{\sqrt{13}}7
$$

所以

$$
\cos^2\theta=1-\frac{13}{49}
=\frac{36}{49}.
$$

因此

$$
\boxed{(\cos\theta,\tan\theta)
=\left(\frac67,\frac{\sqrt{13}}6\right)
\text{ 或 }
\left(-\frac67,-\frac{\sqrt{13}}6\right)}.
$$

### 2.

$$
\tan\theta=\frac5{12}>0
$$

故 $\theta$ 为锐角。由 $5$-$12$-$13$：

$$
\boxed{\sin\theta=\frac5{13},\qquad
\cos\theta=\frac{12}{13}}.
$$

### 3.

$$
\sin\theta+\cos\theta=\frac13.
$$

平方：

$$
1+2\sin\theta\cos\theta=\frac19,
$$

故

$$
\boxed{\sin\theta\cos\theta=-\frac49}.
$$

所以

$$
\sin^3\theta+\cos^3\theta
=\left(\frac13\right)^3
-3\left(-\frac49\right)\left(\frac13\right)
=\boxed{\frac{13}{27}}.
$$

### 4.

$$
(\sin\theta-\cos\theta)^2
=1-2\left(-\frac49\right)
=\frac{17}{9}.
$$

由于 $\sin\theta>0,\ \cos\theta<0$，

$$
\boxed{\sin\theta-\cos\theta=\frac{\sqrt{17}}3}.
$$

联立得到

$$
\boxed{\sin\theta=\frac{1+\sqrt{17}}6},
$$

$$
\boxed{\cos\theta=\frac{1-\sqrt{17}}6}.
$$

</details>


---

## 本讲整理

三角比题优先检查：

> 角的范围 → 三角比符号 → 是否能用相互关系 → 是否需要画直角三角形
