---
title: 第17讲 圆的性质
sidebar_position: 17
---

import GeometryFigure from '@site/src/components/GeometryFigure';

# 第17讲 圆的性质

本讲学习**共圆判定、切线、接弦定理、方幂定理和两个圆的位置关系**。

重点是利用角度、垂直关系和线段乘积，证明共圆或相切，并解决长度问题。

## 1　共圆判定

### 知识点：怎样判断四点共圆

判断四点共圆，常用以下方法：

- **圆内接四边形：**一组对角之和为 $180^\circ$。
- **同弦所对的角：**在弦的同侧，两角相等；在异侧，两角互补。
- **两个直角：**若 $\angle APB=\angle AQB=90^\circ$，则 $A,P,B,Q$ 在以 $AB$ 为直径的圆上。

:::info[例题1｜由垂直关系证明共圆]
在锐角三角形 $ABC$ 中，$AD\perp BC$；从 $D$ 向 $AB,AC$ 作垂线，垂足分别为 $E,F$。证明 $B,C,F,E$ 四点共圆。

<GeometryFigure id="17-hidden-circle" caption="题目中的垂线与垂足 E、F。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

由 $\angle AED=\angle AFD=90^\circ$，$A,E,D,F$ 在以 $AD$ 为直径的圆上。

<GeometryFigure id="17-hidden-circle-solution" caption="辅助圆：以 AD 为直径。" />

因此，同弦 $AE$ 所对的圆周角相等：

$$
\angle AFE=\angle ADE.
$$

又因为 $AD\perp BC$、$DE\perp AB$，所以 $\angle ADE=\angle ABC$。

$A,F,C$ 共线，故 $\angle AFE$ 是四边形 $BCFE$ 在 $F$ 处的外角；它等于对角 $\angle CBE$。由圆内接四边形判定，$\boxed{B,C,F,E\text{ 共圆}}$。

关键是先找到 $A,E,D,F$，而不是对目标四点强行追角。
</details>

## 2　切线与接弦定理

### 知识点：切线的性质

**长度关系：**同一点引出的两条切线段相等；切点处半径与切线垂直。

**角度关系：**接弦定理将切线与弦的夹角转化为圆周角。反过来也可以利用角度相等证明相切。

### 例题2｜接弦定理的逆

点 $P,Q$ 位于直线 $AB$ 的两侧，且 $\angle BAQ=\angle APB$。证明直线 $AQ$ 与 $\triangle ABP$ 的外接圆相切。

<GeometryFigure id="17-tangent-converse" caption="P、Q 位于直线 AB 两侧。" />

<details className="solution-details">
<summary>查看解答</summary>

在外接圆的 $A$ 点作切线，并在直线 $AB$ 的 $P$ 的对侧取切线上的点 $T$。由接弦定理，$\angle BAT=\angle APB$。

题设又有 $\angle BAQ=\angle APB$，所以 $\angle BAT=\angle BAQ$。两条射线 $AT,AQ$ 在 $AB$ 同侧，因而重合。故 $\boxed{AQ\text{ 是外接圆在A处的切线}}$。


</details>

:::note[确认题1｜证明相切]
$AB=AC$，$D$ 是 $BC$ 内部一点。$AD$ 与 $\triangle ABC$ 的外接圆再次交于 $E$。证明直线 $AB$ 与经过 $B,D,E$ 的圆相切。

<GeometryFigure id="17-isosceles-tangent" caption="圆 ABC 与圆 BDE。" />
:::

<details className="solution-details">
<summary>查看答案</summary>

等腰条件给出 $\angle ABC=\angle ACB$；在大圆中，$\angle ACB=\angle AEB$。又由 $B,D,C$ 共线、$A,D,E$ 依次共线，得

$$
\angle ABD=\angle DEB.
$$

左边是直线 $AB$ 与小圆的弦 $BD$ 所成的角，右边是小圆上对应圆周角。由接弦定理的逆，$\boxed{AB\text{ 与圆BDE在B点相切}}$。
</details>

:::note[练习1｜切线段的长度]
三角形的内切圆与 $BC,CA,AB$ 分别相切于 $D,E,F$。已知 $BC=a,CA=b,AB=c$，用三边表示 $BD,CE,AF$。

<GeometryFigure id="17-contact-lengths" caption="内切圆与三个切点 D、E、F。" />
:::

