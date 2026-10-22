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

## 1　$PA=PB=PC$：垂足是底面外心

### 核心结论

条件 $PA=PB=PC$ 的本质不是“底面是正三角形”。

若从 $P$ 向平面 $ABC$ 作垂线，垂足为 $H$，则

$$
HA=HB=HC.
$$

因此

$$
\boxed{H\text{ 是 }\triangle ABC\text{ 的外心}}.
$$

底面为正三角形时，外心、重心重合；底面不是正三角形时，也仍然先找外心。

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

![第10講 PART3 講義問題 四面体](/img/math1a-advanced/lesson15/hl-part3-tetrahedron.svg)
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
\boxed{2}.
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

![第10講 PART3 確認問題 四面体](/img/math1a-advanced/lesson15/confirm-part3-tetrahedron.svg)
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
\boxed{3}.
$$

</details>



### Challenge：底面不是正三角形

上面的结论不依赖底面是正三角形。下面把底面改成直角三角形。

:::note[讲义原创综合｜非正三角形底面]
四面体 $PABC$ 满足

$$
PA=PB=PC=\sqrt{10},
$$

底面三边为

$$
AB=3,\qquad
BC=4,\qquad
CA=5.
$$

求四面体体积。
:::

<details className="solution-details">
<summary>查看答案</summary>

底面是 $3$-$4$-$5$ 直角三角形，因此其外接圆半径为斜边的一半：

$$
R=\frac52.
$$

设高的垂足为 $H$，则

$$
HA=HB=HC=\frac52.
$$

在直角三角形 $PHA$ 中，

$$
PH
=
\sqrt{10-\frac{25}{4}}
=
\frac{\sqrt{15}}2.
$$

底面积为

$$
[ABC]
=
\frac12\cdot3\cdot4
=
6.
$$

因此

$$
V
=
\frac13\cdot6\cdot\frac{\sqrt{15}}2
=
\boxed{\sqrt{15}}.
$$

</details>



---

## 2　正四角锥：参数也要先降到直角三角形

正四角锥中，顶点向底面作垂线时，垂足是正方形底面的中心。

因此真正需要处理的仍然只是一个直角三角形。

:::info[4STEP 教材题型｜正四角錐]
正四角锥 $PABCD$ 中，$PH$ 垂直于底面正方形 $ABCD$，$H$ 为底面中心。

已知

$$
PA=a,\qquad
\angle APH=\theta.
$$

用 $a,\theta$ 表示体积 $V$。

