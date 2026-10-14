---
title: 第9讲 数据的散布・箱线图・方差的利用
sidebar_position: 9
---

# 第9讲 数据的散布・箱线图・方差的利用

本讲是“数据分析”领域的第一讲。基础定义默认已经学过，不重新从头讲；重点放在**图表判断、外れ値、方差的利用、数据合并与修正**这些容易在综合题中失分的地方。

## 领域回顾｜5～10分钟

只需要快速确认：

- 平均值：$\bar x$
- 中央值・四分位数：$Q_1,Q_2,Q_3$
- 四分位距：
  $$
  IQR=Q_3-Q_1
  $$
- 方差：
  $$
  s^2=\frac1n\sum_{i=1}^{n}(x_i-\bar x)^2
  $$
- 标准差：
  $$
  s=\sqrt{s^2}
  $$

本讲真正要建立的是下面的判断框架：

$$
\boxed{\text{图表能读什么}}
\rightarrow
\boxed{\text{散布怎么比较}}
\rightarrow
\boxed{\text{统计量变化时怎么处理}}
$$

---

## 1　箱线图与直方图：不要凭“形状像不像”

箱线图和直方图之间真正的桥梁是：

$$
\boxed{\text{累计频数}}
$$

处理对应题时，优先确认：

1. $Q_1$ 所在位置：累计约达到 $25\%$
2. $Q_2$ 所在位置：累计约达到 $50\%$
3. $Q_3$ 所在位置：累计约达到 $75\%$

:::info[High Level 讲义题｜第11講 PART1 1⑴]
教材给出一个箱线图，以及三个候选直方图①～③。

请选择所有能够由该箱线图所表示的数据画出的直方图。

直方图各组区间均为“包含左端点、不包含右端点”。

