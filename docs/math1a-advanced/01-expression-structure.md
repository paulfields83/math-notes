---
title: 第1讲 式的结构与高次变形
sidebar_position: 1
---

# 第1讲 式的结构与高次变形

本讲对应 **High Level 数学I 第1講**：

- PART1　因数分解
- PART2　式の値

PART3「1次不等式」放到第2讲。

## 数与式｜领域回顾

“数与式”这一领域，基础概念可以分成四块。这里先把整张知识地图过一遍，后面两讲只取各自需要的部分。

- **式的计算与展开**：单项式、多项式、次数与系数；同类项；按某个字母升幂或降幂整理；基本展开公式。
- **因式分解**：公因式；完全平方与平方差；二次式分解；十字相乘；整体代换。
- **实数**：有理数与无理数；绝对值；根式运算；$\sqrt{a^2}=|a|$；分母有理化。
- **一次不等式**：不等式基本性质；连立不等式；双重不等式；绝对值方程与不等式。

第1讲主要使用“式的计算・因式分解・根式”，第2讲主要使用“一次不等式・绝对值”。

:::tip[完整复习入口]
这里仅做快速唤醒。概念记不清时，回到左侧 **数学1A基础 → 第2章 数与式** 查看完整概念集。
:::

---

## 本讲课前回顾

正式做 High Level 之前，先确认下面四点。

### 1. 多字母整式可以选择主元

含有多个字母时，可以只把其中一个字母看作变量，其余字母暂时看作常数。

例如关于 $x$ 整理：

$
A(y)x^2+B(y)x+C(y).
$

这里 $A(y),B(y),C(y)$ 都是关于 $x$ 的系数。

### 2. 常用因式分解结构

$
A^2-B^2=(A-B)(A+B)
$

$
A^2+2AB+B^2=(A+B)^2
$

$
A^2-2AB+B^2=(A-B)^2
$

以及

$
X^2+(p+q)X+pq=(X+p)(X+q).
$

关键是：$A,B,X$ 都可以是一整个式子。

### 3. 看见重复结构，可以整体处理

式子中反复出现同一部分时，可以暂时把它看成一个新的字母。

例如

$
ax^4+bx^2+c
$

本质上是关于 $x^2$ 的二次式。是否换元，取决于这样做能不能把问题降成熟悉的形式。

### 4. 根式的基本关系

$
(\sqrt a)^2=a,\qquad \sqrt{a^2}=|a|.
$

根式乘除、化简和分母有理化属于基础运算。本讲遇到二重根号时，会在这些基本运算上继续向前一步。

---

## 1　次数较低的字母优先

### 知识点

含有多个字母的整式，可以只把其中一个字母看作变量，其余字母暂时看作常数。

如果关于 $x$ 是二次，而关于 $y$ 只有一次，通常优先关于 $y$ 整理。次数越低，整理后的结构通常越简单。

### 解题技巧

先看每个字母的最高次数。

> **看次数 → 选主元 → 按主元整理 → 再找因式**

不要一开始凭感觉乱分组。

:::info[High Level 讲义题｜PART1 1⑴]
将下式因式分解：

$$
xy-yz+x^2-zx
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

按 $x,z$ 分组：

$$
xy-yz+x^2-zx
=x(x+y)-z(x+y)
$$

因此

$$
\boxed{(x+y)(x-z)}.
$$

</details>


:::note[同类型练习｜PART1 確認問題 1]
将下式因式分解，并填入空格：

$$
-4xy-6yz+2x^2+3zx
=(x-\boxed{\text{ア}}y)
(\boxed{\text{イ}}x+\boxed{\text{ウ}}z)
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

重新排列：

$$
-4xy-6yz+2x^2+3zx
=2x(x-2y)+3z(x-2y)
$$

所以

$$
\boxed{(x-2y)(2x+3z)}.
$$

因此：

$$
\boxed{\text{ア}=2,\quad \text{イ}=2,\quad \text{ウ}=3}.
$$

</details>


---

## 2　两个字母都是二次：比较哪种整理更好

### 知识点

如果一个式子关于 $x$、关于 $y$ 看都是二次式，就没有明显的“低次字母”。

此时可以任选一个字母作为主元。例如关于 $x$ 整理后：

$$
A(y)x^2+B(y)x+C(y).
$$

虽然系数中含有 $y$，但对 $x$ 来说仍然只是普通二次式。

