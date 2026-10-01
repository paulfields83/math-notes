---
title: 第5讲 最大・最小与参数
sidebar_position: 5
---
# 第5讲 最大・最小与参数

本讲对应 **High Level 数学I 第4講 PART1～3**。

## 本讲课前回顾
对 $y=a(x-p)^2+q$，顶点是 $(p,q)$，轴是 $x=p$。有限区间上的最值必须同时看顶点与端点。

## 1 固定定义域・对称轴移动【新增】

### 知识点
这一类与“定义域移动”正好相反：

- 定义域固定；
- 参数使对称轴的位置移动。

典型形式：
$
f(x)=x^2-2ax,\qquad 0\le x\le3.
$

配方：
$
f(x)=(x-a)^2-a^2,
$
所以轴为 $x=a$。

分类点来自轴与区间端点的位置关系：
$
a=0,\qquad a=3.
$

![固定区间与移动对称轴](/img/math1a-advanced/lesson05/fixed-domain-moving-axis.svg)

:::info[追加例题｜固定定义域・轴移动]
函数
$
f(x)=x^2-2ax\qquad(0\le x\le3)
$
的最小値を $a$ の範囲で場合分けして求めよ。
:::

<details className="solution-details">
<summary>查看答案</summary>

$
f(x)=(x-a)^2-a^2.
$

- $a<0$：轴在区间左侧，最小值在 $x=0$：
  $
  f(0)=0.
  $
- $0\le a\le3$：轴在区间内，最小值在 $x=a$：
  $
  f(a)=-a^2.
  $
- $a>3$：轴在区间右侧，最小值在 $x=3$：
  $
  f(3)=9-6a.
  $

所以
$
\boxed{
m(a)=
\begin{cases}
0,&a<0,\\
-a^2,&0\le a\le3,\\
9-6a,&a>3.
\end{cases}}
$

</details>

## 2 定义域移动时的最大最小
### 知识点
轴在区间内时，顶点可能给出最小/最大；轴在区间外时，比较端点与轴的远近。
### 解题技巧
先画数轴，标出**左端点、右端点、对称轴**，再分类。

**解说图**

![定义域与对称轴的位置关系](/img/math1a-advanced/lesson05/domain-axis-cases.svg)
:::info[High Level 讲义题｜第4講 PART1]
関数
$$
f(x)=x^2-4x-5\qquad(a\le x\le a+2)
$$
について、
1. 最小値 $m(a)$ を求めよ。
2. 最大値 $M(a)$ を求めよ。
:::

<details className="solution-details">
<summary>查看答案</summary>

先配方：

$$
f(x)=x^2-4x-5=(x-2)^2-9.
$$

轴为 $x=2$，定义域为 $[a,a+2]$。

### 1. 最小值

- $a<0$：整个区间在轴左侧，最小值在 $x=a+2$：
  $$
  m(a)=a^2-9.
  $$
- $0\le a\le2$：区间包含轴 $x=2$：
  $$
  m(a)=-9.
  $$
- $a>2$：整个区间在轴右侧，最小值在 $x=a$：
  $$
  m(a)=a^2-4a-5.
  $$

因此

$$
\boxed{
m(a)=
\begin{cases}
a^2-9,&a<0,\\
-9,&0\le a\le2,\\
a^2-4a-5,&a>2.
\end{cases}}
$$

### 2. 最大值

比较两个端点到轴 $x=2$ 的距离。区间中央为 $x=a+1$。

- $a<1$ 时左端点较远；
- $a=1$ 时两端等距；
- $a>1$ 时右端点较远。

所以

$$
\boxed{
M(a)=
\begin{cases}
a^2-4a-5,&a<1,\\
-8,&a=1,\\
a^2-9,&a>1.
\end{cases}}
$$

</details>

:::note[当堂练习｜PART1 確認問題]
関数
$$
f(x)=x^2-2x+3\qquad(a\le x\le a+1)
$$
について、最小値 $m(a)$、最大値 $M(a)$ をそれぞれ $a$ の範囲で場合分けして求めよ。
:::

