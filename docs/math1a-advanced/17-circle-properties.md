---
title: 第17讲 圆的性质
sidebar_position: 17
---

import GeometryFigure from '@site/src/components/GeometryFigure';

# 第17讲 圆的性质

保留 **High Level 数学A 第7講** 的证明题，按前置工具重排为：**发现共圆 → 切线与等角 → 方幂及其逆 → 双圆**。原PART1的多定理大题移到第18讲，不再一上来就要求同时调用全部工具。

:::tip[本讲与第14讲的区别]
第14讲是“已知图形性质后做计量”；本讲要学会**从角、垂直或长度乘积发现图形性质**。重点是为什么能共圆、为什么是切线，不再重复四边形面积的代入计算。
:::

## 1　图上没有圆，也可能应该先找圆

### Point Pickup｜共圆判定必须带上位置条件

同一线段 $AB$ 两侧的两个点若满足对角和为 $180^\circ$，可判共圆；在 $AB$ 同侧时，则比较同弦所对的圆周角。特别地，两个直角常提示同一个直径圆。

证明时写清楚具体四点和具体角，不能只写“由图可知共圆”。

:::info[主例题17-A｜4STEP 数学A 193]
在锐角三角形 $ABC$ 中，$AD\perp BC$；从 $D$ 向 $AB,AC$ 作垂线，垂足分别为 $E,F$。证明 $B,C,F,E$ 四点共圆。

<GeometryFigure id="17-hidden-circle" caption="题目图不预先画出辅助圆；先从两个直角寻找共圆的四点。" />
:::

<details className="solution-details">
<summary>查看证明与辅助圆</summary>

由 $\angle AED=\angle AFD=90^\circ$，$A,E,D,F$ 在以 $AD$ 为直径的圆上。

<GeometryFigure id="17-hidden-circle-solution" caption="解答图：先发现直径AD的圆，再推出目标四边形共圆。" />

因此，同弦 $AE$ 所对的圆周角相等：

$$
\angle AFE=\angle ADE.
$$

又因为 $AD\perp BC$、$DE\perp AB$，所以 $\angle ADE=\angle ABC$。

$A,F,C$ 共线，故 $\angle AFE$ 是四边形 $BCFE$ 在 $F$ 处的外角；它等于对角 $\angle CBE$。由圆内接四边形判定，$\boxed{B,C,F,E\text{ 共圆}}$。

关键是先找到 $A,E,D,F$，而不是对目标四点强行追角。
</details>

## 2　切线：长度关系与角度关系分开使用

### Point Pickup

同一点向同一圆引出的两条切线段相等；接点处半径垂直切线。切线与弦所成的角可用接弦定理转成圆周角；反过来，合适的角相等也能证明一条线是切线。

### 主例题17-B｜High Level A 第7講 PART3(1)

点 $P,Q$ 位于直线 $AB$ 的两侧，且 $\angle BAQ=\angle APB$。证明直线 $AQ$ 与 $\triangle ABP$ 的外接圆相切。

<GeometryFigure id="17-tangent-converse" caption="P与Q在AB两侧；这个位置条件用于确定应选择哪一条射线。" />

<details className="solution-details">
<summary>查看接弦定理逆命题的证明</summary>

在外接圆的 $A$ 点作切线，并在直线 $AB$ 的 $P$ 的对侧取切线上的点 $T$。由接弦定理，$\angle BAT=\angle APB$。

题设又有 $\angle BAQ=\angle APB$，所以 $\angle BAT=\angle BAQ$。两条射线 $AT,AQ$ 在 $AB$ 同侧，因而重合。故 $\boxed{AQ\text{ 是外接圆在A处的切线}}$。

原教材的同题填空确认并入本题，不再占一组独立习题。
</details>

:::note[课堂练习17-1｜High Level A 第7講 PART3 確認問題2]
$AB=AC$，$D$ 是 $BC$ 内部一点。$AD$ 与 $\triangle ABC$ 的外接圆再次交于 $E$。证明直线 $AB$ 与经过 $B,D,E$ 的圆相切。

<GeometryFigure id="17-isosceles-tangent" caption="实线圆为ABC的外接圆，虚线圆经过B、D、E；A-D-E依次共线。" />
:::

<details className="solution-details">
<summary>查看答案</summary>

等腰条件给出 $\angle ABC=\angle ACB$；在大圆中，$\angle ACB=\angle AEB$。又由 $B,D,C$ 共线、$A,D,E$ 依次共线，得

