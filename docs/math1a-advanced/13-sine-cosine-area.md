---
title: 第13讲 正弦定理・余弦定理・面积
sidebar_position: 13
---

# 第13讲 正弦定理・余弦定理・面积

对应 **High Level 数学I 第9講 PART1～3**。

## 本讲课前回顾

在 $\triangle ABC$ 中，边 $a,b,c$ 分别对应角 $A,B,C$。

---

## 1　三角形的决定

### 知识点

给出“两边和其中一边的对角”时，三角形不一定唯一。

### 解题技巧

用正弦定理求角后，要检查补角是否同样成立。

:::tip[提高判断｜SSA 条件为什么可能有两个三角形？]
当题目给出“两边＋其中一边的对角”时，属于常见的 **SSA 型**。

若正弦定理得到

$$
\sin B=k,
$$

不能立刻只取一个角。因为在

$$
0^\circ<B<180^\circ
$$

中，可能同时有

$$
B=\beta
\qquad\text{和}\qquad
B=180^\circ-\beta.
$$

真正的检查顺序是：

$$
\boxed{
\text{求出角的候补}
\rightarrow
\text{检查 }A+B<180^\circ
\rightarrow
\text{再判断有0、1还是2个三角形}
}
$$

这也是“三角形的决定”里最容易漏解的地方。
:::

:::info[High Level 讲义题｜第9講 PART2]
在 $\triangle ABC$ 中，

$$
b=1+\sqrt3,\qquad
c=2,\qquad
C=45^\circ.
$$

求

$$
a,\qquad A,\qquad B.
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

由余弦定理：

$$
c^2=a^2+b^2-2ab\cos C.
$$

代入

$$
b=1+\sqrt3,\quad c=2,\quad C=45^\circ
$$

得到

$$
a^2-(\sqrt6+\sqrt2)a+2\sqrt3=0.
$$

因式分解：

$$
(a-\sqrt6)(a-\sqrt2)=0.
$$

所以有两种三角形。

### ① $a=\sqrt6$

余弦定理可得

$$
\cos A=\frac12,
$$

因此

$$
A=60^\circ,
\qquad
B=180^\circ-45^\circ-60^\circ=75^\circ.
$$

### ② $a=\sqrt2$

可得

$$
\cos A=\frac{\sqrt3}{2},
$$

因此

$$
A=30^\circ,
\qquad
B=105^\circ.
$$

所以

$$
\boxed{(a,A,B)=(\sqrt6,60^\circ,75^\circ)}
$$

或

$$
\boxed{(a,A,B)=(\sqrt2,30^\circ,105^\circ)}.
$$

</details>


:::note[同类型练习｜第9講 PART2 確認問題]
在 $\triangle ABC$ 中，

$$
b=2,\qquad
c=\sqrt2,\qquad
C=30^\circ.
$$

求所有可能的

$$
a,\qquad A,\qquad B.
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

余弦定理：

$$
c^2=a^2+b^2-2ab\cos C.
$$

代入

$$
b=2,\quad c=\sqrt2,\quad C=30^\circ
$$

得到

$$
a^2-2\sqrt3\,a+2=0.
$$

解得

$$
a=\sqrt3\pm1.
$$

### ① $a=\sqrt3+1$

得到

$$
B=45^\circ,
\qquad
A=105^\circ.
$$

### ② $a=\sqrt3-1$

得到

$$
B=135^\circ,
\qquad
A=15^\circ.
$$

所以

$$
\boxed{(a,A,B)=(\sqrt3+1,105^\circ,45^\circ)}
$$

或

$$
\boxed{(a,A,B)=(\sqrt3-1,15^\circ,135^\circ)}.
$$

</details>


---

## 2　三角形的形状

### 知识点

正弦定理给出：

$$
\frac a{\sin A}
=
\frac b{\sin B}
=
\frac c{\sin C}.
$$

因此，最大边对应最大角。

### 解题技巧

出现三角比关系式时，可以利用正弦定理、余弦定理把“角”消掉，转成边的关系。

:::info[High Level 讲义题｜第9講 PART1]
在 $\triangle ABC$ 中，

$$
BC=a,\qquad CA=b,\qquad AB=c.
$$

回答：

1. 若
   $$
   \sin A:\sin B:\sin C=3:5:7,
   $$
   求三个内角中最大角的大小。
2. 若
   $$
   (a-c\cos B)\sin B
   =
   (b-c\cos A)\sin A,
   $$
   判断 $\triangle ABC$ 的形状。
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

由正弦定理，

$$
a:b:c
=
\sin A:\sin B:\sin C
=
3:5:7.
$$

