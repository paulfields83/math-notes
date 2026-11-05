---
title: 第18讲 图形的性质综合演习
sidebar_position: 18
---

import GeometryFigure from '@site/src/components/GeometryFigure';

# 第18讲 图形的性质综合演习

本讲综合运用第16、17讲的**比例、角平分线、共圆、切线和方幂定理**。

先独立尝试题目，再展开解答。课堂以综合1～4为主，后面有提高练习和课后题。

## 1　综合1：外部交点与比例

:::note[综合1｜外部点与线段比]
在 $\triangle ABC$ 外取点 $O$。直线 $AO,BO,CO$ 分别与三边所在直线交于 $P,Q,R$（位置如图）。

已知

$$
BQ:QO=7:2,\qquad CO:OR=3:4.
$$

求 $AQ:QC$，答案写成最简整数比。

<GeometryFigure id="18-exterior" caption="外部点 O 与三条截线。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

选 $\triangle OQC$，横截线为 $B-A-R$。Menelaus给出

$$
\frac{BQ}{OB}\frac{AC}{QA}\frac{RO}{CR}=1.
$$

根据点序，$BQ:OB=7:9$，$RO:CR=4:7$。因此

$$
\frac79\cdot\frac{AC}{QA}\cdot\frac47=1
\quad\Longrightarrow\quad QA:AC=4:9.
$$

$AC=AQ+QC$，故 $\boxed{AQ:QC=4:5}$。


</details>

## 2　综合2：角平分线与共点

:::note[综合2｜证明三线共点]
在 $\triangle ABC$ 内取点 $P$。

$\angle BPC$ 的角平分线交 $BC$ 于 $D$；$\angle CPA$ 的角平分线交 $CA$ 于 $E$；$\angle APB$ 的角平分线交 $AB$ 于 $F$。

证明 $AD,BE,CF$ 三线共点。

<GeometryFigure id="18-concurrence" caption="P 为三角形内部点，D、E、F 为分点。" />
:::

<details className="solution-details">
<summary>查看证明</summary>

分别在 $\triangle PBC,\triangle PCA,\triangle PAB$ 内使用角平分线定理：

$$
\frac{BD}{DC}=\frac{PB}{PC},\qquad
\frac{CE}{EA}=\frac{PC}{PA},\qquad
\frac{AF}{FB}=\frac{PA}{PB}.
$$

三式相乘，右侧全部约去：

$$
\frac{BD}{DC}\frac{CE}{EA}\frac{AF}{FB}=1.
$$

$D,E,F$ 均为内分点，$AD,BE$ 在三角形内部相交，故由Ceva逆定理，$\boxed{AD,BE,CF\text{ 共点}}$。

要点：产生比例的三个小三角形，与最后使用Ceva的大三角形不同。
</details>

## 3　综合3：圆与角平分线

:::info[综合3｜圆、方幂与角平分线]
圆内接四边形 $ABCD$ 满足

$$
AD=5,\qquad BC=2.
$$

直线 $AD$ 与 $BC$ 交于 $E$，直线 $AB$ 与 $CD$ 交于 $F$，已知

$$
AE=3,\qquad CF=2.
$$

点的位置如图。求：

1. $BE$；
2. $CD$；
3. $\angle CED$ 的角平分线交 $CD$ 于 $G$；$\angle AFD$ 的角平分线交 $AD$ 于 $I$，与 $EG$ 交于 $H$。求 $FH:HI$。

<GeometryFigure id="18-integrated" caption="圆内接四边形与角平分线交点 G、H、I。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

**(1) 点E的方幂。** $ED=3+5=8$。设 $BE=x$，则 $EC=x+2$：

$$
3\cdot8=x(x+2)
\quad\Longrightarrow\quad (x-4)(x+6)=0.
$$

取正根，得 $\boxed{BE=4}$，所以 $EC=6$。

**(2) 选三角形ECD与横截线B-F-A。** Menelaus给出

$$
\frac{EB}{BC}\frac{CF}{FD}\frac{DA}{AE}=1,
\qquad \frac42\cdot\frac2{FD}\cdot\frac53=1.
$$

因此 $FD=20/3$，$\boxed{CD=FD-FC=14/3}$。

**(3) 先定位G、I，再求内部的FH:HI。** 在 $\triangle ECD$ 中，

$$
CG:GD=EC:ED=3:4,
$$

