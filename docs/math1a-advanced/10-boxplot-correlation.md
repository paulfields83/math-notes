---
title: 第10讲 数据变换・共分散・相关系数
sidebar_position: 10
---

# 第10讲 数据变换・共分散・相关系数

本讲从第9讲的“一个变量的散布”进入“两个变量之间的关系”。

基础的正相关・负相关不重新展开，重点是：

$$
\boxed{
\text{数据变换}
\rightarrow
\text{共分散}
\rightarrow
\text{相关系数}
\rightarrow
\text{相关的正确解释}
}
$$

## 课前回顾｜5分钟

需要立即想起：

$$
s^2=\overline{x^2}-\bar x^2,
\qquad
s=\sqrt{s^2}.
$$

相关系数中的两个标准差，就是从这里来的。

---

## 1　变量的线性变换

若

$$
x=au+b,
$$

则

$$
\boxed{
\bar x=a\bar u+b
}
$$

$$
\boxed{
s_x^2=a^2s_u^2
}
$$

$$
\boxed{
s_x=|a|s_u
}
$$

### 判断框架

- 加 $b$：整体平移，散布不变；
- 乘 $a$：距离扩大为 $|a|$ 倍；
- 所以标准差乘 $|a|$，方差乘 $a^2$。

**解说图（由教材数据重绘）**

![变量变换示意](/img/math1a-advanced/lesson09/part2-transform-numberline.svg)

:::info[High Level 讲义题｜第11講 PART2]
设 $a,b$ 为常数。变量 $u$ 与由

$$
x=au+b
$$

定义的变量 $x$ 的平均值分别为 $\bar u,\bar x$，方差分别为 $s_u^2,s_x^2$。

对数据

$$
526, 484, 532, 538, 550, 502
$$

令

$$
u=\frac{x-520}{6},
$$

利用变换公式求变量 $x$ 的平均值与方差。
:::

<details className="solution-details">
<summary>查看答案</summary>

各数据对应

$$
u=1,-6,2,3,5,-3.
$$

所以

$$
\bar u=\frac13.
$$

由 $x=6u+520$，

$$
\bar x=6\bar u+520
=\boxed{522}.
$$

又

$$
s_u^2
=
14-\left(\frac13\right)^2
=
\frac{125}{9},
$$

因此

$$
s_x^2
=
36\cdot\frac{125}{9}
=
\boxed{500}.
$$

</details>

:::note[同类型练习｜第11講 PART2 確認問題]
数据为

$$
798, 750, 774, 782, 726.
$$

令

$$
u=\frac{x-750}{8}.
$$

求

$$
\bar u,\quad \bar x,\quad s_u^2,\quad s_x^2.
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
u=6,0,3,4,-3,
\qquad
\bar u=\boxed{2}.
$$

因此

$$
\bar x=8\cdot2+750
=\boxed{766}.
$$

又

$$
s_u^2
=
14-2^2
=
\boxed{10},
$$

$$
s_x^2
=
8^2\cdot10
=
\boxed{640}.
$$

</details>

---

## 2　散点图：先看方向，再看“像不像直线”

观察散点图时先问：

1. 整体向右上还是右下？
2. 点是否集中在一条直线附近？

- 向右上：正相关倾向；
- 向右下：负相关倾向；
- 越接近直线：线性关系越强。

注意：

$$
\boxed{
\text{有明显关系}
\not\Rightarrow
|r|\text{ 一定大}
}
$$

例如明显的U形关系，虽然两个变量之间存在规律，但线性相关可能很弱。

:::info[教材例题｜散布図を自分でかく]
下面给出10组二变量数据。

| $x$ | 3.7 | 2.8 | 4.2 | 1.9 | 5.1 | 1.6 | 5.4 | 2.3 | 4.7 | 3.5 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $y$ | 5.3 | 7.6 | 3.2 | 4.8 | 6.5 | 6.9 | 4.1 | 3.4 | 7.3 | 5.7 |

画出散点图，并判断 $x,y$ 之间是否存在明显的正相关或负相关。
:::

<details className="solution-details">
<summary>查看答案</summary>

作图略。

点分布没有明显向右上或右下集中，因此

$$
\boxed{\text{没有明显的相关关系}}
$$

> 这里的重点是先画图、先判断趋势，不要一看到两个变量就立刻计算相关系数。

</details>

---

## 3　共分散：先判断“方向”

两变量 $x,y$ 的共分散：

$$
\boxed{
s_{xy}
=
\frac1n\sum_{i=1}^{n}
(x_i-\bar x)(y_i-\bar y)
}
$$

看偏差乘积即可理解：

- 两个都高于平均 → 正；
- 两个都低于平均 → 正；
- 一个高、一个低 → 负。

因此：

$$
s_{xy}>0
\Rightarrow
\text{正相关倾向},
$$

$$
s_{xy}<0
\Rightarrow
\text{负相关倾向}.
$$

但是：

$$
\boxed{\text{共分散的大小不能直接比较相关强弱}}
$$

因为共分散会随单位和尺度变化。

---

## 4　为什么还需要相关系数

为了消掉单位和尺度的影响，用两个标准差进行标准化：

