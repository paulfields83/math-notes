---
title: 第15讲 图形与计量综合演习
sidebar_position: 15
---

# 第15讲 图形与计量综合演习

对应 **High Level 数学I 第10講 PART3**，并综合第8～10講内容。

## 本讲课前回顾

空间图形先把问题降到平面：

> 底面 → 底面中心 → 高 → 体积

---

## 1　三边相等的四面体

### 知识点

若顶点 $P$ 到底面三顶点 $A,B,C$ 的距离相等，则从 $P$ 到底面的垂足位于 $\triangle ABC$ 的外心。

底面为正三角形时，外心、重心一致。

### 解题技巧

先在底面求“中心到顶点”的距离，再与侧棱组成直角三角形求高。

:::info[High Level 讲义题｜第10講 PART3]
四面体 $PABC$ 满足

$$
PA=PB=PC=4,
$$

$$
AB=BC=CA=6.
$$

求四面体 $PABC$ 的体积 $V$。

【图片占位符：四面体 PABC 与高】
:::

<details className="solution-details">
<summary>查看答案</summary>

从 $P$ 向底面 $\triangle ABC$ 作垂线，垂足为 $H$。

因为

$$
PA=PB=PC,
$$

所以

$$
HA=HB=HC,
$$

即 $H$ 是正三角形 $ABC$ 的外心。

底面边长为 $6$，所以外接圆半径

$$
AH=\frac{6}{\sqrt3}=2\sqrt3.
$$

在直角三角形 $PAH$ 中：

$$
PH
=
\sqrt{PA^2-AH^2}
=
\sqrt{16-12}
=
\boxed2.
$$

底面积

$$
[ABC]
=
\frac{\sqrt3}{4}\cdot6^2
=
9\sqrt3.
$$

因此体积

$$
V
=
\frac13\cdot9\sqrt3\cdot2
=
\boxed{6\sqrt3}.
$$

</details>


:::note[同类型练习｜第10講 PART3 確認問題]
四面体 $PABC$ 满足

$$
PA=PB=PC=\sqrt7,
$$

$$
AB=BC=CA=2\sqrt3.
$$

以 $\triangle ABC$ 为底面，求：

1. 高 $h$
2. 体积 $V$

【图片占位符：確認問題四面体】
:::

<details className="solution-details">
<summary>查看答案</summary>

同样设高的垂足为 $H$。由于

$$
PA=PB=PC,
$$

$H$ 为正三角形 $ABC$ 的外心。

底边

$$
AB=2\sqrt3,
$$

所以

$$
AH=\frac{2\sqrt3}{\sqrt3}=2.
$$

在直角三角形 $PAH$ 中：

$$
PH
=
\sqrt{(\sqrt7)^2-2^2}
=
\sqrt3.
$$

注意：教材原题的高度记号对应的数值为

$$
\boxed{h=\sqrt3}.
$$

底面积：

$$
[ABC]
=
\frac{\sqrt3}{4}(2\sqrt3)^2
=
3\sqrt3.
$$

体积：

$$
V
=
\frac13\cdot3\sqrt3\cdot\sqrt3
=
\boxed3.
$$

</details>


---

## 2　图形与计量综合检查

做第8～10講综合题时，依次确认：

1. 是否可以先落到直角三角形；
2. 是否需要正弦定理；
3. 是否需要余弦定理；
4. 是否可以用面积建立额外关系；
5. 空间图形是否能先求底面中心。

:::note[综合练习]
本讲综合复习时，使用第8～10講前面已经文本化的講義問題与確認問題。

其中所有必须依赖原图的信息继续保留图片占位符，不另外自编图形条件。
:::

---

## 本讲整理

空间题的核心不是“三维计算”，而是：

> 找到合适的平面截面，把三维问题降回二维。
