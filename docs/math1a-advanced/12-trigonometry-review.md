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
\operatorname{tan} A=\frac{\text{对边}}{\text{邻边}}.
$$

---

## 1　快速确认：锐角三角比

### 本讲定位

这一部分只做快速确认，不重新从定义讲起。

先确认角，再确认对边、邻边、斜边；课堂重点放在后面的角范围、符号与综合判断。

:::info[High Level 讲义题｜第8講 PART1]
**［1］** 在直角三角形 $ABC$ 中，从顶点 $A$ 向边 $BC$ 作垂线，垂足为 $D$。

已知

$$
AB>AC,\qquad BC=5,\qquad AD=2.
$$

求

$$
\sin B,\qquad \cos B.
$$

![第8講 PART1 講義問題 直角三角形](/img/math1a-advanced/lesson12/hl-part1-right-triangle.svg)

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

</details>


:::note[同类型练习｜第8講 PART1 確認問題]
**1.** 在同样的直角三角形结构中，

$$
AB>AC,\qquad BC=10,\qquad AD=3.
$$

求

$$
\sin B,\qquad \cos B.
$$

![第8講 PART1 確認問題 直角三角形](/img/math1a-advanced/lesson12/confirm-part1-right-triangle.svg)

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

</details>


---

## 2　钝角三角比与三角比相互关系

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
   求 $\cos\theta,\operatorname{tan}\theta$。
2. 若
   $$
   \operatorname{tan}\theta=\frac12,
   $$
   求 $\sin\theta,\cos\theta$。

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
4. $\sin\theta,\cos\theta$
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
\boxed{(\cos\theta,\operatorname{tan}\theta)
=\left(\frac5{13},\frac{12}{5}\right)
\text{ 或 }
\left(-\frac5{13},-\frac{12}{5}\right)}.
$$

### ［1］2.

$$
\operatorname{tan}\theta=\frac12>0
$$

在该范围内只能是锐角。

由

$$
1+\operatorname{tan}^2\theta=\frac1{\cos^2\theta}
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

判断可能的 $\cos\theta,\operatorname{tan}\theta$。

**2.** 若

$$
\operatorname{tan}\theta=\frac5{12},
$$

判断可能的 $\sin\theta,\cos\theta$。

**3.** 若

$$
\sin\theta+\cos\theta=\frac13,
\qquad
0^\circ<\theta<180^\circ,
$$

求

$$
\sin\theta\cos\theta,\qquad
\sin^3\theta+\cos^3\theta.
$$

**4.** 在同一条件下，再求

$$
\sin\theta-\cos\theta,
\qquad
\sin\theta,
\qquad
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
\boxed{(\cos\theta,\operatorname{tan}\theta)
=\left(\frac67,\frac{\sqrt{13}}6\right)
\text{ 或 }
\left(-\frac67,-\frac{\sqrt{13}}6\right)}.
$$

### 2.

$$
\operatorname{tan}\theta=\frac5{12}>0
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


:::tip[提高判断｜\sin A=\sin B 一定有 A=B 吗？]
对一般的

$$
0^\circ<A,B<180^\circ,
$$

由

$$
\sin A=\sin B
$$

只能得到

$$
A=B
\qquad\text{或}\qquad
A+B=180^\circ.
$$

但如果 $A,B$ 是**同一个三角形的两个内角**，则第二种情况会使第三个角为 $0^\circ$，不可能成立。

所以在三角形中：

$$
\boxed{
\sin A=\sin B
\Rightarrow
A=B
\Rightarrow
a=b
}
$$
:::


---

## 3　利用三角比求长度

### 知识点

仰角、俯角问题先把实际场景翻译成直角三角形。

### 解题技巧

同一物体从两个地点观测时，分别写出两个 $\operatorname{tan}$ 关系，再联立。

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
\operatorname{tan}60^\circ=\frac hx
\Rightarrow
h=\sqrt3\,x.
$$

从 $A$ 看：

$$
\operatorname{tan}45^\circ=\frac{h}{x+30}=1
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
\operatorname{tan}45^\circ=\frac hx
\Rightarrow h=x.
$$

从 $A$ 看：

$$
\operatorname{tan}30^\circ=\frac{h}{x+16}
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

## 4　补充：直线的斜率与正切

三角比扩张到

$$
0^\circ\le\theta<180^\circ
$$

以后，可以把直线方向和正切联系起来。

若直线与 $x$ 轴正方向的夹角为 $\theta$，斜率为 $m$，则

$$
\boxed{m=\operatorname{tan}\theta}.
$$

因此：

- $m>0$ 时，$0^\circ<\theta<90^\circ$；
- $m<0$ 时，$90^\circ<\theta<180^\circ$；
- 不要因为“斜率为负”就把角写成负角。

:::note[確認問題｜斜率と角度]
1. 直线
   $$
   y=-x+2
   $$
   与 $x$ 轴正方向的夹角 $\theta$ 是多少？

2. 一条直线与 $x$ 轴正方向的夹角为
   $$
   120^\circ
   $$
   求它的斜率。
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

斜率为

$$
m=-1.
$$

在

$$
0^\circ\le\theta<180^\circ
$$

中，

$$
\operatorname{tan}\theta=-1
$$

对应

$$
\boxed{\theta=135^\circ}.
$$

### 2.

$$
m=\operatorname{tan}120^\circ=-\sqrt3.
$$

所以

$$
\boxed{m=-\sqrt3}.
$$

</details>

---

## 5　提高演习：三角比 × 二次函数

三角比题不一定最后还在“算三角比”。

:::info[4STEP 演習問題型｜最大・最小]
在

$$
0^\circ\le\theta\le180^\circ
$$

中，定义

