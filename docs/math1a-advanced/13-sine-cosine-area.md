---
title: 第13讲 正弦定理・余弦定理・面积
sidebar_position: 13
---

# 第13讲 正弦定理・余弦定理・面积

对应 **High Level 数学I 第9講 PART1～3**。

## 本讲课前回顾

在 $\triangle ABC$ 中，边 $a,b,c$ 分别对应角 $A,B,C$。

---

## 1　三角形的形状

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
BC=a,qquad CA=b,qquad AB=c.
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
BC=a,qquad CA=b,qquad AB=c.
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

## 2　三角形的决定

### 知识点

给出“两边和其中一边的对角”时，三角形不一定唯一。

### 解题技巧

用正弦定理求角后，要检查补角是否同样成立。

:::info[High Level 讲义题｜第9講 PART2]
在 $\triangle ABC$ 中，

$$
b=1+\sqrt3,qquad
c=2,qquad
C=45^\circ.
$$

求

$$
a,qquad A,qquad B.
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
a^2-(\sqrt6+2)a+2\sqrt3=0.
$$

因式分解：

$$
(a-\sqrt6)(a-2)=0.
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

### ② $a=2$

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
\boxed{(a,A,B)=(2,30^\circ,105^\circ)}.
$$

</details>


:::note[同类型练习｜第9講 PART2 確認問題]
在 $\triangle ABC$ 中，

$$
b=2,qquad
c=\sqrt2,qquad
C=30^\circ.
$$

求所有可能的

$$
a,qquad A,qquad B.
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

## 3　三角形面积、内切圆与外接圆

### 知识点

三角形面积可以连接内切圆半径 $r$ 与外接圆半径 $R$：

$$
S=\frac12r(a+b+c),
$$

$$
S=\frac{abc}{4R}.
$$

### 解题技巧

三边已知时，先求面积，再顺势求 $r,R$。

:::info[High Level 讲义题｜第9講 PART3]
在 $\triangle ABC$ 中，

$$
AB=7,qquad
BC=4\sqrt2,qquad
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
AB=10,qquad
BC=3\sqrt5,qquad
CA=5.
$$

求

$$
S,qquad r,qquad R.
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

## 本讲整理

这三类题其实是一条线：

> 正弦定理传递“边与角”  
> 余弦定理完成“三角形决定”  
> 面积再连接内切圆、外接圆
