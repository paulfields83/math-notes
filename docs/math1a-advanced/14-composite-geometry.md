---
title: 第14讲 复合图形的计量
sidebar_position: 14
---

# 第14讲 复合图形的计量

对应 **High Level 数学I 第10講 PART1・PART2**。

## 本讲课前回顾

复杂图形先分成若干个三角形，找：

- 公共边；
- 角平分线；
- 内接四边形；
- 互补角。

---

## 1　角平分线长度

### 知识点

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
AB=5,qquad AC=4,qquad \angle A=60^\circ.
$$

$\angle A$ 的角平分线与边 $BC$ 交于 $D$。求

$$
AD.
$$

**2.** 在 $\triangle ABC$ 中，

$$
AB=6,qquad BC=5,qquad CA=4.
$$

$\angle C$ 的角平分线与边 $AB$ 交于 $D$。求

$$
CD.
$$

【图片占位符：角平分线题示意图】
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
AB=3,qquad AC=2,qquad \angle A=60^\circ.
$$

$\angle A$ 的角平分线交 $BC$ 于 $D$，求 $AD$。

**2.**

$$
AB=7,qquad BC=8,qquad CA=6.
$$

$\angle C$ 的角平分线交 $AB$ 于 $D$，求 $CD$。

【图片占位符：確認問題角平分线图】
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

## 2　圆内接四边形的面积

### 知识点

圆内接四边形的对角互补：

$$
A+C=180^\circ.
$$

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
AB=BC=3,qquad
CD=5,qquad
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
AB=2,qquad
BC=3,qquad
CD=6,qquad
DA=5.
$$

求：

$$
AC
$$

以及四边形 $ABCD$ 的面积 $S$。

【图片占位符：圆内接四边形】
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

> 先分割 → 找共享条件 → 各三角形分别计算 → 再合并