![第11講 PART1 講義問題1(1) 箱线图与直方图](/img/math1a-advanced/lesson10/hl-part1-q1-boxplot-histograms.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

从箱线图可读出：

- 最小值在 $[0,5)$；
- $Q_1$ 在 $[10,15)$；
- $Q_2$ 在 $[15,20)$；
- $Q_3$ 在 $[20,25)$；
- 最大值在 $[25,30)$。

逐一检查累计频数后，①、③满足这些条件，②不满足。

$$
\boxed{\text{①、③}}
$$

</details>

:::note[同类型练习｜第11講 PART1 確認問題 1]
教材给出一个箱线图，以及三个候选直方图 A、B、C。

分别判断 A、B、C 是否可能由该箱线图对应的数据画出。

![第11講 PART1 確認問題1 箱线图与直方图](/img/math1a-advanced/lesson10/confirm-part1-q1-boxplot-histograms.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

由箱线图可读出：

$$
Q_1\in[10,20),\qquad
Q_2\in[30,40),\qquad
Q_3\in[40,50).
$$

同时最小值在 $[0,10)$、最大值在 $[60,70)$。

因此

$$
\boxed{A:\text{错},\quad B:\text{对},\quad C:\text{对}}.
$$

</details>

---

## 2　多个箱线图：先判断“能不能推出”

比较多个箱线图时：

- 中心位置 → 看中位数；
- 全体范围 → 看极差；
- 中间 $50\%$ 的散布 → 看四分位距；
- “至少 / 至多有多少人” → 看四分位位置。

:::info[High Level 讲义题｜第11講 PART1 1⑵]
某校一年级50名学生参加英语、数学、国语考试。教材给出三科成绩的箱线图。

判断下列说法中哪些可以从图中正确读出：

1. 数据离散程度最大的是数学。
2. 60分以上的学生，英语不超过25人，而国语不少于25人。
3. 80分以上的学生，数学比国语更多。

![第11講 PART1 講義問題1(2) 三科箱线图](/img/math1a-advanced/lesson10/hl-part1-q2-three-boxplots.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

1. 数学的极差与四分位距都最大，所以正确。
2. 根据中位数的位置可以判断人数的上界、下界，所以正确。
3. 仅由第三四分位数的位置不能推出该结论。

$$
\boxed{1,\ 2}
$$

</details>

:::note[同类型练习｜第11講 PART1 確認問題 2]
A组、B组、C组各有38名学生参加数学考试。教材给出三组成绩的箱线图。

判断下列说法是否正确：

1. 离散程度最小的是B组。
2. 60分以下的学生，A组有19人以上，而B组不足18人。
3. 40分以下的学生，B组比C组少。

![第11講 PART1 確認問題2 三组箱线图](/img/math1a-advanced/lesson10/confirm-part1-q2-three-boxplots.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
\boxed{\text{①正确，②错误，③正确}}
$$

</details>

### 箱线图不能直接告诉你的东西

仅凭箱线图，一般不能确定：

- 平均值；
- 众数；
- 原始数据的具体数值；
- 普通区间内的精确人数。

> 看到箱线图时，先问“信息够不够”，再问“怎么算”。

---

## 3　外れ値：不要和“记录错误”混在一起

四分位距为

$$
IQR=Q_3-Q_1.
$$

常用判定基准：

$$
x\le Q_1-1.5IQR
$$

或

$$
x\ge Q_3+1.5IQR.
$$

满足条件的值作为外れ値处理。

### 两个易错点

**① 外れ値不等于异常数据。**

- 外れ値：从数据分布上看与其他值明显偏离；
- 異常値：测量错误、输入错误等原因明确的数据。

**② 计算四分位数时，不能先把外れ値删掉。**

四分位数仍然由全部原始数据确定；画箱线图时，再把外れ値单独标出。

---

## 4　方差真正好用的形式

定义：

$$
s^2
=
\frac1n\sum(x_i-\bar x)^2.
$$

但综合题更常用：

$$
\boxed{
s^2=\overline{x^2}-\bar x^2
}
$$

其中

$$
\overline{x^2}
=
\frac1n\sum x_i^2.
$$

### 为什么成立

$$
\begin{aligned}
s^2
&=\frac1n\sum(x_i-\bar x)^2\\
&=\frac1n\sum x_i^2
-2\bar x\frac1n\sum x_i
+\bar x^2\\
&=\overline{x^2}-\bar x^2.
\end{aligned}
$$

> 以后看到“合并数据”“修正数据”，优先想 $\sum x_i$ 与 $\sum x_i^2$，不要把所有偏差重新算一遍。

---

## 5　两个数据组的合并

A组有 $n$ 个数据，平均值为 $\bar x_A$，方差为 $s_A^2$；  
B组有 $m$ 个数据，平均值为 $\bar x_B$，方差为 $s_B^2$。

合并后的平均值：

$$
\boxed{
\bar x=
\frac{n\bar x_A+m\bar x_B}{n+m}
}
$$

但整体方差**不能**直接把两个方差加权平均。

先恢复两组的平方平均：

$$
\overline{x^2}_A=s_A^2+\bar x_A^2,
\qquad
\overline{x^2}_B=s_B^2+\bar x_B^2.
$$

再合并：

$$
\overline{x^2}
=
\frac{
n\overline{x^2}_A+
m\overline{x^2}_B
}{n+m},
$$

最后

$$
\boxed{
s^2=\overline{x^2}-\bar x^2
}.
$$

:::note[追加例题｜两组数据的合并]
A组有3个数据，平均值为1，方差为2；  
B组有6个数据，平均值为4，方差为2。

求9个数据整体的平均值与方差。
:::

<details className="solution-details">
<summary>查看答案</summary>

平均值：

$$
\bar x
=
\frac{3\cdot1+6\cdot4}{9}
=
\boxed{3}.
$$

两组平方平均分别为：

$$
\overline{x^2}_A=2+1^2=3,
\qquad
\overline{x^2}_B=2+4^2=18.
$$

所以整体平方平均：

$$
\overline{x^2}
=
\frac{3\cdot3+6\cdot18}{9}
=
13.
$$

因此

$$
s^2=13-3^2=\boxed{4}.
$$

</details>

---

## 6　数据修正：总和＋平方和

如果一个数据从 $a$ 修正为 $b$，则

$$
\sum x_i
\rightarrow
\sum x_i+(b-a),
$$

$$
\sum x_i^2
\rightarrow
\sum x_i^2+(b^2-a^2).
$$

因此处理顺序是：

$$
\boxed{
\text{总和变化}
\rightarrow
\text{平均变化}
\rightarrow
\text{平方和变化}
\rightarrow
\text{方差变化}
}
$$

:::info[High Level 讲义题｜第11講 PART3 前半]
有如下两变量 $x,y$ 的5组数据，平均值分别为

$$
\bar x=25,\qquad \bar y=14.
$$

| 编号 | ① | ② | ③ | ④ | ⑤ |
|---|---:|---:|---:|---:|---:|
| $x$ | 25 | 21 | 23 | 29 | 27 |
| $y$ | 17 | 8 | 11 | 20 | 14 |

1. 编号①的 $x$ 值实际上应为20。修正后，$x$ 的平均值比修正前减少多少？
2. 编号③的 $y$ 值实际上应为13，编号④的 $y$ 值实际上应为18。修正后，$y$ 的方差与修正前相比是增加、减少还是不变？
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

总和减少5，数据有5组，所以平均值减少

$$
\boxed{1}.
$$

### 2.

修正前后 $y$ 的总和不变，因此平均值仍为14。

只比较被修正数据对偏差平方和的贡献：

修正前：

$$
(11-14)^2+(20-14)^2=45.
$$

修正后：

$$
(13-14)^2+(18-14)^2=17.
$$

所以

$$
\boxed{\text{方差减少}}.
$$

</details>

> 同一题的“追加数据后相关系数如何变化”将在第11讲综合处理。

---

## 本讲整理

$$
\boxed{\text{箱线图：先判断信息够不够}}
$$

$$
\boxed{\text{方差题：优先考虑 }\overline{x^2}-\bar x^2}
$$

$$
\boxed{\text{合并・修正：看总和与平方和}}
$$