<details className="solution-details">
<summary>查看答案</summary>

设 $AF=AE=x$、$BF=BD=y$、$CD=CE=z$。则 $x+y=c,y+z=a,z+x=b$，所以

$$
\boxed{BD=\frac{a+c-b}{2}},\quad
\boxed{CE=\frac{a+b-c}{2}},\quad
\boxed{AF=\frac{b+c-a}{2}}.
$$


</details>

## 3　方幂定理及其逆

### 知识点：切线的性质｜三种图，注意“从同一点量起”

**① 圆内两弦相交**

$$
PA\cdot PB=PC\cdot PD
$$

<GeometryFigure id="17-power-inside" caption="圆内两弦交于 P。" />

**② 圆外两割线相交**

$$
PA\cdot PB=PC\cdot PD
$$

**③ 切线与割线**

$$
PT^2=PA\cdot PB
$$

<GeometryFigure id="17-power-outside" caption="圆外两条割线与切线。" />

圆外的割线要使用**从外部点量起的两段长度**。

**方幂逆定理：**若位置条件满足，上述乘积相等可以反过来用于证明四点共圆或证明相切。

:::note[确认题2｜切线与割线]
圆 $O$ 的直径 $AB=2$，在 $AB$ 的 $B$ 侧延长线上取 $C$，使 $BC=2AB$。从 $C$ 作切线 $CT$。求 $CT,AT$。

<GeometryFigure id="17-power-practice" caption="点序为 A-O-B-C，CT 为切线。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

$CB=4,CA=6$，故由切线型方幂，

$$
CT^2=CB\cdot CA=24,\qquad \boxed{CT=2\sqrt6}.
$$

连接 $BT$。由接弦定理，$\triangle CTA\sim\triangle CBT$，因此 $AT:BT=CA:CT=3:\sqrt6$。又因 $AB$ 是直径，$\angle ATB=90^\circ$。

设 $AT=3k,BT=\sqrt6k$，则 $15k^2=4$，所以

$$
\boxed{AT=\frac{6}{\sqrt{15}}=\frac{2\sqrt{15}}5}.
$$

第一问能直接用方幂，第二问还需要相似与直径所对的直角。
</details>

:::info[例题3｜方幂逆定理]
两圆在 $A$ 点与同一直线相切。该切线上另有一点 $B$。过 $B$ 的一条割线与第一圆交于 $C,D$，另一条割线与第二圆交于 $E,F$。证明 $C,D,E,F$ 共圆。

<GeometryFigure id="17-power-converse" caption="两个圆共用 A 点处的切线。" />
:::

<details className="solution-details">
<summary>查看证明</summary>

分别对两个圆使用点 $B$ 的方幂：

$$
BC\cdot BD=BA^2,\qquad BE\cdot BF=BA^2.
$$

于是 $BC\cdot BD=BE\cdot BF$。四个交点分别在过 $B$ 的两条割线上，由方幂定理的逆，$\boxed{C,D,E,F\text{ 共圆}}$。


</details>

### 提高题｜角平分线与方幂

**(1) 内角平分线。** $AD$ 平分 $\angle A$，$D\in BC$。证明

$$
AD^2=AB\cdot AC-BD\cdot CD.
$$

<GeometryFigure id="17-bisector-internal" caption="角平分线 AD 与辅助点 E。" />

<details className="solution-details">
<summary>查看证明</summary>

$\angle BAD=\angle EAC$，且圆周角给出 $\angle ABD=\angle AEC$，所以 $\triangle ABD\sim\triangle AEC$。

由对应边，$AB/AE=AD/AC$，即 $AD\cdot AE=AB\cdot AC$。另一方面，点 $D$ 的方幂给出 $AD\cdot DE=BD\cdot DC$。

相减，并用 $AE-DE=AD$，即得目标式。这里用圆解释第14讲的长度关系，不再重复数值计算。
</details>

**(2) 外角平分线。** 外角平分线 $AP$ 与直线 $BC$ 交于 $P$。证明

$$
AP^2=BP\cdot PC-AB\cdot AC.
$$

<GeometryFigure id="17-bisector-external" caption="外角平分线 AP 与辅助点 Q。" />

<details className="solution-details">
<summary>查看证明</summary>