### 解题技巧

不用纠结“必须选 $x$ 还是 $y$”。

要比较的是：

> **选哪个以后，系数更容易出现因式结构。**

系数不一定是数字，也可以是整式。

:::info[High Level 讲义题｜PART1 1⑵]
将下式因式分解：

$$
x^2-4xy+3y^2+x-5y-2
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

把式子看成关于 $x$ 的二次式：

$$
x^2+(1-4y)x+(3y^2-5y-2).
$$

常数项

$$
3y^2-5y-2=(3y+1)(y-2).
$$

为了使两个一次因式中 $x$ 的系数和为 $1-4y$，取

$$
(-3y-1)+(-y+2)=1-4y.
$$

因此

$$
\boxed{(x-3y-1)(x-y+2)}.
$$

</details>


:::note[同类型练习｜PART1 確認問題 2]
将下式因式分解，并填入空格：

$$
x^2+4xy+3y^2+2x-2y-8
$$

$$
=(x+y-\boxed{\text{エ}})
(x+\boxed{\text{オ}}y+\boxed{\text{カ}})
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

把式子看成关于 $x$ 的二次式：

$$
x^2+(4y+2)x+(3y^2-2y-8).
$$

而

$$
3y^2-2y-8=(y-2)(3y+4),
$$

且

$$
(y-2)+(3y+4)=4y+2.
$$

所以

$$
\boxed{(x+y-2)(x+3y+4)}.
$$

因此：

$$
\boxed{\text{エ}=2,\quad \text{オ}=3,\quad \text{カ}=4}.
$$

</details>


---

## 3　三字母式：先整理，再找结构

### 知识点

当 $a,b,c$ 三个字母同时出现，而且关于每个字母看都是二次式时，仍然可以选其中一个字母作为主元。

例如选择 $a$，就整理成

$$
A(b,c)a^2+B(b,c)a+C(b,c).
$$

原来的三字母式就暂时变成关于 $a$ 的二次式。

### 解题技巧

按下面的顺序做：

1. 选一个字母；
2. 按这个字母降幂整理；
3. 把另外两个字母组成的式子看成系数；
4. 按二次式观察；
5. 最后整理整体结构。

复杂多项式往往不是没有结构，而是原来的排列顺序把结构藏起来了。

:::info[High Level 讲义题｜PART1 1⑶]
将下式因式分解：

$$
a(b^2-c^2)+b(c^2-a^2)+c(a^2-b^2)
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

按 $a$ 整理：

$$
\begin{aligned}
&a(b^2-c^2)+b(c^2-a^2)+c(a^2-b^2)\\
&=(c-b)\{a^2-a(b+c)+bc\}\\
&=(c-b)(a-b)(a-c).
\end{aligned}
$$

整理符号后：

$$
\boxed{(a-b)(b-c)(c-a)}.
$$

</details>


:::note[同类型练习｜PART1 確認問題 3]
将下式因式分解：

$$
a^2b-a^2c+b^2a-c^2a+b^2c-c^2b
$$

从下列形式中选择正确结果：

1. $(a+b)(b+c)(c+a)$
2. $(a+b)(b+c)(c-a)$
3. $(a+b)(b-c)(c+a)$
4. $(a+b)(b-c)(c-a)$
5. $(a-b)(b+c)(c+a)$
6. $(a-b)(b+c)(c-a)$
7. $(a-b)(b-c)(c+a)$
8. $(a-b)(b-c)(c-a)$
:::

<details className="solution-details">
<summary>查看答案</summary>

整理为：

$$
\begin{aligned}
&a^2b-a^2c+b^2a-c^2a+b^2c-c^2b\\
&=a^2(b-c)+a(b^2-c^2)+bc(b-c)\\
&=(b-c)\{a^2+a(b+c)+bc\}\\
&=(a+b)(b-c)(a+c).
\end{aligned}
$$

所以正确结果是

$$
\boxed{(a+b)(b-c)(c+a)}
$$

即选择 **3**。

</details>


---

## 4　复二次式：把四次式降成二次式

### 知识点

如果一个式子只含有

$$
x^4,\quad x^2,\quad 1
$$

这样的偶次幂，那么它虽然最高是四次，实际上可以看成关于 $x^2$ 的二次式。

令

$$
X=x^2,
$$

则

