---
title: 第14讲 复合图形的计量
sidebar_position: 14
---

# 第14讲 复合图形的计量

对应 **High Level 数学I 第10講 PART1・PART2**。

## 本讲课前回顾

复杂图形先分成若干个三角形，找：

- 公共边；
- 中点与一般分点；
- 角平分线；
- 四边形的对角线；
- 特殊图形提供的额外条件。

---

## 1　三角形内部线段的长度

### 中线与一般分点

已知三边以后，不只可以求角，还可以继续求中线、分点连线等内部线段。

:::info[4STEP 教材题型｜中点・分点までの距離]
在 $\triangle ABC$ 中，

$$
BC=6,\qquad CA=5,\qquad AB=7.
$$

设 $M$ 为 $BC$ 的中点；点 $D$ 将 $BC$ 按

$$
BD:DC=1:2
$$

分割。

求

$$
AM,\qquad AD.
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

先由余弦定理求 $\angle B$：

$$
\cos B
=
\frac{AB^2+BC^2-CA^2}{2\cdot AB\cdot BC}
=
\frac{49+36-25}{84}
=
\frac57.
$$

因为 $M$ 是中点，

$$
BM=3.
$$

在 $\triangle ABM$ 中：

$$
AM^2
=
7^2+3^2-2\cdot7\cdot3\cdot\frac57
=
28.
$$

所以

$$
\boxed{AM=2\sqrt7}.
$$

又由

$$
BD:DC=1:2,\qquad BC=6
$$

得到

$$
BD=2.
$$

在 $\triangle ABD$ 中：

$$
AD^2
=
7^2+2^2-2\cdot7\cdot2\cdot\frac57
=
33.
$$

因此

$$
\boxed{AD=\sqrt{33}}.
$$

> 这一类题的统一思路是：先由大三角形求出所需角，再进入含目标线段的小三角形。

</details>

### 角平分线作为计量工具

这里不重新展开第16讲会系统学习的角平分线性质，只把它作为“内部线段计量”的工具。

角平分线可以同时连接：

- 面积分割；
- 边比；
- 余弦定理。

### 解题技巧

已知两边和夹角时，可利用面积。

已知三边时，可先用角平分线定理得到分点比，再进入余弦定理。

:::info[High Level 讲义题｜第10講 PART1]
**1.** 在 $\triangle ABC$ 中，

$$
AB=5,\qquad AC=4,\qquad \angle A=60^\circ.
$$

$\angle A$ 的角平分线与边 $BC$ 交于 $D$。求

$$
AD.
$$

**2.** 在 $\triangle ABC$ 中，

$$
AB=6,\qquad BC=5,\qquad CA=4.
$$

$\angle C$ 的角平分线与边 $AB$ 交于 $D$。求

$$
CD.
$$