$$
\angle ABD=\angle DEB.
$$

左边是直线 $AB$ 与小圆的弦 $BD$ 所成的角，右边是小圆上对应圆周角。由接弦定理的逆，$\boxed{AB\text{ 与圆BDE在B点相切}}$。
</details>

:::note[课堂练习17-2｜4STEP 数学A 198(1)]
三角形的内切圆与 $BC,CA,AB$ 分别相切于 $D,E,F$。已知 $BC=a,CA=b,AB=c$，用三边表示 $BD,CE,AF$。

<GeometryFigure id="17-contact-lengths" caption="按顶点分组使用切线等长，不要把来自不同顶点的切线段混为一组。" />
:::

<details className="solution-details">
<summary>查看答案</summary>

设 $AF=AE=x$、$BF=BD=y$、$CD=CE=z$。则 $x+y=c,y+z=a,z+x=b$，所以

$$
\boxed{BD=\frac{a+c-b}{2}},\quad
\boxed{CE=\frac{a+b-c}{2}},\quad
\boxed{AF=\frac{b+c-a}{2}}.
$$

这也是 $s-a,s-b,s-c$ 的来源。本题不再重复第13讲的内切圆半径计算。
</details>

## 3　方幂及其逆：由角到乘积，再由乘积找圆

### Point Pickup｜三种图，注意“从同一点量起”

圆内两弦交于 $P$ 时，$PA\cdot PB=PC\cdot PD$。

<GeometryFigure id="17-power-inside" caption="内部点：两条弦都被P分成两段。" />

圆外两割线仍有 $PA\cdot PB=PC\cdot PD$；若 $PT$ 是切线，则还等于 $PT^2$。

<GeometryFigure id="17-power-outside" caption="外部点：乘的是近端全长与远端全长，例如PA乘PB，不是PA乘AB。" />

这里的线段长均为正。若改用圆心距离，内部点的正长度乘积为 $r^2-OP^2$，外部点为 $OP^2-r^2$，不要混用符号。

**逆定理**：当两线上的四个不同点位置明确、交点也明确时，等式 $PA\cdot PB=PC\cdot PD$ 可用于证明四点共圆。若 $T$ 已在圆上、$P$ 在圆外，且 $PT^2=PA\cdot PB$，则可判 $PT$ 为切线。

:::note[课堂练习17-3｜4STEP 数学A 204]
圆 $O$ 的直径 $AB=2$，在 $AB$ 的 $B$ 侧延长线上取 $C$，使 $BC=2AB$。从 $C$ 作切线 $CT$。求 $CT,AT$。

<GeometryFigure id="17-power-practice" caption="点序A-O-B-C；先区分BC与割线全长CA、CB。" />
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

:::info[提高例题17-C｜4STEP 数学A 205]
两圆在 $A$ 点与同一直线相切。该切线上另有一点 $B$。过 $B$ 的一条割线与第一圆交于 $C,D$，另一条割线与第二圆交于 $E,F$。证明 $C,D,E,F$ 共圆。

<GeometryFigure id="17-power-converse" caption="两条割线各属于一个圆，共用切线段BA；不要一开始就假定四交点共圆。" />
:::

<details className="solution-details">
<summary>查看证明</summary>

分别对两个圆使用点 $B$ 的方幂：

$$
BC\cdot BD=BA^2,\qquad BE\cdot BF=BA^2.
$$

于是 $BC\cdot BD=BE\cdot BF$。四个交点分别在过 $B$ 的两条割线上，由方幂定理的逆，$\boxed{C,D,E,F\text{ 共圆}}$。

这题的关键是找到两式共同等于的量 $BA^2$。
</details>

### 提高证明17-D｜High Level A 第7講 PART2

**(1) 内角平分线。** $AD$ 平分 $\angle A$，$D\in BC$。证明

$$
AD^2=AB\cdot AC-BD\cdot CD.
$$

<GeometryFigure id="17-bisector-internal" caption="辅助点E是AD与外接圆的第二交点，点序为A-D-E。" />

<details className="solution-details">
<summary>查看内角平分线证明</summary>

$\angle BAD=\angle EAC$，且圆周角给出 $\angle ABD=\angle AEC$，所以 $\triangle ABD\sim\triangle AEC$。

由对应边，$AB/AE=AD/AC$，即 $AD\cdot AE=AB\cdot AC$。另一方面，点 $D$ 的方幂给出 $AD\cdot DE=BD\cdot DC$。