$$
y
=
4\sin^2\theta
+
4\cos\theta
+
3.
$$

求：

1. $y$ 的最大值及此时的 $\theta$；
2. $y$ 的最小值及此时的 $\theta$。
:::

<details className="solution-details">
<summary>查看答案</summary>

先利用

$$
\sin^2\theta
=
1-\cos^2\theta.
$$

令

$$
x=\cos\theta.
$$

由于

$$
0^\circ\le\theta\le180^\circ,
$$

所以

$$
-1\le x\le1.
$$

原式变为

$$
y
=
4(1-x^2)+4x+3
=
-4x^2+4x+7.
$$

配方：

$$
y
=
-4\left(x-\frac12\right)^2+8.
$$

所以最大值为

$$
\boxed{8},
$$

此时

$$
x=\frac12
\Rightarrow
\boxed{\theta=60^\circ}.
$$

最小值要检查定义域端点：

$$
x=-1
\Rightarrow
y=-1,
$$

$$
x=1
\Rightarrow
y=7.
$$

因此最小值为

$$
\boxed{-1},
$$

此时

$$
\boxed{\theta=180^\circ}.
$$

> 核心不是展开计算，而是看见  
> \[
> \sin^2\theta=1-\cos^2\theta
> \]
> 后，把问题转成“带定义域的二次函数”。

</details>

---

## 6　提高演习：移动观测的实际建模

:::info[4STEP 演習問題型｜道路・方位角・仰角]
一辆汽车沿笔直道路以

$$
10\text{ m/s}
$$

的速度前进。

汽车经过地点 $A$ 时，看到右前方 $30^\circ$ 方向有一栋高层建筑。10秒后到达地点 $B$，此时建筑物位于右前方 $60^\circ$ 方向；同时从 $B$ 看建筑物最上端 $Q$ 的仰角为 $45^\circ$。

设建筑物脚点为 $P$。

![汽车与高层建筑建模](/img/math1a-advanced/lesson12/car-building-model.svg)

求：

1. 建筑物高度 $PQ$；
2. 汽车从 $B$ 出发后，几秒经过道路上距建筑物最近的点 $C$；
3. 设 $\angle CBQ=\alpha$，求 $\cos\alpha$。
:::

<details className="solution-details">
<summary>查看答案</summary>

10秒行驶

$$
AB=10\times10=100\text{ m}.
$$

先只看水平面上的 $\triangle ABP$。

由于从 $A$ 看 $P$ 的方向与道路夹角为 $30^\circ$，从 $B$ 看为 $60^\circ$，可得

$$
\angle A=30^\circ,
$$

$$
\angle B=120^\circ,
$$

所以

$$
\angle P=30^\circ.
$$

因此由正弦定理，

$$
\frac{BP}{\sin30^\circ}
=
\frac{AB}{\sin30^\circ},
$$

得到

$$
\boxed{BP=100\text{ m}}.
$$

### 1. 建筑物高度

从 $B$ 看建筑物最上端的仰角为 $45^\circ$：

$$
\operatorname{tan}45^\circ
=
\frac{PQ}{BP}
=
1.
$$

所以

$$
\boxed{PQ=100\text{ m}}.
$$

### 2. 最近点

设道路上距 $P$ 最近的点为 $C$，则

$$
PC\perp BC.
$$

在直角三角形 $BCP$ 中，

$$
BC
=
BP\cos60^\circ
=
50.
$$

汽车速度为 $10\text{ m/s}$，所以从 $B$ 到 $C$ 需要

$$
\frac{50}{10}
=
\boxed{5\text{ 秒}}.
$$

### 3. 求 $\cos\alpha$

空间线段

$$
BQ
=
\sqrt{BP^2+PQ^2}
=
100\sqrt2.
$$

而 $BQ$ 在道路方向上的投影长度为

$$
BC=50.
$$

所以

$$
\cos\alpha
=
\frac{50}{100\sqrt2}
=
\boxed{\frac{\sqrt2}{4}}.
$$

> 这题实际上连续做了三次“降维”：
>
> 水平面三角形 → 竖直直角三角形 → 空间向量的投影关系。

</details>

---

## 7　Challenge：不用加法定理求 75° 的三角比

考虑等腰三角形 $ABC$：

$$
AB=AC=1,\qquad \angle A=30^\circ.
$$

因此

$$
\angle B=\angle C=75^\circ.
$$

不使用加法定理，求

$$
\sin75^\circ,\qquad \cos75^\circ.
$$

<details className="solution-details">
<summary>查看答案</summary>

先由余弦定理求底边：

$$
BC^2
=
1^2+1^2-2\cdot1\cdot1\cos30^\circ
=
2-\sqrt3.
$$

所以

$$
BC=\sqrt{2-\sqrt3}.
$$

从 $A$ 向 $BC$ 作高 $AD$。因为是等腰三角形，

$$
BD=\frac{BC}{2}
=
\frac{\sqrt{2-\sqrt3}}2.
$$

在直角三角形 $ABD$ 中，$AB=1$，$\angle B=75^\circ$，因此

$$
\cos75^\circ
=
\frac{BD}{AB}
=
\frac{\sqrt{2-\sqrt3}}2
=
\boxed{\frac{\sqrt6-\sqrt2}{4}}.
$$

再由

$$
\sin^2 75^\circ+\cos^2 75^\circ=1
$$

且 $75^\circ$ 为锐角，

$$
\sin75^\circ
=
\boxed{\frac{\sqrt6+\sqrt2}{4}}.
$$

</details>

---

## 本讲整理

三角比题优先检查：

> 角的范围 → 三角比符号 → 相互关系 → 实际测量 / 斜率 → 必要时构造图形求特殊角