$$
ax^4+bx^2+c
$$

变成

$$
aX^2+bX+c.
$$

这类式子称为复二次式。

### 解题技巧

看到只有偶次幂，先想：

$$
X=x^2.
$$

换元以后若仍不能直接因式分解，再检查能否补成完全平方，制造

$$
A^2-B^2
$$

的结构。

> **先降次；降次后还不行，再配平方。**

:::info[High Level 讲义题｜PART1 1⑷]
将下式因式分解：

$$
x^4+5x^2+9
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

制造平方差：

$$
\begin{aligned}
x^4+5x^2+9
&=x^4+6x^2+9-x^2\\
&=(x^2+3)^2-x^2\\
&=(x^2-x+3)(x^2+x+3).
\end{aligned}
$$

答案：

$$
\boxed{(x^2-x+3)(x^2+x+3)}.
$$

</details>


:::note[同类型练习｜PART1 確認問題 4]
将下式因式分解，并填入空格：

$$
x^4-x^2+16
$$

$$
=(x^2+\boxed{\text{ク}}x+\boxed{\text{ケ}})
(x^2-\boxed{\text{コ}}x+\boxed{\text{サ}})
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

制造平方差：

$$
\begin{aligned}
x^4-x^2+16
&=x^4+8x^2+16-9x^2\\
&=(x^2+4)^2-(3x)^2\\
&=(x^2+3x+4)(x^2-3x+4).
\end{aligned}
$$

因此：

$$
\boxed{\text{ク}=3,\ \text{ケ}=4,\ \text{コ}=3,\ \text{サ}=4}.
$$

</details>


---

## 5　二重根号与整数部分、小数部分

这里进入 PART2「式の値」。

### 知识点

形如

$$
\sqrt{a\pm2\sqrt b}
$$

的式子，可以尝试写成

$$
\sqrt m\pm\sqrt n.
$$

因为

$$
(\sqrt m\pm\sqrt n)^2
=
m+n\pm2\sqrt{mn}.
$$

所以需要寻找

$$
m+n=a,\qquad mn=b.
$$

### 解题技巧

二重根号不要硬拆。

先找“和”与“积”，化简后再判断原数落在哪两个相邻整数之间。

顺序是：

> **去二重根号 → 判断范围 → 求整数部分 → 求小数部分**

:::info[High Level 讲义题｜PART2 2［1］]
化简

$$
\sqrt{27-10\sqrt2}
$$

使其不含二重根号。

再设该数的整数部分为 $a$，小数部分为 $b$，求 $b$，并要求结果中不含二重根号。
:::

<details className="solution-details">
<summary>查看答案</summary>

设

$$
\sqrt{27-10\sqrt2}=\sqrt m-\sqrt n.
$$

平方比较可得

$$
m+n=27,\qquad mn=50.
$$

因此 $m=25,n=2$，所以

$$
\sqrt{27-10\sqrt2}=5-\sqrt2.
$$

又因为

$$
3<5-\sqrt2<4,
$$

整数部分为 $3$，小数部分为

$$
(5-\sqrt2)-3=2-\sqrt2.
$$

答案：

$$
\boxed{5-\sqrt2},\qquad
\boxed{a=3},\qquad
\boxed{b=2-\sqrt2}.
$$

</details>


:::note[同类型练习｜PART2 確認問題 1]
将

$$
\sqrt{86-18\sqrt5}
$$

去掉二重根号后，可写成

$$
\boxed{\text{ア}}-\sqrt{\boxed{\text{イ}}}.
$$

若其整数部分为 $a$，小数部分为 $b$，则

$$
a=\boxed{\text{ウ}},
$$

$$
b=\boxed{\text{エ}}-\sqrt{\boxed{\text{オ}}}.
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

因为

$$
86-18\sqrt5=81+5-18\sqrt5=(9-\sqrt5)^2,
$$

所以

$$
\sqrt{86-18\sqrt5}=9-\sqrt5.
$$

又有

$$
6<9-\sqrt5<7,
$$

故整数部分为 $6$，小数部分为

$$
(9-\sqrt5)-6=3-\sqrt5.
$$

因此：

$$
\boxed{\text{ア}=9,\ \text{イ}=5,\ \text{ウ}=6,\ \text{エ}=3,\ \text{オ}=5}.
$$

</details>


---

## 6　基本对称式与高次变形

### 知识点