设

$$
a=3k,\quad b=5k,\quad c=7k.
$$

最大边是 $c$，所以最大角为 $C$。

由余弦定理：

$$
\cos C
=
\frac{a^2+b^2-c^2}{2ab}
=
\frac{9+25-49}{30}
=-\frac12.
$$

所以

$$
\boxed{C=120^\circ}.
$$

### 2.

利用正弦定理与余弦定理把角消去，原条件最终化为

$$
(a^2+b^2-c^2)(a-b)=0.
$$

因为边长均为正，所以得到两种情况：

$$
a^2+b^2=c^2
$$

或

$$
a=b.
$$

因此三角形为

$$
\boxed{C=90^\circ\text{ 的直角三角形}}
$$

或

$$
\boxed{BC=CA\text{ 的等腰三角形}}.
$$

</details>


:::note[同类型练习｜第9講 PART1 確認問題]
在 $\triangle ABC$ 中，

$$
BC=a,\qquad CA=b,\qquad AB=c.
$$

**1.** 若

$$
\sin A:\sin B:\sin C
=
1:\sqrt5:\sqrt2,
$$

求最大角及其大小。

**2.** 若

$$
a^2\cos A\sin B
=
b^2\cos B\sin A,
$$

判断 $\triangle ABC$ 的形状。

教材选项包括：

- $A=90^\circ$、$B=90^\circ$、$C=90^\circ$；
- $BC=AC$、$AC=AB$、$AB=BC$ 的等腰三角形。
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

由正弦定理：

$$
a:b:c
=
1:\sqrt5:\sqrt2.
$$

最大边为 $b$，所以最大角为 $B$。

余弦定理：

$$
\cos B
=
\frac{a^2+c^2-b^2}{2ac}
=
\frac{1+2-5}{2\sqrt2}
=-\frac1{\sqrt2}.
$$

因此

$$
\boxed{B=135^\circ}.
$$

### 2.

把正弦、余弦分别用边长表示后整理，得到

$$
(a^2+b^2-c^2)(a^2-b^2)=0.
$$

所以

$$
a^2+b^2=c^2
$$

或

$$
a=b.
$$

即

$$
\boxed{C=90^\circ}
$$

或

$$
\boxed{BC=CA}.
$$

</details>


---

:::note[提高演习｜角的关系式 → 边的关系式]
在 $\triangle ABC$ 中，

$$
\sin C
=
2\cos A\sin B.
$$

判断 $\triangle ABC$ 的形状。
:::

<details className="solution-details">
<summary>查看答案</summary>

设外接圆半径为 $R$。

由正弦定理，

$$
\sin C=\frac{c}{2R},
\qquad
\sin B=\frac{b}{2R}.
$$

原条件变为

$$
\frac{c}{2R}
=
2\cos A\cdot\frac{b}{2R}.
$$

因此

$$
c=2b\cos A.
$$

再由余弦定理，

$$
\cos A
=
\frac{b^2+c^2-a^2}{2bc}.
$$

代入：

$$
c
=
2b\cdot
\frac{b^2+c^2-a^2}{2bc}
=
\frac{b^2+c^2-a^2}{c}.
$$

所以

$$
c^2
=
b^2+c^2-a^2,
$$

即

$$
a^2=b^2.
$$

边长为正，因此

$$
a=b.
$$

故

$$
\boxed{BC=CA}
$$

即 $\triangle ABC$ 为以 $C$ 为顶角的等腰三角形。

> 这一类题的主线是：
>
> \[
> \boxed{
> \text{角的式子}
> \rightarrow
> \text{正弦/余弦定理}
> \rightarrow
> \text{边的式子}
> \rightarrow
> \text{判断形状}
> }
> \]

</details>

---

## 3　正弦・余弦定理的测量应用

第12讲的测量主要落到直角三角形；当目标点与基线不能组成直角结构时，就要进入正弦定理、余弦定理。

:::note[讲义原创应用｜非直角测量]
地面上两点 $A,B$ 相距

$$
AB=100\text{ m}.
$$

从 $A$ 观察目标点 $P$，测得

$$
\angle PAB=60^\circ;
$$

从 $B$ 观察同一目标点 $P$，测得

$$
\angle PBA=45^\circ.
$$

求

$$
AP,\qquad BP.
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

三角形第三个角为

$$
\angle APB
=
180^\circ-60^\circ-45^\circ
=
75^\circ.
$$

由正弦定理，

$$
\frac{AP}{\sin45^\circ}
=
\frac{100}{\sin75^\circ}.
$$

