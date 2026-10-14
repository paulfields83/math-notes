---
title: 第10讲 代表值・方差・数据变换
sidebar_position: 10
---

# 第10讲 代表值・方差・数据变换

对应 **High Level 数学I 第11講 PART2・PART3**。

本讲只处理“统计量如何计算、变换与修正”。

## 本讲主线

$
\boxed{\text{平均}}
\rightarrow
\boxed{\text{方差・标准差}}
\rightarrow
\boxed{\text{线性变换}}
\rightarrow
\boxed{\text{数据修正}}
$

---

## 1　方差的两种计算方式

定义为

$
s^2
=
\frac1n\sum_{i=1}^{n}(x_i-\bar x)^2.
$

实际计算时经常使用：

$
\boxed{
s^2=\overline{x^2}-\bar x^2
}
$

其中

$
\overline{x^2}
=
\frac1n\sum_{i=1}^{n}x_i^2.
$

### 为什么成立

$
\begin{aligned}
s^2
&=\frac1n\sum(x_i-\bar x)^2\\
&=\frac1n\sum x_i^2
-2\bar x\frac1n\sum x_i
+\bar x^2\\
&=\overline{x^2}-\bar x^2.
\end{aligned}
$

> 之后遇到数据修正时，“总和”和“平方和”就是两个最重要的量。

---

## 2　变量的线性变换

若

$
x=au+b,
$

则

$
\boxed{
\bar x=a\bar u+b
}
$

$
\boxed{
s_x^2=a^2s_u^2
}
$

$
\boxed{
s_x=|a|s_u
}
$

其中标准差要注意绝对值。

### 直观理解

- 加上 $b$：全部数据一起平移，散布不变；
- 乘以 $a$：数据之间的距离扩大为 $|a|$ 倍，所以标准差扩大 $|a|$ 倍，方差扩大 $a^2$ 倍。

**解说图（由教材数据重绘）**

![变量变换示意](/img/math1a-advanced/lesson09/part2-transform-numberline.svg)

:::info[High Level 讲义题｜第11講 PART2]
设 $a,b$ 为常数。变量 $u$ 与由

$
x=au+b
$

定义的变量 $x$ 的平均值分别为 $\bar u,\bar x$，方差分别为 $s_u^2,s_x^2$。

对数据

$
526, 484, 532, 538, 550, 502
$

令

$
u=\frac{x-520}{6},
$

利用变换公式求变量 $x$ 的平均值与方差。
:::

<details className="solution-details">
<summary>查看答案</summary>

各数据对应

$
u=1,-6,2,3,5,-3.
$

所以

$
\bar u=\frac13.
$

由 $x=6u+520$，

$
\bar x=6\bar u+520
=\boxed{522}.
$

又

$
s_u^2
=
14-\left(\frac13\right)^2
=
\frac{125}{9},
$

因此

$
s_x^2
=
36\cdot\frac{125}{9}
=
\boxed{500}.
$

</details>

:::note[同类型练习｜第11講 PART2 確認問題]
数据为

$
798, 750, 774, 782, 726.
$

令

$
u=\frac{x-750}{8}.
$

求

$
\bar u,\quad \bar x,\quad s_u^2,\quad s_x^2.
$
:::

<details className="solution-details">
<summary>查看答案</summary>

$
u=6,0,3,4,-3,
\qquad
\bar u=\boxed{2}.
$

因此

$
\bar x=8\cdot2+750
=\boxed{766}.
$

又

$
s_u^2
=
14-2^2
=
\boxed{10},
$

$
s_x^2
=
8^2\cdot10
=
\boxed{640}.
$

</details>

---

## 3　两个数据组的平均值

A组有 $n$ 个数据，平均值为 $\bar x_A$；B组有 $m$ 个数据，平均值为 $\bar x_B$。

合并后的平均值不是简单平均，而是

$
\boxed{
\bar x
=
\frac{n\bar x_A+m\bar x_B}{n+m}
}
$

只有当 $n=m$ 时，才可以直接写成

$
\frac{\bar x_A+\bar x_B}{2}.
$

:::note[追加例题｜合并平均]
A班30人的平均分为72分，B班20人的平均分为81分。

两班合并后的平均分を求めよ。
:::

<details className="solution-details">
<summary>查看答案</summary>

$
\bar x
=
\frac{30\cdot72+20\cdot81}{50}
=
\boxed{75.6}.
$

</details>

---

## 4　数据修正与统计量变化

数据中只有少数值被修正时，不必全部重算。

优先检查：

- 总和变化多少；
- 平方和变化多少；
- 平均值是否变化。

若一个数据从 $a$ 修正为 $b$，则

$
\sum x_i
\rightarrow
\sum x_i+(b-a),
$

$
\sum x_i^2
\rightarrow
\sum x_i^2+(b^2-a^2).
$

然后利用

$
s^2=\overline{x^2}-\bar x^2
$

即可更新方差。

:::info[High Level 讲义题｜第11講 PART3]
有如下两变量 $x,y$ 的5组数据，平均值分别为

$
\bar x=25,\qquad \bar y=14.
$

| 编号 | ① | ② | ③ | ④ | ⑤ |
|---|---:|---:|---:|---:|---:|
| $x$ | 25 | 21 | 23 | 29 | 27 |
| $y$ | 17 | 8 | 11 | 20 | 14 |

1. 编号①的 $x$ 值实际上应为20。修正后，$x$ 的平均值比修正前减少多少？
2. 编号③的 $y$ 值实际上应为13，编号④的 $y$ 值实际上应为18。修正后，$y$ 的方差与修正前相比是增加、减少还是不变？
3. 再追加一组 $(x,y)=(25,14)$ 的数据后，相关系数与追加前相比是增加、减少还是不变？
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

总和减少5，数据有5组，所以平均值减少

$
\boxed{1}.
$

### 2.

修正前后 $y$ 的总和不变，所以平均值仍为14。

修正前两项偏差平方和：

$
(11-14)^2+(20-14)^2=45.
$

修正后：

$
(13-14)^2+(18-14)^2=17.
$

因此

$
\boxed{\text{方差减少}}.
$

### 3.

新增数据恰好等于两个变量原来的平均值，因此新增偏差为 $(0,0)$。

偏差平方和与偏差乘积和都不增加，而数据个数同时改变相同比例，所以

$
\boxed{\text{相关系数不变}}.
$

</details>

---

## 本讲整理

> 平均值：先看总和。  
> 方差：总和＋平方和。  
> 线性变换：平均看 $a,b$，方差看 $a^2$，标准差看 $|a|$。