<details className="solution-details">
<summary>查看答案</summary>

配方：

$$
f(x)=x^2-2x+3=(x-1)^2+2.
$$

定义域为 $[a,a+1]$。

最小值为

$$
\boxed{
m(a)=
\begin{cases}
a^2+2,&a<0,\\
2,&0\le a\le1,\\
a^2-2a+3,&a>1.
\end{cases}}
$$

最大值比较两端点到轴 $x=1$ 的距离。区间中央为 $a+\dfrac12$，所以

$$
\boxed{
M(a)=
\begin{cases}
a^2-2a+3,&a<\dfrac12,\\
\dfrac94,&a=\dfrac12,\\
a^2+2,&a>\dfrac12.
\end{cases}}
$$

</details>


## 3 开区间・半开区间与最值的存在【新增】

### 知识点
闭区间上的端点可以取到；开区间或半开区间的某些端点不能取到。

因此：

> 函数值“无限接近某个数”不等于“取得这个数”。

例如定义域为
$
-1\le x<2
$
时，$x=2$ 不能代入。

![开端点与最值存在性](/img/math1a-advanced/lesson05/open-closed-extrema.svg)

:::info[追加例题｜最值是否存在]
函数
$
f(x)=x^2-2x+3\qquad(-1\le x<2)
$
の最大値・最小値を調べよ。
:::

<details className="solution-details">
<summary>查看答案</summary>

$
f(x)=(x-1)^2+2.
$

顶点 $x=1$ 属于定义域，所以
$
\boxed{\text{最小值 }2}.
$

左端点 $x=-1$ 可以取到：
$
f(-1)=6.
$

右端点 $x=2$ 不能取，而且接近 $x=2$ 时函数值只接近 $3$。因此最大值仍在左端点取得：

$
\boxed{\text{最大值 }6}.
$

</details>

:::note[当堂练习｜开区间]
函数
$
g(x)=-x^2+6x\qquad(0<x\le4)
$
の最大値・最小値の有無を調べよ。
:::

<details className="solution-details">
<summary>查看答案</summary>

$
g(x)=-(x-3)^2+9.
$

顶点 $x=3$ 在定义域内，所以
$
\boxed{\text{最大值 }9}.
$

当 $x\to0^+$ 时，$g(x)\to0$，但 $x=0$ 不能取；另一方面 $g(4)=8$。

因此函数值可以任意接近 $0$，但不能取得 $0$，所以

$
\boxed{\text{最小值不存在}}.
$

</details>

## 4 二变量函数与四次函数的最大最小
### 知识点
有约束的二变量函数先消元；只含 $x^4,x^2$ 的四次函数令 $X=x^2$，但要补上 $X\ge0$。
### 解题技巧
**换元后一定重写定义域。**
:::info[High Level 讲义题｜第4講 PART2]
1. $x+y=3$ のとき、
   - $3x^2+2y^2$ の最小値を求めよ。
   - さらに $x\ge2,\ y\ge-1$ のとき、$3x^2+2y^2$ の最大値・最小値を求めよ。
2. 関数
$$
y=x^4+4x^2+3
$$
について、$x^2=t$ とおき、
   - $y$ を $t$ の式で表せ。
   - $t$ の取り得る範囲を求めよ。
   - $y$ の最小値と、そのときの $x$ を求めよ。
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1⑴

由

$$
x+y=3
$$

得 $y=3-x$。代入：

$$
3x^2+2y^2
=3x^2+2(3-x)^2
=5\left(x-\frac65\right)^2+\frac{54}{5}.
$$

所以

$$
\boxed{x=\frac65,\ y=\frac95}
$$

时取得最小值

$$
\boxed{\frac{54}{5}}.
$$

### 1⑵

由 $y=3-x$ 且 $x\ge2,\ y\ge-1$ 得

$$
2\le x\le4.
$$

上式的顶点 $x=\dfrac65$ 在区间左侧，因此在该区间单调增加。

故

$$
\boxed{\text{最小值 }14\ (x,y)=(2,1)},
$$