故 $CG=2,GD=8/3,FG=FC+CG=4$。

由圆内接四边形的外角关系，$\triangle FDA\sim\triangle FBC$，于是 $FA:FC=AD:BC=5:2$，得到 $FA=5$。

在 $\triangle FDA$ 中使用角平分线定理：

$$
AI:ID=FA:FD=5:\frac{20}{3}=3:4.
$$

所以 $AI=15/7$，$EI=EA+AI=36/7$。

最后选 $\triangle DFI$，横截线为 $G-H-E$：

$$
\frac{DG}{GF}\frac{FH}{HI}\frac{IE}{ED}=1.
$$

代入全部已求出的量：

$$
\frac{8/3}{4}\cdot\frac{FH}{HI}\cdot\frac{36/7}{8}=1
\quad\Longrightarrow\quad \boxed{FH:HI=7:3}.
$$


</details>

## 4　综合4：面积乘积

:::note[综合4｜面积乘积]
半径为4的圆 $O$ 内有一点 $P$，满足 $OP=2$。过 $P$ 作两条互相垂直的直线，分别与圆交于 $A,B$ 和 $C,D$。

设

$$
S_1=[PAC],\qquad S_2=[PBD].
$$

求 $S_1S_2$。

<GeometryFigure id="18-invariant" caption="过 P 的两条垂直弦与阴影三角形。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

过 $O,P$ 的直径把 $P$ 两侧的长度分为 $4-2=2$ 与 $4+2=6$。由内部点的方幂，

$$
PA\cdot PB=PC\cdot PD=2\cdot6=12.
$$

两条弦垂直，故

$$
S_1S_2=
\left(\frac12 PA\cdot PC\right)
\left(\frac12 PB\cdot PD\right)
=\frac14(PA\cdot PB)(PC\cdot PD)
=\boxed{36}.
$$

所以面积乘积为 $\boxed{36}$。
</details>

## 5　提高练习1：方幂与Menelaus

:::note[提高练习1｜求线段比与长度]
在 $\triangle ABC$ 中，

$$
AB=AC=5,\qquad BC=\sqrt5.
$$

$D$ 在 $AC$ 上，且 $AD=3$。边 $BC$ 的 $B$ 侧延长线与 $\triangle ABD$ 的外接圆再次交于 $E$；直线 $AB$ 与 $DE$ 交于 $P$。

求：

1. $BE$；
2. $DP:EP$；
3. $EP$。

<GeometryFigure id="18-power-menelaus" caption="三角形 ABD 的外接圆及交点 E、P。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

**(1)** $CD=2$。对点 $C$ 使用方幂：

$$
CB\cdot CE=CD\cdot CA=10.
$$

$CB=\sqrt5$，故 $CE=2\sqrt5$，$\boxed{BE=\sqrt5}$。

**(2)** 在 $\triangle DEC$ 中，横截线为 $P-B-A$。Menelaus给出

$$
\frac{DP}{PE}\frac{EB}{BC}\frac{CA}{AD}=1,
\qquad \frac{DP}{PE}\cdot1\cdot\frac53=1.
$$

所以 $\boxed{DP/EP=3/5}$。

**(3)** 再选 $\triangle ABC$，横截线为 $P-E-D$：

$$
\frac{AP}{PB}\frac{BE}{EC}\frac{CD}{DA}=1
\quad\Longrightarrow\quad
\frac{AP}{PB}\cdot\frac12\cdot\frac23=1.
$$

所以 $AP:PB=3:1$，$AP=15/4,PB=5/4$。设 $PD=3t,PE=5t$；点 $P$ 在圆内，由方幂，

$$
PD\cdot PE=PA\cdot PB
\quad\Longrightarrow\quad
15t^2=\frac{75}{16}.
$$

$t>0$，所以 $t=\sqrt5/4$，最终 $\boxed{EP=5\sqrt5/4}$。
</details>

## 6　提高练习2：切线与共圆

:::note[提高练习2｜证明共圆]
从圆 $O$ 外一点 $P$ 引两条切线，切点为 $A,B$。$C=AB\cap PO$。过 $C$ 作一条不与 $PO$ 重合的直线，交圆于 $D,E$。证明 $P,O,D,E$ 四点共圆。

<GeometryFigure id="18-chord-of-contact" caption="两条切线 PA、PB 与割线 DE。" />
:::

<details className="solution-details">
<summary>查看证明</summary>