![第10講 PART1 講義問題 角平分线](/img/math1a-advanced/lesson14/hl-part1-angle-bisectors.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

设 $AD=x$。角 $A=60^\circ$ 被平分，所以两边均为 $30^\circ$。

用面积分割：

$$
[ABC]=[ABD]+[ACD].
$$

因此

$$
\frac12\cdot5\cdot4\sin60^\circ
=
\frac12\cdot5x\sin30^\circ
+
\frac12\cdot4x\sin30^\circ.
$$

整理：

$$
5\cdot4\cdot\frac{\sqrt3}{2}
=
\frac92x.
$$

所以

$$
\boxed{AD=\frac{20\sqrt3}{9}}.
$$

### 2.

$CD$ 是 $\angle C$ 的角平分线，所以

$$
AD:DB=AC:CB=4:5.
$$

由 $AB=6$：

$$
AD=\frac{4}{9}\cdot6=\frac83.
$$

在 $\triangle ABC$ 中由余弦定理：

$$
\cos A
=
\frac{AC^2+AB^2-BC^2}{2AC\cdot AB}
=
\frac{16+36-25}{48}
=\frac9{16}.
$$

在 $\triangle ACD$ 中：

$$
CD^2
=
4^2+\left(\frac83\right)^2
-2\cdot4\cdot\frac83\cdot\frac9{16}
=
\frac{100}{9}.
$$

故

$$
\boxed{CD=\frac{10}{3}}.
$$

</details>


:::note[同类型练习｜第10講 PART1 確認問題]
**1.**

$$
AB=3,\qquad AC=2,\qquad \angle A=60^\circ.
$$

$\angle A$ 的角平分线交 $BC$ 于 $D$，求 $AD$。

**2.**

$$
AB=7,\qquad BC=8,\qquad CA=6.
$$

$\angle C$ 的角平分线交 $AB$ 于 $D$，求 $CD$。

![第10講 PART1 確認問題 角平分线](/img/math1a-advanced/lesson14/confirm-part1-angle-bisectors.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

设 $AD=x$。同样利用面积：

$$
\frac12\cdot3\cdot2\sin60^\circ
=
\frac12\cdot3x\sin30^\circ
+
\frac12\cdot2x\sin30^\circ.
$$

解得

$$
\boxed{AD=\frac{6\sqrt3}{5}}.
$$

### 2.

角平分线定理：

$$
AD:DB=AC:CB=6:8=3:4.
$$

所以

$$
AD=\frac37\cdot7=3.
$$

余弦定理求得

$$
\cos A
=
\frac{6^2+7^2-8^2}{2\cdot6\cdot7}
=\frac14.
$$

在 $\triangle ACD$ 中：

$$
CD^2
=
6^2+3^2-2\cdot6\cdot3\cdot\frac14
=36.
$$

所以

$$
\boxed{CD=6}.
$$

</details>


---

## 2　一般四边形：两条对角线直接求面积

复合图形不一定每次都要分别求四个小三角形。

若四边形两条对角线长度为

$$
p,\qquad q,
$$

夹角为 $\theta$，则面积为

$$
\boxed{
S=\frac12pq\sin\theta
}.
$$

本质仍然是把四边形沿两条对角线分成四个三角形，再把面积相加。

:::info[4STEP 教材题型｜対角線と面積]
四边形 $ABCD$ 的对角线 $AC,BD$ 交于 $O$。

已知

$$
AC=4,\qquad
BD=7,\qquad
\angle AOB=45^\circ.
$$

求四边形面积。
:::

<details className="solution-details">
<summary>查看答案</summary>

直接使用

$$
S=\frac12AC\cdot BD\sin\angle AOB.
$$

因此

$$
S
=
\frac12\cdot4\cdot7\cdot\frac{\sqrt2}{2}
=
\boxed{7\sqrt2}.
$$

</details>

:::note[確認問題｜対角線の面積公式]
某四边形两条对角线长分别为

$$
6,\qquad8,
$$

夹角为

$$
30^\circ.
$$

求面积。
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
S
=
\frac12\cdot6\cdot8\cdot\sin30^\circ
=
\boxed{12}.
$$

</details>

---

### 提高演习：题目不告诉你画哪条辅助线

凸四边形 $ABCD$ 满足

$$
AB=3,\qquad
BC=5,\qquad
CD=5,\qquad
DA=4,
$$

并且

$$
\angle ABC=120^\circ.
$$

求四边形 $ABCD$ 的面积。

![一般四边形分割](/img/math1a-advanced/lesson14/quadrilateral-split.svg)

> 先不要找“某个四边形公式”。  
> 想一想：补哪一条对角线以后，已知条件最多？

<details className="solution-details">
<summary>查看答案</summary>

连接

$$
AC.
$$

这样四边形被分成

$$
\triangle ABC
\quad\text{和}\quad
\triangle ACD.
$$

### 1. 先求 $AC$

在 $\triangle ABC$ 中，由余弦定理：

$$
AC^2
=
3^2+5^2-2\cdot3\cdot5\cos120^\circ.
$$

由于

$$
\cos120^\circ=-\frac12,
$$

所以

$$
AC^2
=
9+25+15
=
49.
$$

因此

$$
\boxed{AC=7}.
$$

### 2. 求 $\triangle ABC$ 面积

$$
[\triangle ABC]
=
\frac12\cdot3\cdot5\sin120^\circ
=
\boxed{\frac{15\sqrt3}{4}}.
$$

### 3. 求 $\triangle ACD$ 面积

$\triangle ACD$ 的三边为

$$
4,\qquad5,\qquad7.
$$

用 Heron 公式：

$$
s=\frac{4+5+7}{2}=8.
$$

因此

$$
[\triangle ACD]
=
\sqrt{8\cdot4\cdot3\cdot1}
=
\boxed{4\sqrt6}.
$$

所以四边形面积为

$$
\boxed{
4\sqrt6+\frac{15\sqrt3}{4}
}.
$$

> 这题真正考的是“先画哪条辅助线”。  
> 一旦选对 $AC$，后面只是第13讲已经学过的余弦定理＋Heron公式。

</details>

---

## 3　Challenge：圆内接四边形的计量

这一节不重新讲圆的性质；第17讲会系统处理圆周角、方幂与接弦定理。

这里只把已经知道的

$$
\boxed{\text{圆内接四边形的对角互补}}
$$

作为一个**计量条件**使用。

### 解题技巧

用一条对角线分成两个三角形。

两个三角形分别用余弦定理，利用

$$
\cos(180^\circ-\theta)=-\cos\theta
$$

联立。

:::info[High Level 讲义题｜第10講 PART2]
四边形 $ABCD$ 内接于圆，且

$$
AB=BC=3,\qquad
CD=5,\qquad
DA=8.
$$

求：

1. 对角线 $AC$ 的长度
2. 四边形 $ABCD$ 的面积
:::

<details className="solution-details">
<summary>查看答案</summary>

设 $\angle ABC=B$。因为四边形 $ABCD$ 内接于圆，

$$
\angle ADC=180^\circ-B.
$$

令 $AC=x$。

在 $\triangle ABC$ 中：

$$
x^2=3^2+3^2-2\cdot3\cdot3\cos B
=18-18\cos B.
$$

在 $\triangle ADC$ 中：

$$
x^2
=
8^2+5^2-2\cdot8\cdot5\cos(180^\circ-B)
=
89+80\cos B.
$$

联立：

$$
18-18\cos B=89+80\cos B,
$$

得到

$$
\cos B=-\frac{71}{98}.
$$

于是

$$
x^2=\frac{1521}{49},
$$

所以

$$
\boxed{AC=\frac{39}{7}}.
$$

又

$$
\sin B
=
\sqrt{1-\left(\frac{71}{98}\right)^2}
=
\frac{39\sqrt3}{98}.
$$

四边形面积为两三角形面积之和：

$$
S
=
\frac12(3\cdot3+8\cdot5)\sin B
=
\frac{49}{2}\cdot\frac{39\sqrt3}{98}.
$$

故

$$
\boxed{S=\frac{39\sqrt3}{4}}.
$$

</details>


:::note[同类型练习｜第10講 PART2 確認問題]
四边形 $ABCD$ 内接于圆，且

$$
AB=2,\qquad
BC=3,\qquad
CD=6,\qquad
DA=5.
$$

求：

$$
AC
$$

以及四边形 $ABCD$ 的面积 $S$。

![第10講 PART2 確認問題 圆内接四边形](/img/math1a-advanced/lesson14/confirm-part2-cyclic-quadrilateral.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

设 $\angle ABC=B$，则

$$
\angle ADC=180^\circ-B.
$$

令 $AC=x$。

由两次余弦定理：

$$
x^2=2^2+3^2-2\cdot2\cdot3\cos B
=13-12\cos B,
$$

$$
x^2=5^2+6^2+2\cdot5\cdot6\cos B
=61+60\cos B.
$$

联立得

$$
\cos B=-\frac23.
$$

所以

$$
AC^2=21,
$$

即

$$
\boxed{AC=\sqrt{21}}.
$$

又

$$
\sin B=\frac{\sqrt5}{3}.
$$

因此

$$
S
=
\frac12(2\cdot3+5\cdot6)\sin B
=
18\cdot\frac{\sqrt5}{3}
=
\boxed{6\sqrt5}.
$$

</details>


---

## 本讲整理

复合图形题不要整体硬算。

> 先找内部线段/对角线 → 把图形分成三角形 → 利用共享角、共享边或特殊条件 → 再合并