利用第12讲得到的

$$
\sin75^\circ
=
\frac{\sqrt6+\sqrt2}{4},
$$

可得

$$
AP
=
100\frac{\sin45^\circ}{\sin75^\circ}
=
\boxed{100(\sqrt3-1)\text{ m}}.
$$

同理，

$$
\frac{BP}{\sin60^\circ}
=
\frac{100}{\sin75^\circ},
$$

所以

$$
BP
=
100\frac{\sin60^\circ}{\sin75^\circ}
=
\boxed{50(3\sqrt2-\sqrt6)\text{ m}}.
$$

> 重点不是“测量题一定用 $\operatorname{tan}$”，而是先看图形是否有直角。没有直角时，正弦定理往往更自然。

</details>

---

:::info[4STEP 提高题｜多地点测量]
为了求两个不能直接测量地点 $P,Q$ 之间的距离，在同一直线上取三个地点 $A,B,C$。

已知

$$
AB=400\text{ m},
\qquad
BC=100\sqrt3\text{ m},
$$

并且

$$
\angle QAB=30^\circ,
$$

$$
\angle PBA=\angle QBC=75^\circ,
$$

$$
\angle PCB=45^\circ.
$$

![多地点测量](/img/math1a-advanced/lesson13/survey-pq-distance.svg)

求

$$
PQ.
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

这题不能一步求 $PQ$，要先分别求 $BP,BQ$。

### 1. 求 $BP$

在 $\triangle PBC$ 中，

$$
\angle PBC
=
180^\circ-75^\circ
=
105^\circ.
$$

所以

$$
\angle BPC
=
180^\circ-105^\circ-45^\circ
=
30^\circ.
$$

由正弦定理：

$$
\frac{BP}{\sin45^\circ}
=
\frac{BC}{\sin30^\circ}.
$$

因此

$$
BP
=
100\sqrt3\cdot
\frac{\sin45^\circ}{\sin30^\circ}
=
\boxed{100\sqrt6}.
$$

### 2. 求 $BQ$

在 $\triangle QAB$ 中，

$$
\angle QBA
=
180^\circ-75^\circ
=
105^\circ.
$$

所以

$$
\angle AQB
=
45^\circ.
$$

由正弦定理：

$$
\frac{BQ}{\sin30^\circ}
=
\frac{AB}{\sin45^\circ}.
$$

因此

$$
BQ
=
400\cdot
\frac{\sin30^\circ}{\sin45^\circ}
=
\boxed{200\sqrt2}.
$$

### 3. 求 $PQ$

从点 $B$ 看，

$$
\angle PBQ
=
105^\circ-75^\circ
=
30^\circ.
$$

在 $\triangle PBQ$ 中用余弦定理：

$$
PQ^2
=
(100\sqrt6)^2
+
(200\sqrt2)^2
-
2\cdot100\sqrt6\cdot200\sqrt2\cos30^\circ.
$$

整理得

$$
PQ^2=20000.
$$

所以

$$
\boxed{PQ=100\sqrt2\text{ m}}.
$$

> 这是一道典型的“不能直接套一个公式”的题：
>
> \[
> \boxed{
> \text{正弦定理}
> \rightarrow
> \text{正弦定理}
> \rightarrow
> \text{余弦定理}
> }
> \]

</details>

---

## 4　三角形面积、内切圆与外接圆

### 知识点

三角形面积可以连接内切圆半径 $r$ 与外接圆半径 $R$：

$$
S=\frac12r(a+b+c),
$$

$$
S=\frac{abc}{4R}.
$$

### 解题技巧

面积公式要按条件选择：

- 两边与夹角已知：$S=\frac12bc\sin A$；
- 三边已知：可先用余弦定理求角，也可用 Heron 公式；
- 与内切圆连接：$S=rs$；
- 与外接圆连接：$S=\frac{abc}{4R}$。

:::info[High Level 讲义题｜第9講 PART3]
在 $\triangle ABC$ 中，

$$
AB=7,\qquad
BC=4\sqrt2,\qquad
CA=5.
$$

求：

1. $\triangle ABC$ 的面积 $S$
2. 内切圆半径 $r$
3. 外接圆半径 $R$
:::

<details className="solution-details">
<summary>查看答案</summary>

设

$$
a=BC=4\sqrt2,\quad
b=CA=5,\quad
c=AB=7.
$$

由余弦定理：

$$
\cos A
=
\frac{b^2+c^2-a^2}{2bc}
=
\frac{25+49-32}{70}
=\frac35.
$$

所以

$$
\sin A=\frac45.
$$

### 1. 面积