$PA=PB$ 且 $OA=OB$，故 $OP$ 是 $AB$ 的垂直平分线，$OC\perp AC$。又 $OA\perp PA$，因此 $\triangle OCA\sim\triangle OAP$，从而

$$
\frac{OC}{OA}=\frac{OA}{OP}
\quad\Longrightarrow\quad OC\cdot OP=OA^2.
$$

$C$ 位于 $O,P$ 之间，且 $CA=CB$，所以

$$
CO\cdot CP=OC(OP-OC)=OA^2-OC^2=AC^2=CA\cdot CB.
$$

再在原圆中对点 $C$ 使用方幂，$CA\cdot CB=CD\cdot CE$。于是

$$
CO\cdot CP=CD\cdot CE.
$$

$O,C,P$ 共线，$D,C,E$ 共线，应用方幂逆定理，得到 $\boxed{P,O,D,E\text{ 共圆}}$。
</details>

## 7　课后练习：圆的综合

:::note[课后练习｜圆的综合]
图形和点的定义与综合3相同，但改为

$$
AD=4,\quad CD=5,\quad AE=2,\quad BE=3.
$$

求 $BC$、$CF$、$FI:HI$。

<GeometryFigure id="18-integrated-practice" caption="圆内接四边形与角平分线交点。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

$ED=6$。点 $E$ 的方幂给出 $2\cdot6=3\cdot EC$，所以 $EC=4$，$\boxed{BC=1}$。

在 $\triangle ECD$ 中对 $B-F-A$ 用Menelaus：

$$
\frac31\frac{CF}{CF+5}\frac42=1
\quad\Longrightarrow\quad \boxed{CF=1},\quad FD=6.
$$

$CG:GD=EC:ED=2:3$，故 $CG=2,GD=3,FG=3$。

由 $\triangle FDA\sim\triangle FBC$，$FA:FC=AD:BC=4:1$，所以 $FA=4$。再由 $\triangle FDA$ 的角平分线，$AI:ID=4:6=2:3$，$AI=8/5,EI=18/5$。

选 $\triangle DFI$，对横截线 $G-H-E$ 用Menelaus：

$$
\frac33\frac{FH}{HI}\frac{18/5}{6}=1
\quad\Longrightarrow\quad FH:HI=5:3.
$$

最后将 $FH:HI$ 换成题目所求的 $FI:HI$：

$$
\boxed{FI:HI=(FH+HI):HI=8:3}.
$$
</details>

## 备用：空间图形的垂直关系

**线面垂直判定：**一条直线若垂直于平面内两条相交直线，则垂直于该平面。

:::note[空间备用题｜正方体的垂直关系]
棱长为1的正方体 $ABCD-EFGH$ 中，证明 $AG\perp$ 平面 $BDE$。设交点为 $P$，再求 $AP$。

<GeometryFigure id="18-cube-perpendicular" caption="正方体 ABCD-EFGH 与平面 BDE。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

正方形对角线给出 $BD\perp AC$，又 $CG\perp$ 平面 $ABCD$，所以 $BD\perp CG$。因此 $BD\perp$ 平面 $ACG$，进而 $BD\perp AG$。

同理，正方形 $ABFE$ 中 $BE\perp AF$，且 $FG\perp$ 平面 $ABFE$。所以 $BE\perp$ 平面 $AFG$，进而 $BE\perp AG$。

$BD,BE$ 是平面 $BDE$ 内两条相交直线，因此 $\boxed{AG\perp\text{平面 }BDE}$。

求长度时才调用第15讲的换底面思想：四面体 $ABDE$ 的体积是 $1/6$；$BDE$ 是边长 $\sqrt2$ 的正三角形，面积为 $\sqrt3/2$。故

$$
\frac16=\frac13\cdot\frac{\sqrt3}{2}\cdot AP
\quad\Longrightarrow\quad \boxed{AP=\frac{\sqrt3}{3}}.
$$
</details>

## 本讲整理

解题时先决定使用哪个三角形或圆，再列出对应的角度、比例或长度关系。

**课堂：**综合1～4。**独立练习：**提高练习1、2。**课后：**第7节；空间题选做。

<details>
<summary>题目来源</summary>

High Level 数学A 第6講 PART3、第7講 PART1；4STEP 数学A 172、206；啓林館深進数学A p.97 章末6～8。

</details>