$$
\boxed{
r=\frac{s_{xy}}{s_xs_y}
}
$$

于是

$$
-1\le r\le1.
$$

判断顺序：

1. $r$ 的正负 → 方向；
2. $|r|$ 的大小 → **线性关系**的强弱；
3. $r\approx0$ → 只能说明线性相关弱。

> “相关很强”与“共分散很大”不是同一件事。

:::info[教材例题｜標準偏差と共分散から相関係数]
某棒球队20名选手的身高 $x$（cm）与体重 $y$（kg）的数据中，

$$
s_x=5.05,\qquad
s_y=4.26,\qquad
s_{xy}=13.77.
$$

求 $x,y$ 的相关系数。结果四舍五入到小数第2位。
:::

<details className="solution-details">
<summary>查看答案</summary>

由

$$
r=\frac{s_{xy}}{s_xs_y},
$$

得到

$$
r
=
\frac{13.77}{5.05\cdot4.26}
\approx0.640.
$$

所以

$$
\boxed{r\approx0.64}.
$$

</details>

:::note[確認問題｜共分散と相関係数の違い]
判断下面三个说法是否正确。

1. 两变量之间的相关越强，共分散的值就一定越大。
2. 若只改变其中一个变量的测量单位，共分散的值一般会改变。
3. 若只改变其中一个变量的测量单位，相关系数的值一般也会改变。
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
\boxed{1:\text{错误},\qquad 2:\text{正确},\qquad 3:\text{错误}}
$$

1. 共分散受到数据尺度影响，不能只根据“相关很强”判断数值一定大。
2. 单位变换相当于把一个变量乘正常数，因此共分散会同比例变化。
3. 同样的正比例因子也会出现在标准差中，在
   $$
   r=\frac{s_{xy}}{s_xs_y}
   $$
   中抵消，所以相关系数不变。

</details>

---

## 5　线性变换后，共分散和相关系数怎么变

若

$$
X=ax+b,\qquad Y=cy+d,
$$

则

$$
\boxed{
s_{XY}=ac\,s_{xy}
}
$$

同时

$$
s_X=|a|s_x,
\qquad
s_Y=|c|s_y.
$$

因此：

$$
r_{XY}
=
\frac{ac}{|a||c|}r_{xy}.
$$

也就是

$$
\boxed{
r_{XY}
=
\begin{cases}
r_{xy}, & ac>0,\\
-r_{xy}, & ac<0.
\end{cases}
}
$$

### 结论

- 平移：相关系数不变；
- 正的单位换算：相关系数不变；
- 其中一个变量乘负数：相关系数符号反转；
- 共分散会随尺度变化，但相关系数的绝对值保持不变。

:::info[教材例题｜変量変換と共分散・相関係数]
有50组二变量数据

$$
(x_1,y_1),\ldots,(x_{50},y_{50}),
$$

已知 $x,y$ 的共分散为192，相关系数为0.55。

对下面各组新变量 $z,w$，分别求 $z,w$ 的共分散和相关系数。

1.
   $$
   z=x+3,\qquad w=4y
   $$
2.
   $$
   z=\frac12x,\qquad w=2y-5
   $$
3.
   $$
   z=-2x-2,\qquad w=\frac23y
   $$
:::

<details className="solution-details">
<summary>查看答案</summary>

若

$$
z=ax+b,\qquad w=cy+d,
$$

则

$$
s_{zw}=ac\,s_{xy}.
$$

同时：

$$
ac>0\Rightarrow r_{zw}=r_{xy},
\qquad
ac<0\Rightarrow r_{zw}=-r_{xy}.
$$

### 1.

$$
ac=1\cdot4=4.
$$

因此

$$
s_{zw}=4\cdot192=\boxed{768},
$$

$$
r_{zw}=\boxed{0.55}.
$$

### 2.

$$
ac=\frac12\cdot2=1.
$$

因此

$$
s_{zw}=\boxed{192},
\qquad
r_{zw}=\boxed{0.55}.
$$

### 3.

$$
ac=(-2)\cdot\frac23=-\frac43.
$$

因此

$$
s_{zw}
=
-\frac43\cdot192
=
\boxed{-256},
$$

$$
r_{zw}
=
\boxed{-0.55}.
$$

</details>

---

## 6　相关系数最容易误读的三件事

### ① $r\approx0$ 不代表“没有关系”

只能说：

$$
\boxed{\text{线性关系较弱}}
$$

### ② 外れ値会明显影响相关系数

一个远离主体数据的点，可能让 $r$ 明显增大、减小，甚至改变整体印象。

### ③ 相关不等于因果

$$
\boxed{\text{相关}\neq\text{因果}}
$$

即使 $|r|$ 很大，也不能仅据此断言：

> $x$ 的变化导致了 $y$ 的变化。

还可能存在第三变量、反向因果等情况。

---

## 本讲整理

$$
\boxed{\text{共分散：看方向，但受尺度影响}}
$$

$$
\boxed{\text{相关系数：标准化以后比较线性关系强弱}}
$$

$$
\boxed{\text{相关系数的题，最后一定检查“解释是否过头”}}
$$