延长 $PA$ 与外接圆再次交于 $Q$。由外角平分线及圆周角，$\angle PAB=\angle CAQ$、$\angle ABP=\angle AQC$，故 $\triangle APB\sim\triangle ACQ$。

因此 $AP/AC=AB/AQ$，即 $AP\cdot AQ=AB\cdot AC$。点 $P$ 的方幂给出 $PA\cdot PQ=PB\cdot PC$。相减，利用 $PQ-AQ=PA$，得到

$$
\boxed{AP^2=BP\cdot PC-AB\cdot AC}.
$$


</details>

## 4　两个圆的位置与公切线

### 知识点：切线的性质｜共通切线与圆心距

设两个圆的半径为 $R>r>0$，圆心距为 $d$。由 $d$ 与 $R+r$、$R-r$ 的大小关系，可以判断两个圆的位置：

| 条件 | 位置关系 | 共通切线数 |
|---|---|---:|
| $d>R+r$ | 外离 | 4 |
| $d=R+r$ | 外切 | 3 |
| $R-r<d<R+r$ | 两点相交 | 2 |
| $d=R-r$ | 内切 | 1 |
| $0\le d<R-r$ | 内含、不相切 | 0 |

在相应切线存在时，两接点间的长度满足

$$
L_{\mathrm{外}}^2=d^2-(R-r)^2,\qquad
L_{\mathrm{内}}^2=d^2-(R+r)^2.
$$

这两个公式均来自直角三角形：外公切线用**半径差**，内公切线用**半径和**。

:::info[例题4｜公切线的长度]
两圆半径为 $10,6$，圆心距为 $20$。外公切线在 $A,B$ 相切，内公切线在 $C,D$ 相切，两直线交于 $E$，点序如图。求 $AB,CD,BE$。

<GeometryFigure id="17-common-tangents" caption="两圆的外公切线与内公切线。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

外公切线对应半径差 $10-6=4$：

$$
\boxed{AB=\sqrt{20^2-4^2}=8\sqrt6}.
$$

内公切线对应半径和 $10+6=16$：

$$
\boxed{CD=\sqrt{20^2-16^2}=12}.
$$

设 $BE=ED=x$，由同点切线段相等，$EA=EC$。根据图中点序，$EA=AB-x$，$EC=CD+x$。于是

$$
8\sqrt6-x=12+x
\quad\Longrightarrow\quad
\boxed{BE=4\sqrt6-6}.
$$


</details>

:::note[课后练习1｜圆心距与切线数]
半径3的圆心为数轴原点，半径2的圆心坐标为 $t$。求：①可引4条共通切线的 $t$ 范围；②两圆恰有1个共有点的 $t$。
:::

<details className="solution-details">
<summary>查看答案</summary>

圆心距为 $|t|$，而不是 $t$。① $|t|>5$，即 $\boxed{t<-5\text{ 或 }t>5}$。②既可能外切，也可能内切：$|t|=5$ 或 $|t|=1$，故 $\boxed{t=\pm1,\pm5}$。
</details>

### 课后练习2｜证明两个圆外切

凸四边形 $ABCD$ 的对角线 $AC,BD$ 在 $P$ 垂直相交，且 $AB\parallel CD$。证明 $\triangle PAB$、$\triangle PCD$ 的外接圆互相外切。

<GeometryFigure id="17-two-circles" caption="以 AB、CD 为直径的两个圆。" />

<details className="solution-details">
<summary>查看证明</summary>

两个三角形都在 $P$ 处为直角，所以外接圆分别以 $AB,CD$ 为直径。设其中点为 $O_1,O_2$。

直线 $PO_1$ 与 $CD$ 交于 $N$。由 $AB\parallel CD$，两组相似三角形给出 $CN:ND=AO_1:O_1B=1:1$，因此 $N=O_2$。故 $O_1,P,O_2$ 共线，且 $P$ 位于两圆心之间。

两圆半径分别是 $O_1P,O_2P$，所以 $O_1O_2=O_1P+PO_2$，等于半径之和。两圆因此在 $P$ 外切。
</details>

## 本讲整理

**课堂：**确认题1、确认题2、练习1。**课后：**课后练习1、2；提高题根据进度选讲。

解题时先看已知条件属于**角度关系**还是**长度关系**，再选择对应定理。

<details>
<summary>题目来源</summary>

High Level 数学A 第7講 PART2、PART3；4STEP 数学A 193、198、204、205、209、210。

</details>
