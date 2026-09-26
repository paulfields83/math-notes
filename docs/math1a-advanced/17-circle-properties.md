---
title: 第17讲 圆的性质
sidebar_position: 17
---

# 第17讲 圆的性质

对应 **High Level 数学A 第7講 PART1～3**。

## 本讲课前回顾

先确认：

- 圆周角；
- 内接四边形对角互补；
- 切线与半径垂直；
- 相似三角形；
- 方幂定理。

---

## 1　方幂定理

### 知识点

从同一点 $P$ 引出两条割线时：

$$
PA\cdot PB=PC\cdot PD.
$$

### 解题技巧

看到“同一点出发的两条直线与圆相交”，优先检查方幂。

必要时也可以先找相似三角形。

:::info[High Level 讲义题｜第7講 PART1]
圆内接四边形 $ABCD$ 满足

$$
AD=5,qquad BC=2.
$$

直线 $AD$ 与直线 $BC$ 交于 $E$，直线 $AB$ 与直线 $CD$ 交于 $F$。

又知

$$
AE=3,qquad CF=2.
$$

求：

1. $BE$
2. $CD$
3. $angle E$ 的角平分线与直线 $CD$ 交于 $G$；$angle F$ 的角平分线与直线 $EG$ 交于 $H$，与直线 $AD$ 交于 $I$。求
   $$
   FH:HI.
   $$

【图片占位符：圆内接四边形 ABCD、点 E、F、G、H、I】
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1. 求 $BE$

由点 $E$ 的方幂：

$$
EA\cdot ED=EB\cdot EC.
$$

已知

$$
EA=3,\qquad ED=3+5=8,
$$

设 $BE=x$，则 $EC=x+2$。

所以

$$
3\cdot8=x(x+2),
$$

即

$$
x^2+2x-24=0.
$$

取正根：

$$
\boxed{BE=4}.
$$

### 2. 求 $CD$

在 $\triangle ECD$ 中，对横截线 $A-F-B$ 使用梅涅劳斯定理：

$$
\frac{FC}{DF}
\cdot
\frac{BE}{CB}
\cdot
\frac{AD}{EA}
=1.
$$

代入：

$$
\frac2{DF}\cdot\frac42\cdot\frac53=1.
$$

得到

$$
DF=\frac{20}{3}.
$$

所以

$$
CD=DF-CF
=\frac{20}{3}-2
=\boxed{\frac{14}{3}}.
$$

### 3. 求 $FH:HI$

在 $\triangle ECD$ 中，$EG$ 为 $\angle E$ 的角平分线：

$$
CG:GD=EC:ED=6:8=3:4.
$$

所以

$$
CG=\frac37\cdot CD=2.
$$

由圆内接四边形的角关系可得

$$
\triangle FDA\sim\triangle FBC.
$$

因此

$$
FA:FC=AD:CB=5:2.
$$

由 $FC=2$ 得

$$
FA=5.
$$

在 $\triangle FDA$ 中，$FI$ 为角平分线：

$$
AI:ID=FA:FD
=5:\frac{20}{3}
=3:4.
$$

故

$$
AI=\frac37\cdot AD
=\frac{15}{7}.
$$

再在相应三角形中应用梅涅劳斯定理，得到

$$
\boxed{FH:HI=7:3}.
$$

</details>


:::note[同类型练习｜第7講 PART1 確認問題]
圆内接四边形 $ABCD$ 满足

$$
AD=4,qquad CD=5.
$$

直线 $AD$ 与直线 $BC$ 交于 $E$，直线 $AB$ 与直线 $CD$ 交于 $F$。

又知

$$
AE=2,qquad BE=3.
$$

求：

1. $BC$
2. $CF$
3. $angle E$ 的角平分线与直线 $CD$ 交于 $G$；$angle F$ 的角平分线与直线 $EG$ 交于 $H$，与直线 $AD$ 交于 $I$。用最简整数比求
   $$
   FI:HI.
   $$

【图片占位符：確認問題圆图】
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

由点 $E$ 的方幂：

$$
EA\cdot ED=EB\cdot EC.
$$

$$
2\cdot6=3(3+BC).
$$

所以

$$
\boxed{BC=1}.
$$

### 2.

在 $\triangle ECD$ 中应用梅涅劳斯定理：