![正四角锥参数题](/img/math1a-advanced/lesson15/square-pyramid-parameter.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

在直角三角形 $PAH$ 中，

$$
PH=a\cos\theta,
$$

$$
AH=a\sin\theta.
$$

因为 $H$ 是正方形中心，

$$
AC=2AH=2a\sin\theta.
$$

若正方形边长为 $x$，则

$$
x=\frac{AC}{\sqrt2}
=
\sqrt2\,a\sin\theta.
$$

所以底面积为

$$
x^2=2a^2\sin^2\theta.
$$

因此

$$
V
=
\frac13\cdot2a^2\sin^2\theta\cdot a\cos\theta
=
\boxed{\frac23a^3\sin^2\theta\cos\theta}.
$$

</details>

:::note[確認問題｜数値を入れて確認]
在同样的正四角锥中，

$$
PA=6,\qquad
\angle APH=60^\circ.
$$

求：

1. 高 $PH$；
2. 正方形底面的边长；
3. 四角锥体积。
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
PH
=
6\cos60^\circ
=
\boxed{3}.
$$

$$
AH
=
6\sin60^\circ
=
3\sqrt3.
$$

底面对角线为

$$
AC=2AH=6\sqrt3.
$$

所以边长

$$
AB
=
\frac{6\sqrt3}{\sqrt2}
=
\boxed{3\sqrt6}.
$$

底面积为

$$
(3\sqrt6)^2=54.
$$

因此

$$
V
=
\frac13\cdot54\cdot3
=
\boxed{54}.
$$

</details>

---

## 3　空间截面：先把立体图变成一个三角形

空间题不一定都围绕“高”和“体积”。

另一类常见问题，是先从立体图中抽出一个平面三角形，再回到三平方、余弦定理和面积。

:::info[4STEP 教材题型｜直方体の断面三角形]
直方体 $ABCD-EFGH$ 中，

$$
AB=\sqrt6,\qquad
AD=\sqrt3,\qquad
AE=1.
$$

求：

1. $\angle ACF$；
2. $\triangle ACF$ 的面积。

![直方体中的截面三角形](/img/math1a-advanced/lesson15/cuboid-section-acf.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

先分别在三个矩形面上求截面三角形的三边。

$$
AC
=
\sqrt{AB^2+AD^2}
=
\sqrt{6+3}
=
3.
$$

$$
AF
=
\sqrt{AB^2+AE^2}
=
\sqrt{6+1}
=
\sqrt7.
$$

$$
CF
=
\sqrt{AD^2+AE^2}
=
\sqrt{3+1}
=
2.
$$

于是空间问题已经变成边长

$$
3,\qquad \sqrt7,\qquad 2
$$

的平面三角形。

由余弦定理，

$$
\cos\angle ACF
=
\frac{AC^2+CF^2-AF^2}{2\cdot AC\cdot CF}
=
\frac{9+4-7}{12}
=
\frac12.
$$

因此

$$
\boxed{\angle ACF=60^\circ}.
$$

面积为

$$
[\triangle ACF]
=
\frac12\cdot3\cdot2\sin60^\circ
=
\boxed{\frac{3\sqrt3}{2}}.
$$

</details>

:::note[確認問題｜正方体の截面]
边长为 $2$ 的正方体 $ABCD-EFGH$ 中，求

$$
\angle ACF
$$

以及

$$
[\triangle ACF].
$$
:::

<details className="solution-details">
<summary>查看答案</summary>

正方体中，

$$
AC=AF=CF=2\sqrt2.
$$

所以 $\triangle ACF$ 是正三角形：

$$
\boxed{\angle ACF=60^\circ}.
$$

面积为

$$
\frac{\sqrt3}{4}(2\sqrt2)^2
=
\boxed{2\sqrt3}.
$$

</details>

---

### 提高演习：正四面体上的分点截面

边长为 $3$ 的正四面体 $ABCD$ 中，点 $P,Q$ 分别满足

$$
BP:PC=1:2,
$$

$$
CQ:QD=1:2.
$$

![正四面体分点截面](/img/math1a-advanced/lesson15/tetrahedron-section-apq.svg)

求：

1. $AP,AQ,PQ$；
2. $\cos\angle PAQ$；
3. $\triangle APQ$ 的面积。

<details className="solution-details">
<summary>查看答案</summary>

### 1. 求三边

因为每个面都是边长为 $3$ 的正三角形，

$$
BP=1,\qquad PC=2,
$$

$$
CQ=1,\qquad QD=2.
$$

在 $\triangle ABC$ 中，

$$
\angle ABP=60^\circ.
$$

所以

$$
AP^2
=
3^2+1^2-2\cdot3\cdot1\cos60^\circ
=
7.
$$

因此

$$
\boxed{AP=\sqrt7}.
$$

同理，在 $\triangle ACD$ 中，

$$
\boxed{AQ=\sqrt7}.
$$

再看正三角形 $BCD$。

已知

$$
BP=1,\qquad CQ=1.
$$

利用余弦定理或平面坐标，可得

$$
PQ^2=3,
$$

所以

$$
\boxed{PQ=\sqrt3}.
$$

至此，空间图形已经完全变成一个三边已知的平面三角形：

$$
\triangle APQ.
$$

### 2. 求角

由余弦定理：

$$
\cos\angle PAQ
=
\frac{AP^2+AQ^2-PQ^2}
{2\cdot AP\cdot AQ}.
$$

所以

$$
\cos\angle PAQ
=
\frac{7+7-3}{14}
=
\boxed{\frac{11}{14}}.
$$

### 3. 求面积

$$
\sin\angle PAQ
=
\sqrt{1-\left(\frac{11}{14}\right)^2}
=
\frac{5\sqrt3}{14}.
$$

因此

$$
[\triangle APQ]
=
\frac12\cdot\sqrt7\cdot\sqrt7
\cdot\frac{5\sqrt3}{14}
=
\boxed{\frac{5\sqrt3}{4}}.
$$

> 这题的关键不是“空间计算公式”，而是：**分别在各个面上求 $AP,AQ,PQ$ → 抽出 $\triangle APQ$。**

</details>

---

## 4　换底面：用体积求点到平面的距离

空间题里很重要的一个技巧是：

$$
\boxed{\text{同一个四面体，换一个面当底面}}
$$

体积本身不变。已经能用一个底面求出体积时，可以换成另一个底面，反求“点到平面的距离”。

:::info[4STEP 教材综合｜四面体と点から平面までの距離]
四面体 $ABCD$ 中，

$$
AB=BC=3,\qquad
CA=2\sqrt5,\qquad
BD=1,
$$

并且

$$
\angle ADB=\angle ADC=90^\circ.
$$

求：

1. $CD$；
2. 四面体 $ABCD$ 的体积；
3. $\triangle ABC$ 的面积；
4. 点 $D$ 到平面 $ABC$ 的距离 $DH$。

![四面体与点到平面距离](/img/math1a-advanced/lesson15/tetrahedron-point-plane-distance.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

由

$$
\angle ADB=90^\circ
$$

和

$$
AB=3,\qquad BD=1
$$

得到

$$
AD=\sqrt{3^2-1^2}=2\sqrt2.
$$

又因为

$$
\angle ADC=90^\circ,
$$

所以

$$
CD
=
\sqrt{AC^2-AD^2}
=
\sqrt{20-8}
=
\boxed{2\sqrt3}.
$$

在 $\triangle BCD$ 中，

$$
BD=1,\qquad CD=2\sqrt3,\qquad BC=3.
$$

由余弦定理，

$$
\cos\angle BDC
=
\frac{1+12-9}{4\sqrt3}
=
\frac1{\sqrt3},
$$

因此

$$
\sin\angle BDC=\sqrt{\frac23}.
$$

所以

$$
[BCD]
=
\frac12\cdot1\cdot2\sqrt3\cdot\sqrt{\frac23}
=
\sqrt2.
$$

因为 $AD$ 同时垂直于 $DB,DC$，所以

$$
AD\perp\text{平面 }BCD.
$$

于是

$$
V
=
\frac13[BCD]\cdot AD
=
\frac13\cdot\sqrt2\cdot2\sqrt2
=
\boxed{\frac43}.
$$

另一方面，$\triangle ABC$ 三边为

$$
3,\qquad3,\qquad2\sqrt5.
$$

以 $AC$ 为底边时，高为

$$
\sqrt{3^2-(\sqrt5)^2}=2.
$$

所以

$$
[ABC]
=
\frac12\cdot2\sqrt5\cdot2
=
\boxed{2\sqrt5}.
$$

再把 $\triangle ABC$ 当底面：

$$
\frac43
=
\frac13\cdot2\sqrt5\cdot DH.
$$

因此

$$
\boxed{DH=\frac{2\sqrt5}{5}}.
$$

</details>

:::note[確認問題｜同じ四面体を別の底面で見る]
四面体 $ABCD$ 中，$AD$ 垂直于平面 $BCD$，并且

$$
AD=3,\qquad
BD=CD=4,\qquad
\angle BDC=60^\circ.
$$

另外

$$
AB=AC=5,\qquad BC=4.
$$

求：

1. 四面体体积；
2. $\triangle ABC$ 的面积；
3. 点 $D$ 到平面 $ABC$ 的距离。
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
[BCD]
=
\frac12\cdot4\cdot4\sin60^\circ
=
4\sqrt3.
$$

所以

$$
V
=
\frac13\cdot4\sqrt3\cdot3
=
\boxed{4\sqrt3}.
$$

$\triangle ABC$ 是边长

$$
5,\qquad5,\qquad4
$$

的等腰三角形，高为

$$
\sqrt{5^2-2^2}=\sqrt{21}.
$$

因此

$$
[ABC]
=
\frac12\cdot4\sqrt{21}
=
2\sqrt{21}.
$$

若点 $D$ 到平面 $ABC$ 的距离为 $h$，则

$$
4\sqrt3
=
\frac13\cdot2\sqrt{21}\cdot h.
$$

解得

$$
\boxed{h=\frac{6\sqrt7}{7}}.
$$

</details>

---

## 5　提高演习：内切球与体积分割

正四面体 $ABCD$ 的边长为

$$
3.
$$

它的内切球球心为 $O$，半径为 $r$。

求：

1. 正四面体体积 $V$；
2. 内切球半径 $r$；
3. 内切球的表面积与体积。

<details className="solution-details">
<summary>查看答案</summary>

### 1. 正四面体体积

以 $\triangle BCD$ 为底面。

底面积为

$$
[\triangle BCD]
=
\frac{\sqrt3}{4}\cdot3^2
=
\frac{9\sqrt3}{4}.
$$

设顶点 $A$ 到底面的垂足为 $H$。

$H$ 是正三角形 $BCD$ 的中心，因此

$$
BH=\sqrt3.
$$

在直角三角形 $ABH$ 中，

$$
AH
=
\sqrt{3^2-(\sqrt3)^2}
=
\sqrt6.
$$

所以

$$
V
=
\frac13
\cdot
\frac{9\sqrt3}{4}
\cdot
\sqrt6
=
\boxed{\frac{9\sqrt2}{4}}.
$$

### 2. 内切球半径

把正四面体按球心 $O$ 分成4个小四面体。

每个小四面体都以一个正三角形面为底面，高都是 $r$。

四个面的总面积为

$$
S_{\text{表}}
=
4\cdot\frac{9\sqrt3}{4}
=
9\sqrt3.
$$

因此

$$
V
=
\frac13S_{\text{表}}r.
$$

所以

$$
\frac{9\sqrt2}{4}
=
\frac13\cdot9\sqrt3\cdot r.
$$

解得

$$
\boxed{r=\frac{\sqrt6}{4}}.
$$

### 3. 球的表面积与体积

表面积：

$$
4\pi r^2
=
4\pi\cdot\frac6{16}
=
\boxed{\frac{3\pi}{2}}.
$$

体积：

$$
\frac43\pi r^3
=
\boxed{\frac{\sqrt6\pi}{8}}.
$$

> 这里真正重要的是 $V=\frac13\times(\text{表面积})\times r$。它来自“把整体按内心分成多个小角锥”，不是需要死背的新公式。

</details>

---

## 6　Challenge：展开图与表面最短路径

### 6-1　圆锥侧面最短距离

一个直圆锥的底面半径为

$$
1,
$$

母线长为

$$
3.
$$

从底面圆周上的一点 $A$ 出发，沿圆锥侧面绕一周回到 $A$。

求侧面上的最短路径长度。

![圆锥展开图最短路径](/img/math1a-advanced/lesson15/cone-unfold-shortest.svg)

<details className="solution-details">
<summary>查看答案</summary>

把圆锥侧面展开成半径为 $3$ 的扇形。

扇形弧长等于底面圆周长：

$$
2\pi\cdot1
=
2\pi\cdot3\cdot\frac{\theta}{360^\circ}.
$$

所以

$$
\theta=120^\circ.
$$

展开以后，“绕一周回到 $A$”对应扇形两端的点

$$
A,\qquad A'.
$$

侧面最短路径变成平面中的线段

$$
AA'.
$$

在 $\triangle OAA'$ 中，

$$
OA=OA'=3,
$$

$$
\angle AOA'=120^\circ.
$$

由余弦定理：

$$
AA'^2
=
3^2+3^2
-
2\cdot3\cdot3\cos120^\circ
=
27.
$$

所以

$$
\boxed{AA'=3\sqrt3}.
$$

</details>

### 6-2　Final Challenge：正四面体表面最短路径

边长为 $4$ 的正四面体 $ABCD$ 中，$M$ 是边 $AD$ 的中点。

从 $A$ 出发，沿四面体表面移动，依次穿过边 $BC$、边 $CD$，最后到达 $M$。

设最短路径与 $BC,CD$ 的交点分别为 $P,Q$。

![正四面体展开图最短路径](/img/math1a-advanced/lesson15/tetrahedron-unfold-shortest.svg)

求：

1. $[\triangle ABP]$；
2. 最短路径 $APQM$ 的长度；
3. $\cos\angle BAP$。

<details className="solution-details">
<summary>查看答案</summary>

把经过的三个面

$$
ABC,\qquad BCD,\qquad ACD
$$

依次沿

$$
BC,\qquad CD
$$

展开到同一平面。

展开后，最短路径一定是一条直线。

取平面坐标：

$$
B=(0,0),\qquad
C=(4,0),
$$

$$
A=(2,2\sqrt3).
$$

把 $\triangle BCD$ 展到 $BC$ 的另一侧：

$$
D=(2,-2\sqrt3).
$$

再把 $\triangle ACD$ 沿 $CD$ 展开，$A$ 的对应点为

$$
A'=(6,-2\sqrt3).
$$

因为 $M$ 是 $AD$ 中点，所以展开后的 $M$ 为

$$
M'=(4,-2\sqrt3).
$$

最短路线就是线段

$$
AM'.
$$

### 1. 求 $[\triangle ABP]$

直线 $AM'$ 与 $BC$ 相交时，纵坐标正好从

$$
2\sqrt3
$$

变化到

$$
-2\sqrt3,
$$

所以交点位于线段 $AM'$ 的中点。

因此

$$
P=(3,0),
$$

所以

$$
BP=3.
$$

$\triangle ABC$ 的高为

$$
2\sqrt3.
$$

于是

$$
[\triangle ABP]
=
\frac12\cdot3\cdot2\sqrt3
=
\boxed{3\sqrt3}.
$$

### 2. 最短路径

$$
AM'
=
\sqrt{(4-2)^2+(-2\sqrt3-2\sqrt3)^2}.
$$

因此

$$
AM'
=
\sqrt{4+48}
=
\boxed{2\sqrt{13}}.
$$

### 3. 求 $\cos\angle BAP$

在原来的正三角形 $ABC$ 中，

$$
AB=4,
$$

而

$$
AP
=
\sqrt{(3-2)^2+(0-2\sqrt3)^2}
=
\sqrt{13}.
$$

又

$$
BP=3.
$$

在 $\triangle ABP$ 中由余弦定理：

$$
\cos\angle BAP
=
\frac{AB^2+AP^2-BP^2}
{2\cdot AB\cdot AP}.
$$

所以

$$
\cos\angle BAP
=
\frac{16+13-9}{8\sqrt{13}}
=
\boxed{\frac{5\sqrt{13}}{26}}.
$$

> 表面最短路径题的固定入口：**展开 → 直线 → 回到平面几何。**

</details>

---

## 7　图形与计量综合检查

做第8～10講综合题时，依次确认：

1. 是否可以先落到直角三角形；
2. 是否需要正弦定理；
3. 是否需要余弦定理；
4. 是否可以用面积建立额外关系；
5. 能否先抽出一个平面截面三角形；
6. 空间图形是否能先求底面中心或底面外心；
7. 是否可以通过“换底面”反求点到平面的距离；
8. 表面最短距离是否应该先展开。

:::note[综合练习｜先判断方法，不急着计算]
看到空间图形时，先回答下面三个问题：

1. 哪个面最适合先当底面？
2. 哪一条线可以确认是这个底面的高？
3. 如果目标是“点到另一个平面的距离”，是否可以先求体积，再换底面？

把这三个问题判断清楚以后，再进入具体计算。
:::

---

## 本讲整理

空间题的核心不是“三维计算”，而是：

> 找外心/中心 → 抽出平面三角形 → 求高或截面 → 必要时换底面；空间题最终仍要降回二维。