相减，并用 $AE-DE=AD$，即得目标式。这里用圆解释第14讲的长度关系，不再重复数值计算。
</details>

**(2) 外角平分线。** 外角平分线 $AP$ 与直线 $BC$ 交于 $P$。证明

$$
AP^2=BP\cdot PC-AB\cdot AC.
$$

<GeometryFigure id="17-bisector-external" caption="图示取B-C-P，割线上的点序为P-A-Q；另一侧情形可交换B、C。" />

<details className="solution-details">
<summary>查看外角平分线证明</summary>

延长 $PA$ 与外接圆再次交于 $Q$。由外角平分线及圆周角，$\angle PAB=\angle CAQ$、$\angle ABP=\angle AQC$，故 $\triangle APB\sim\triangle ACQ$。

因此 $AP/AC=AB/AQ$，即 $AP\cdot AQ=AB\cdot AC$。点 $P$ 的方幂给出 $PA\cdot PQ=PB\cdot PC$。相减，利用 $PQ-AQ=PA$，得到

$$
\boxed{AP^2=BP\cdot PC-AB\cdot AC}.
$$

两问的结构相同：先用相似获得一个乘积，再用方幂消去圆上的辅助点。
</details>

## 4　双圆：先定位置，再找直角三角形

### Point Pickup｜共通切线与圆心距

设半径 $R>r>0$、圆心距为 $d$。两圆从相离到包含，依次比较 $d$ 与 $R+r,R-r$：

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

不要只记公式：连接圆心与接点，平移一条半径，直角三角形的一条直角边才分别是**半径差**和**半径和**。

:::info[提高例题17-E｜4STEP 数学A 209]
两圆半径为 $10,6$，圆心距为 $20$。外公切线在 $A,B$ 相切，内公切线在 $C,D$ 相切，两直线交于 $E$，点序如图。求 $AB,CD,BE$。

<GeometryFigure id="17-common-tangents" caption="两条切线均由半径垂直条件计算；本图中A-E-B、C-D-E依次共线。" />
:::

<details className="solution-details">
<summary>查看完整解答</summary>

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

第三问不能再套勾股；要切换到切线等长，并正确处理加减关系。
</details>

:::note[课后练习17-H1｜4STEP 数学A 210(1)(2)]
半径3的圆心为数轴原点，半径2的圆心坐标为 $t$。求：①可引4条共通切线的 $t$ 范围；②两圆恰有1个共有点的 $t$。
:::

<details className="solution-details">
<summary>查看答案</summary>

圆心距为 $|t|$，而不是 $t$。① $|t|>5$，即 $\boxed{t<-5\text{ 或 }t>5}$。②既可能外切，也可能内切：$|t|=5$ 或 $|t|=1$，故 $\boxed{t=\pm1,\pm5}$。
</details>

### 课后提高17-H2｜High Level A 第7講 PART3(2)

凸四边形 $ABCD$ 的对角线 $AC,BD$ 在 $P$ 垂直相交，且 $AB\parallel CD$。证明 $\triangle PAB$、$\triangle PCD$ 的外接圆互相外切。

<GeometryFigure id="17-two-circles" caption="两个圆分别以AB、CD为直径；不能只凭“有共同切线”就断言外切。" />

<details className="solution-details">
<summary>查看证明</summary>

两个三角形都在 $P$ 处为直角，所以外接圆分别以 $AB,CD$ 为直径。设其中点为 $O_1,O_2$。

直线 $PO_1$ 与 $CD$ 交于 $N$。由 $AB\parallel CD$，两组相似三角形给出 $CN:ND=AO_1:O_1B=1:1$，因此 $N=O_2$。故 $O_1,P,O_2$ 共线，且 $P$ 位于两圆心之间。

两圆半径分别是 $O_1P,O_2P$，所以 $O_1O_2=O_1P+PO_2$，等于半径之和。两圆因此在 $P$ 外切。
</details>

## 本讲练习分配与来源

课堂独立练习：17-1、17-2、17-3。课后：17-H1、17-H2。多定理计算题与方幂逆定理的进一步证明统一放在第18讲。

来源：High Level数学A第7講PART2、PART3；4STEP数学A 193、198(1)、204、205、209、210(1)(2)。章节重排与解答为讲义整理，未把新增内容冒称为High Level原题。

本讲主线：**垂直／等角 → 共圆／相似 → 长度乘积 → 方幂及其逆 → 相切。**