$$
\frac{CF}{DF}
\cdot
\frac{BE}{BC}
\cdot
\frac{AD}{AE}
=1.
$$

代入 $BE=3,BC=1,AD=4,AE=2$，得到

$$
DF=6.
$$

因此

$$
\boxed{CF=DF-CD=1}.
$$

### 3.

$EG$ 为角平分线，所以

$$
CG:GD=EC:ED=4:6=2:3.
$$

又由相似三角形

$$
\triangle FDA\sim\triangle FBC
$$

可得

$$
FA:FC=AD:CB=4:1.
$$

由 $FC=1$ 得 $FA=4$。

在 $\triangle FDA$ 中，$FI$ 为角平分线：

$$
AI:ID=FA:FD=4:6=2:3.
$$

故

$$
AI=\frac25\cdot4=\frac85.
$$

继续用梅涅劳斯定理可得

$$
FH:HI=5:3.
$$

于是

$$
FI:HI=(FH+HI):HI
=8:3.
$$

所以

$$
\boxed{FI:HI=8:3}.
$$

</details>


---

## 2　方幂与内接四边形

### 知识点

图形证明题中，常把：

- 圆周角；
- 相似；
- 方幂；

连起来使用。

### 解题技巧

目标式出现“长度乘积”时，优先寻找相似或方幂。

:::info[High Level 讲义题｜第7講 PART2]
**1.** 在 $\triangle ABC$ 中，$angle A$ 的角平分线与边 $BC$ 交于 $D$。

证明

$$
AD^2=AB\cdot AC-BD\cdot CD.
$$

必要时可令直线 $AD$ 与 $\triangle ABC$ 的外接圆再次交于 $E$，并利用相似三角形。

【图片占位符：内角平分线与外接圆】

**2.** 在 $\triangle ABC$ 中，$angle A$ 的外角平分线与边 $BC$ 的延长线交于 $P$。

证明

$$
AP^2=BP\cdot PC-AB\cdot AC.
$$

【图片占位符：外角平分线】
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1. 内角平分线

令 $AD$ 与 $\triangle ABC$ 的外接圆再次交于 $E$。

由圆周角和角平分线关系可证

$$
\triangle ABD\sim\triangle AEC.
$$

因此

$$
AD\cdot AE=AB\cdot AC.
$$

另一方面，由点 $D$ 的方幂：

$$
DA\cdot DE=DB\cdot DC.
$$

两式相减：

$$
AD(AE-DE)
=
AB\cdot AC-BD\cdot CD.
$$

由于

$$
AE-DE=AD,
$$

得到

$$
\boxed{
AD^2=AB\cdot AC-BD\cdot CD
}.
$$

### 2. 外角平分线

令直线 $PA$ 与外接圆再次交于 $Q$。

由相似三角形可得

$$
AP\cdot AQ=AB\cdot AC.
$$

由点 $P$ 的方幂：

$$
PA\cdot PQ=PB\cdot PC.
$$

两式相减，并利用

$$
PQ-AQ=PA,
$$

得到

$$
\boxed{
AP^2=BP\cdot PC-AB\cdot AC
}.
$$

</details>


:::note[同类型练习｜第7講 PART2 確認問題]
在 $\triangle ABC$ 中，$angle A$ 的角平分线与边 $BC$ 交于 $D$。

证明

$$
AD^2=AB\cdot AC-BD\cdot CD.
$$

教材提示：

1. 令 $AD$ 与外接圆再次交于 $E$；
2. 利用圆周角证明两个三角形相似；
3. 得到一个关于 $AD,AE,AB,AC$ 的乘积关系；
4. 再利用方幂
   $$
   DA\cdot DE=DB\cdot DC
   $$
   消去 $E$。

【图片占位符：確認問題证明图】
:::

<details className="solution-details">
<summary>查看答案</summary>

令 $AD$ 与外接圆再次交于 $E$。

由圆周角关系与 $\angle BAD=\angle DAC$，

$$
\triangle ABD\sim\triangle AEC.
$$

所以

$$
AD\cdot AE=AB\cdot AC.
$$

同时由点 $D$ 的方幂：

$$
DA\cdot DE=DB\cdot DC.
$$

相减得

$$
AD(AE-DE)
=
AB\cdot AC-BD\cdot CD.
$$

又 $AE-DE=AD$，所以

