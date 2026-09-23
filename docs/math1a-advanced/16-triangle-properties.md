---
title: 第16讲 三角形的性质与比例
sidebar_position: 16
---

# 第16讲 三角形的性质与比例

对应 **High Level 数学A 第6講 PART1～3**。

## 图形的性质｜领域回顾

- 内分、外分
- 角平分线
- 内心、外心、重心、垂心
- Ceva 定理
- Menelaus 定理
- 圆周角
- 方幂
- 接弦定理

完整概念见 **数学1A基础 → 第5章 图形的性质**。

## 本讲课前回顾

长度比、面积比、分点比要区分。

---

## 1　内心与角平分线

### 知识点

内心是三条内角平分线的交点。

角平分线定理：

$$
BD:DC=AB:AC.
$$

### 解题技巧

比例题中，面积比往往可以直接转成对应的底边比或高之比。

:::info[High Level 讲义题｜数学A 第6講 PART1]
在

$$
AB=4,qquad BC=10,qquad CA=7
$$

的 $\triangle ABC$ 中，内心为 $I$。

直线 $BI$ 与边 $AC$ 交于 $D$。

求下列面积比：

1. $\triangle BAI:\triangle BCI$
2. $\triangle AIC:\triangle ABC$
3. $\triangle CID:\triangle ABC$

【图片占位符：内心 I 与交点 D】
:::

:::note[同类型练习｜第6講 PART1 確認問題]
在

$$
AB=4,qquad BC=8,qquad CA=9
$$

的 $\triangle ABC$ 中，内心为 $I$，直线 $BI$ 与边 $AC$ 交于 $D$。

用最简整数比求：

1. $\triangle BAI:\triangle BCI$
2. $\triangle AIC:\triangle ABC$
3. $\triangle AID:\triangle ABC$

【图片占位符：確認問題内心图】
:::

---

## 2　外心与垂心

### 知识点

- 外心：三边垂直平分线的交点；
- 垂心：三条高所在直线的交点。

### 解题技巧

证明“三条高共点”时，可以构造一个更大的三角形，把原三角形的三条高转化成新三角形的三条垂直平分线。

:::info[High Level 讲义题｜第6講 PART2]
证明：

> 三角形三个顶点向对边所作的三条垂线交于一点。

按教材给出的方针：

1. 过 $A,B,C$ 分别作与各自对边平行的直线，三条直线围成 $\triangle PQR$；
2. 从 $A,B,C$ 向原三角形对边作垂线 $AD,BE,CF$；
3. 证明 $AD,BE,CF$ 分别是 $\triangle PQR$ 三边的垂直平分线；
4. 因而三线在 $\triangle PQR$ 的外心处相交。

【图片占位符：教材构造的三角形 PQR 与 AD、BE、CF】
:::

:::note[同类型练习｜第6講 PART2 確認問題]
同样证明三角形三条高共点。

教材要求补全证明中的空格：

- 四边形 $ABCQ$、$ACBR$ 分别是什么四边形；
- 由此得到哪些边相等；
- 点 $A$ 是边 $QR$ 的什么点；
- $AD,BE,CF$ 分别是哪条边的垂直平分线；
- 三线最终交于 $\triangle PQR$ 的哪个中心。

【图片占位符：確認問題证明图】
:::

---

## 3　Ceva 与 Menelaus

### 知识点

- 三线共点：优先 Ceva；
- 三点共线：优先 Menelaus。

### 解题技巧

写比例时保持同一方向，避免比值倒置。

:::info[High Level 讲义题｜第6講 PART3]
**1.** 在 $\triangle ABC$ 中，直线 $l$ 与边 $BC,CA,AB$ 的延长线分别交于 $P,Q,R$。

证明

$$
\frac{PC}{BP}
\cdot
\frac{QA}{CQ}
\cdot
\frac{RB}{AR}
=1.
$$

其中直线 $l$ 不通过 $\triangle ABC$ 的顶点。

【图片占位符：直线 l 与 P、Q、R】

**2.** $\triangle ABC$ 外有一点 $O$。

直线 $AO,BO,CO$ 分别与边 $BC,CA,AB$ 或其延长线交于 $P,Q,R$。

已知

$$
BA:AR=3:2,
$$

$$
AQ:QC=6:5.
$$

求

$$
BQ:QO.
$$

【图片占位符：点 O 与 P、Q、R】
:::

:::note[同类型练习｜第6講 PART3 確認問題]
在 $\triangle ABC$ 中，直线 $l$ 与边 $BC,CA,AB$ 的延长线分别交于 $P,Q,R$。

证明

$$
\frac{PC}{BP}
\cdot
\frac{QA}{CQ}
\cdot
\frac{RB}{AR}
=1.
$$

教材的提示是：过点 $C$ 作直线平行于 $l$，与直线 $AB$ 交于 $D$，再利用平行线比例逐步补全证明。

【图片占位符：確認問題的辅助线 CD】
:::

---

## 本讲整理

三角形性质题常见路线：

> 角平分线 → 比例  
> 垂线 → 外心/垂心  
> 共点 → Ceva  
> 共线 → Menelaus
