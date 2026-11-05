---
title: 第18讲 图形的性质综合演习
sidebar_position: 18
---

import GeometryFigure from '@site/src/components/GeometryFigure';

# 第18讲 图形的性质综合演习

综合第16、17讲。**题目区不先给方法提示**：先独立标出已知与目标，再展开解答。原第17讲开头的大综合移到这里；与第17讲完全重复的等腰三角形切线证明不再重复列出。

本讲分为四道课堂综合、两道独立提高和一道课后综合。最后的空间性质补充为备用，不挤占平面综合的主线。

## 1　综合1｜外部交点与比例

:::note[High Level A 第6講 PART3 確認問題2]
$\triangle ABC$ 外有点 $O$。直线 $AO,BO,CO$ 与三边所在直线分别交于 $P,Q,R$，点序如图：$B-A-R$、$A-Q-C$、$B-Q-O$、$C-O-R$。

已知 $BQ:QO=7:2$、$CO:OR=3:4$，用最简整数比求 $AQ:QC$。

<GeometryFigure id="18-exterior" caption="本题重新作图：Q在AC内部，O在Q的外侧，不能沿用错误的外分示意图。" />
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

本题先把已知比换成定理真正需要的比，再代入；不能把 $BQ:QO$ 直接写到 $BQ:BO$ 的位置。
</details>

## 2　综合2｜从局部角平分线到全局共点

:::note[4STEP 数学A 172]
$P$ 是 $\triangle ABC$ 内部任意一点。$\angle BPC,\angle CPA,\angle APB$ 的内角平分线分别与 $BC,CA,AB$ 交于 $D,E,F$。证明 $AD,BE,CF$ 三线共点。

<GeometryFigure id="18-concurrence" caption="P处的三条角平分线是PD、PE、PF；待证共点的却是AD、BE、CF，不要混淆。" />
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

## 3　综合3｜圆、两处外部交点与角平分线

:::info[High Level A 第7講 PART1 主例题｜从第17讲移入]
圆内接四边形 $ABCD$ 满足 $AD=5,BC=2$。$E=AD\cap BC$、$F=AB\cap CD$，并且 $AE=3,CF=2$。

点序为 $E-A-D$、$E-B-C$、$F-B-A$、$F-C-D$。

求：① $BE$；② $CD$；③ $\angle CED$ 的内角平分线与 $CD$ 交于 $G$，$\angle AFD$ 的内角平分线与 $AD$ 交于 $I$，与 $EG$ 交于 $H$，求 $FH:HI$。

<GeometryFigure id="18-integrated" caption="G、H、I均由实际交点构造；虚线为题目给定的两条角平分线。" />
:::

<details className="solution-details">
<summary>查看逐步解答</summary>

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

这里不能省略最后所选的三角形；知道 $AI:ID$ 并不等于已经知道 $FH:HI$。
</details>

## 4　综合4｜目标是面积乘积，不必求全部线段

:::note[啓林館 深進数学A 教科书p.97 章末问题6]
半径为4的圆 $O$ 内有定点 $P$，$OP=2$。过 $P$ 的两条互相垂直的直线分别与圆交于 $A,B$ 和 $C,D$。令 $S_1=[PAC],S_2=[PBD]$，求 $S_1S_2$。

<GeometryFigure id="18-invariant" caption="两条弦过同一内部点且互相垂直；阴影表示题目所求的两个三角形。" />
:::

<details className="solution-details">
<summary>查看整体处理的解法</summary>

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

**方向改变，单个面积可能改变；乘积由两个不变量决定。** 本题没有足够条件唯一求出每段长度，也没有必要去求。
</details>

## 5　独立提高A｜计算链的组织

:::note[啓林館 深進数学A 教科书p.97 章末问题7]
$AB=AC=5,BC=\sqrt5$。$D$ 在 $AC$ 上，$AD=3$；边 $BC$ 的 $B$ 侧延长线与 $\triangle ABD$ 的外接圆交于另一点 $E$。$P=AB\cap DE$。

求：① $BE$；② $DP/EP$；③ $EP$。

<GeometryFigure id="18-power-menelaus" caption="这次圆经过A、B、D，而不是A、B、C；先确认点C在圆外。" />
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

## 6　独立提高B｜两条切线与另一条弦

:::note[4STEP 数学A 206]
从圆 $O$ 外一点 $P$ 引两条切线，切点为 $A,B$。$C=AB\cap PO$。过 $C$ 作一条不与 $PO$ 重合的直线，交圆于 $D,E$。证明 $P,O,D,E$ 四点共圆。

<GeometryFigure id="18-chord-of-contact" caption="目标圆尚未画出；需要把切线条件转换成关于C的长度乘积。" />
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

## 7　课后综合｜改变已知条件再做一次

:::note[High Level A 第7講 PART1 確認問題]
沿用综合3的点的定义和点序，但改为 $AD=4,CD=5,AE=2,BE=3$。求 $BC,CF$ 和 $FI:HI$。

<GeometryFigure id="18-integrated-practice" caption="本题不是主例题原图的数字替换：四边形、圆与交点均按新的条件重建。" />
:::

<details className="solution-details">
<summary>查看完整答案</summary>

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

本题问的是 $FI:HI$，不是 $FH:HI$；因此

$$
\boxed{FI:HI=(FH+HI):HI=8:3}.
$$
</details>

## 附录　空间性质：先证明垂直，不凭透视图判断

:::tip[使用的判定]
一条直线垂直于某平面内两条相交直线，则垂直于该平面。一条直线只垂直于平面内的一条线，并不足以得出线面垂直。这里只补性质证明，不重复第15讲的角锥体积题型。
:::

:::note[备用提高｜啓林館 深進数学A 教科书p.97 章末问题8]
棱长为1的正方体 $ABCD-EFGH$ 中，证明 $AG\perp$ 平面 $BDE$。设交点为 $P$，再求 $AP$。

<GeometryFigure id="18-cube-perpendicular" caption="立体先在三维坐标中验证，再投影；屏幕上看起来的角度不是垂直的依据。" />
:::

<details className="solution-details">
<summary>查看不使用向量的证明</summary>

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

不要把“会背定理”当成“已经会做综合题”。每次落笔都写清楚：**选哪个三角形／圆、使用哪条截线、三个比从哪里来、点序要求加还是减。**

课堂主线：综合1～4。独立提高A、B可用于课堂限时或留作提高作业；第7节为课后综合，空间附录为备用。

来源：High Level数学A第6講PART3确认2、第7講PART1；4STEP数学A 172、206；啓林館深進数学A教科书p.97章末6～8。所有新增说明、辅助线和重绘图均为讲义编辑，不标作教材原图。