已知

$$
x+\frac1x=t
$$

时，如果要求

$$
x^2+\frac1{x^2},
$$

不必先求 $x$。

因为

$$
\left(x+\frac1x\right)^2
=
x^2+2+\frac1{x^2},
$$

所以

$$
x^2+\frac1{x^2}=t^2-2.
$$

之后继续利用已经得到的低次结果，求三次、四次。

### 解题技巧

这一类题最重要的是：

> **不要先求 $x$。**

题目要求的是关于 $x$ 与 $1/x$ 的对称式，就保留这个结构。

基本推进顺序：

$$
x+\frac1x
\rightarrow
x^2+\frac1{x^2}
\rightarrow
x^3+\frac1{x^3}
\rightarrow
x^4+\frac1{x^4}.
$$

对于

$$
x-\frac1x,
$$

可以先利用

$$
\left(x-\frac1x\right)^2
=
\left(x+\frac1x\right)^2-4
$$

求平方，再根据题目给出的 $x$ 的范围判断正负。

:::info[High Level 讲义题｜PART2 2［2］]
已知

$$
x+\frac1x=\sqrt7,\qquad x>1.
$$

求下列各式的值：

1. $x^2+\dfrac1{x^2}$
2. $x^3+\dfrac1{x^3}$
3. $x^4+\dfrac1{x^4}$
4. $x-\dfrac1x$
:::

<details className="solution-details">
<summary>查看答案</summary>

已知

$$
x+\frac1x=\sqrt7,\qquad x>1.
$$

1. 平方：

$$
x^2+\frac1{x^2}
=\left(x+\frac1x\right)^2-2
=7-2
=\boxed5.
$$

2.

$$
x^3+\frac1{x^3}
=\left(x+\frac1x\right)^3-3\left(x+\frac1x\right)
=7\sqrt7-3\sqrt7
=\boxed{4\sqrt7}.
$$

3.

$$
x^4+\frac1{x^4}
=\left(x^2+\frac1{x^2}\right)^2-2
=25-2
=\boxed{23}.
$$

4.

$$
\left(x-\frac1x\right)^2
=x^2+\frac1{x^2}-2
=3.
$$

由于 $x>1$，所以 $x-\dfrac1x>0$，因此

$$
\boxed{x-\frac1x=\sqrt3}.
$$

</details>


:::note[同类型练习｜PART2 確認問題 2]
已知

$$
x+\frac1x=\sqrt6,\qquad x>1.
$$

求下列各式的值，并填入空格：

$$
x^2+\frac1{x^2}=\boxed{\text{カ}}
$$

$$
x^3+\frac1{x^3}
=
\boxed{\text{キ}}
\sqrt{\boxed{\text{ク}}}
$$

$$
x^4+\frac1{x^4}
=
\boxed{\text{ケコ}}
$$

$$
x-\frac1x
=
\sqrt{\boxed{\text{サ}}}
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

由

$$
x+\frac1x=\sqrt6
$$

得到

$$
x^2+\frac1{x^2}=6-2=\boxed4.
$$

再有

$$
x^3+\frac1{x^3}
=(\sqrt6)^3-3\sqrt6
=\boxed{3\sqrt6},
$$

$$
x^4+\frac1{x^4}
=4^2-2
=\boxed{14}.
$$

最后

$$
\left(x-\frac1x\right)^2=4-2=2.
$$

因为 $x>1$，取正号：

$$
x-\frac1x=\boxed{\sqrt2}.
$$

所以：

$$
\boxed{\text{カ}=4,\ \text{キ}=3,\ \text{ク}=6,\ \text{ケコ}=14,\ \text{サ}=2}.
$$

</details>


---

## 本讲整理

这一讲虽然题目形式不同，实际反复训练的是三件事。

### 1. 换一个角度看式子

- 多字母式：换主元；
- 复二次式：把 $x^2$ 看成整体；
- 对称式：把 $x$ 与 $1/x$ 看成一组。

### 2. 把复杂问题降成已经会做的问题

$$
\text{多字母式}
\rightarrow
\text{一元二次式}
$$

$$
\text{四次式}
\rightarrow
\text{二次式}
$$

$$
\text{高次对称式}
\rightarrow
\text{低次对称式}
$$

### 3. 计算前先找结构

先问：

> **这个式子应该怎么看，才能变成我已经会做的问题？**