$$
\boxed{\text{最大值 }50\ (x,y)=(4,-1)}.
$$

### 2

令 $t=x^2$：

$$
y=t^2+4t+3=(t+2)^2-1.
$$

由于

$$
t=x^2\ge0,
$$

所以在 $t\ge0$ 上最小值在 $t=0$ 取得。

因此

$$
\boxed{y_{\min}=3,\quad x=0}.
$$

</details>

:::note[当堂练习｜PART2 確認問題]
1. $3x+y=2$ のとき、$3x^2+y^2$ の最小値を求めよ。
2. $3x+y=2,\ x\ge1,\ y\ge-4$ のとき、$3x^2+y^2$ の最大値・最小値を求めよ。
3. $y=x^4+2x^2+2$ に対して $x^2=t$ とおき、$y$ の最小値とそのときの $x$ を求めよ。
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

由 $3x+y=2$ 得 $y=2-3x$。

$$
3x^2+y^2
=3x^2+(2-3x)^2
=12\left(x-\frac12\right)^2+1.
$$

所以

$$
\boxed{x=\frac12,\ y=\frac12}
$$

时取得最小值

$$
\boxed{1}.
$$

### 2.

又有 $x\ge1,\ y\ge-4$，而 $y=2-3x$，所以

$$
1\le x\le2.
$$

函数在该区间上递增，因此

$$
\boxed{\text{最小值 }4\ (x,y)=(1,-1)},
$$

$$
\boxed{\text{最大值 }28\ (x,y)=(2,-4)}.
$$

### 3.

令 $t=x^2\ge0$：

$$
y=t^2+2t+2=(t+1)^2+1.
$$

在 $t\ge0$ 上最小值在 $t=0$ 取得，所以

$$
\boxed{y_{\min}=2,\quad x=0}.
$$

</details>

## 5 已知最大・最小反求参数

### 解题技巧
先根据开口方向、对称轴与定义域的位置判断“最大值/最小值分别在哪个点取得”，再列方程。

:::info[High Level 讲义题｜原第4講 PART3-2]
定義域 $-2\le x\le1$ の関数
$$
f(x)=ax^2+2ax+b
$$
の最大値が6、最小値が3であるとき、$a,b$ を求めよ。
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
f(x)=a(x+1)^2-a+b.
$$

轴 $x=-1$ 在定义域内。

若 $a>0$：
$$
-a+b=3,\qquad 3a+b=6,
$$
所以
$$
\boxed{a=\frac34,\ b=\frac{15}{4}}.
$$

若 $a<0$：
$$
-a+b=6,\qquad 3a+b=3,
$$
所以
$$
\boxed{a=-\frac34,\ b=\frac{21}{4}}.
$$

</details>

:::note[当堂练习｜反推参数]
定義域 $1\le x\le4$ の関数
$$
f(x)=ax^2-4ax+b
$$
の最大値が12、最小値が4であるとき、$a,b$ を求めよ。
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
f(x)=a(x-2)^2+b-4a.
$$

轴 $x=2$ 在定义域内。

若 $a>0$，最小值在 $x=2$，最大值在 $x=4$：
$$
b-4a=4,\qquad b=12.
$$
所以
$$
\boxed{a=2,\ b=12}.
$$

若 $a<0$，最大值在 $x=2$，最小值在 $x=4$：
$$
b-4a=12,\qquad b=4.
$$
所以
$$
\boxed{a=-2,\ b=4}.
$$

</details>

## 本讲练习分配

### 当堂练习
- 固定定义域・轴移动
- High Level PART1 的移动定义域最大值
- 开区间最值是否存在
- 二变量消元与四次换元各1题
- 已知最大・最小反求参数

### 课后作业
1. **4STEP 148～151** 中选1题：固定定义域＋移动对称轴
2. **4STEP 157 或 158**：移动定义域最值
3. 网站 PART2 確認問題1：二变量消元
4. 网站 PART2 確認問題3：$t=x^2$ 换元
5. 半开区间最大・最小问题1题

### 挑战题
同时含“参数决定对称轴”和“参数决定定义域”的最值题。