$$
S=\frac12bc\sin A
=\frac12\cdot5\cdot7\cdot\frac45
=\boxed{14}.
$$

### 2. 内切圆半径

半周长

$$
s=\frac{7+5+4\sqrt2}{2}
=6+2\sqrt2.
$$

由 $S=rs$：

$$
r=\frac{14}{6+2\sqrt2}
=\boxed{3-\sqrt2}.
$$

### 3. 外接圆半径

由

$$
a=2R\sin A,
$$

$$
R=\frac{4\sqrt2}{2\cdot(4/5)}
=\boxed{\frac{5\sqrt2}{2}}.
$$

</details>


:::note[同类型练习｜第9講 PART3 確認問題]
在 $\triangle ABC$ 中，

$$
AB=10,\qquad
BC=3\sqrt5,\qquad
CA=5.
$$

求

$$
S,\qquad r,\qquad R.
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

设

$$
a=BC=3\sqrt5,\quad b=CA=5,\quad c=AB=10.
$$

由余弦定理：

$$
\cos A
=
\frac{25+100-45}{100}
=\frac45,
$$

所以

$$
\sin A=\frac35.
$$

因此面积

$$
S
=\frac12\cdot5\cdot10\cdot\frac35
=\boxed{15}.
$$

半周长

$$
s=\frac{10+5+3\sqrt5}{2}.
$$

由 $S=rs$：

$$
r
=
\frac{15}{s}
=
\boxed{\frac{5-\sqrt5}{2}}.
$$

由 $a=2R\sin A$：

$$
R
=
\frac{3\sqrt5}{2\cdot(3/5)}
=
\boxed{\frac{5\sqrt5}{2}}.
$$

</details>


---

### 提高演习：把多个公式串成一个新公式

在 $\triangle ABC$ 中，已知

$$
AB=c,
\qquad
\angle A=A,
\qquad
\angle B=B.
$$

设面积为 $S$。

证明：

$$
\boxed{
S
=
\frac{c^2\sin A\sin B}
{2\sin(A+B)}
}
$$

其中 $A+B<180^\circ$。

<details className="solution-details">
<summary>查看答案</summary>

因为

$$
C=180^\circ-(A+B),
$$

所以

$$
\sin C
=
\sin(A+B).
$$

由正弦定理：

$$
\frac{a}{\sin A}
=
\frac{c}{\sin C},
$$

因此

$$
a
=
\frac{c\sin A}{\sin C}.
$$

同理，

$$
b
=
\frac{c\sin B}{\sin C}.
$$

面积公式：

$$
S
=
\frac12ab\sin C.
$$

代入：

$$
S
=
\frac12
\cdot
\frac{c\sin A}{\sin C}
\cdot
\frac{c\sin B}{\sin C}
\cdot
\sin C.
$$

所以

$$
S
=
\frac{c^2\sin A\sin B}{2\sin C}.
$$

再用

$$
\sin C=\sin(A+B),
$$

得到

$$
\boxed{
S
=
\frac{c^2\sin A\sin B}
{2\sin(A+B)}
}.
$$

> 这类题不是要求背“新公式”，而是练习：
>
> \[
> \text{正弦定理}
> +
> \text{面积公式}
> \Rightarrow
> \text{自己生成公式}.
> \]

</details>

---

### 提高工具：Heron公式

当三边 $a,b,c$ 已知，而角度不好求时，可以直接使用 Heron 公式。

设半周长

$$
s=\frac{a+b+c}{2},
$$

则三角形面积为

$$
\boxed{
S=\sqrt{s(s-a)(s-b)(s-c)}
}.
$$

:::info[教材例题｜三边から面積]
三角形三边为

$$
5,\qquad9,\qquad6.
$$

用 Heron 公式求面积。
:::

<details className="solution-details">
<summary>查看答案</summary>

半周长为

$$
s=\frac{5+9+6}{2}=10.
$$

因此

$$
S
=
\sqrt{10(10-5)(10-9)(10-6)}
=
\boxed{10\sqrt2}.
$$

</details>

:::note[確認問題｜Heron公式]
三角形三边为

$$
3,\qquad5,\qquad6.
$$

求面积。
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
s=\frac{3+5+6}{2}=7.
$$

所以

$$
S
=
\sqrt{7\cdot4\cdot2\cdot1}
=
\boxed{2\sqrt{14}}.
$$

</details>


---

## 本讲整理

本讲的主线是：

> 先判断三角形是否唯一 → 再用正弦/余弦定理处理边角 → 关系式判断形状 → 面积连接内切圆、外接圆与 Heron 公式