$$
\boxed{
AD^2=AB\cdot AC-BD\cdot CD
}.
$$

</details>


---

## 3　接弦定理及其逆

### 知识点

若直线 $AT$ 在 $A$ 点与圆相切，则切线与弦所成角等于对应圆周角。

逆命题也成立：若对应角相等，可以判定直线为切线。

### 解题技巧

要证明“某直线是切线”，优先考虑接弦定理的逆。

:::info[High Level 讲义题｜第7講 PART3]
**1.** 对直线 $AB$ 而言，点 $P,Q$ 位于其两侧。

若

$$
\angle BAQ=\angle APB,
$$

证明直线 $AQ$ 与 $\triangle ABP$ 的外接圆相切。

【图片占位符：A、B、P、Q 与外接圆】

**2.** 四边形 $ABCD$ 的两条对角线 $AC,BD$ 在点 $P$ 垂直相交，并且

$$
AB\parallel DC.
$$

证明 $\triangle PAB$ 与 $\triangle PCD$ 的外接圆互相外切。

【图片占位符：四边形 ABCD 与两个外接圆】
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

在 $\triangle ABP$ 的外接圆上，过 $A$ 作切线 $AC$。

由接弦定理：

$$
\angle BAC=\angle APB.
$$

题设给出

$$
\angle BAQ=\angle APB.
$$

因此

$$
\angle BAC=\angle BAQ.
$$

又 $P,Q$ 位于直线 $AB$ 两侧，所以 $AC$ 与 $AQ$ 必重合。

故

$$
\boxed{AQ\text{ 与 }\triangle ABP\text{ 的外接圆相切}}.
$$

### 2.

在 $\triangle PAB$ 的外接圆于 $P$ 点作切线 $QR$。

由接弦定理：

$$
\angle BPQ=\angle PAB.
$$

又因对顶角关系以及

$$
AB\parallel DC,
$$

有

$$
\angle RPD=\angle PCD.
$$

于是

$$
\angle RPD=\angle PCD.
$$

由接弦定理的逆定理，$QR$ 也与 $\triangle PCD$ 的外接圆在 $P$ 点相切。

两个圆在同一点 $P$ 有共同切线，所以

$$
\boxed{\text{两外接圆互相外切}}.
$$

</details>


:::note[同类型练习｜第7講 PART3 確認問題]
**1.** 对直线 $AB$ 而言，点 $P,Q$ 位于其两侧，且

$$
\angle BAQ=\angle APB.
$$

证明直线 $AQ$ 与 $\triangle ABP$ 的外接圆相切。

教材提示：先在外接圆的点 $A$ 处作切线，再利用接弦定理与已知角相等关系证明该切线与 $AQ$ 重合。

【图片占位符：確認問題切线证明图】

**2.** 在 $\triangle ABC$ 的边 $BC$ 上取点 $D$，直线 $AD$ 与 $\triangle ABC$ 的外接圆再次交于 $E$。

若

$$
AB=AC,
$$

证明直线 $AB$ 与经过 $B,D,E$ 三点的圆相切。

【图片占位符：等腰三角形与两个圆】
:::

<details className="solution-details">
<summary>查看答案</summary>

### 1.

在 $\triangle ABP$ 的外接圆于 $A$ 点作切线。

由接弦定理，该切线与 $AB$ 所成的角等于

$$
\angle APB.
$$

而题设给出

$$
\angle BAQ=\angle APB.
$$

因此该切线与 $AQ$ 重合，从而

$$
\boxed{AQ\text{ 为外接圆的切线}}.
$$

### 2.

由于

$$
AB=AC,
$$

所以

$$
\angle ABC=\angle ACB.
$$

又 $A,B,C,E$ 共圆，

$$
\angle AEB=\angle ACB.
$$

而 $A,D,E$ 共线、$B,C,D$ 共线，因此

$$
\angle DEB=\angle ABD.
$$

这正是以 $BD$ 为弦的接弦定理逆命题所需的角关系。

所以

$$
\boxed{AB\text{ 与经过 }B,D,E\text{ 的圆在 }B\text{ 点相切}}.
$$

</details>


---

## 本讲整理

圆题的常见顺序：

> 追角 → 找相似 → 看长度乘积 → 方幂  
> 证明切线 → 接弦定理的逆
