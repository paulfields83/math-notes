---
sidebar_position: 4
title: 第4章 图形与计量
---

# 第4章 图形与计量

本章按原讲义的四个小节整理：三角比、三角比的扩张、正弦定理与余弦定理、图形的计量。

## 1.1 三角比

### 直角三角形与三角比

在直角三角形中，对锐角 $\theta$：

$$
\sin\theta=\frac{\text{对边}}{\text{斜边}},
\qquad
\cos\theta=\frac{\text{邻边}}{\text{斜边}},
\qquad
\tan\theta=\frac{\text{对边}}{\text{邻边}}.
$$

三角比是边长的比值，不是边长本身。同一个角的三角比不随相似直角三角形的大小改变。

### 特殊角的三角比

| $\theta$ | $30^\circ$ | $45^\circ$ | $60^\circ$ |
| --- | --- | --- | --- |
| $\sin\theta$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ |
| $\cos\theta$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ |
| $\tan\theta$ | $\frac1{\sqrt3}$ | $1$ | $\sqrt3$ |

其他角的近似三角比可由三角比表读取。

### 三角比的相互关系

对锐角 $\theta$：

$$
\sin^2\theta+\cos^2\theta=1
$$

$$
\tan\theta=\frac{\sin\theta}{\cos\theta}
$$

$$
1+\tan^2\theta=\frac1{\cos^2\theta}.
$$

已知 $\sin\theta$ 或 $\cos\theta$ 时，先使用第一个关系；已知 $\tan\theta$ 时，使用第三个关系。

### 余角的三角比

$$
\sin(90^\circ-\theta)=\cos\theta
$$

$$
\cos(90^\circ-\theta)=\sin\theta
$$

$$
\tan(90^\circ-\theta)=\frac1{\tan\theta}.
$$

:::tip[图形与建模框架]

画出示意图 → 标注已知量和所求量 → 选取 $\sin$、$\cos$ 或 $\tan$ 的关系 → 求未知量。
先确认相对于所选角的“对边、邻边、斜边”。

:::

## 1.2 三角比的扩张

### 用坐标定义三角比

当

$$
0^\circ\le\theta\le180^\circ
$$

时，设角 $\theta$ 的终边上一点为 $P(x,y)$，$r=OP$，则：

$$
\sin\theta=\frac yr,\qquad
\cos\theta=\frac xr,\qquad
\tan\theta=\frac yx\quad(x\ne0).
$$

当 $x=0$ 时，$\tan\theta$ 没有定义。

### $0^\circ$ 到 $180^\circ$ 的特殊角

扩张后的三角比必须同时看数值和符号：

| $\theta$ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$ | $180^\circ$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\sin\theta$ | $0$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ |
| $\cos\theta$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ | $-\frac12$ | $-\frac{\sqrt2}{2}$ | $-\frac{\sqrt3}{2}$ | $-1$ |
| $\tan\theta$ | $0$ | $\frac1{\sqrt3}$ | $1$ | $\sqrt3$ | 无定义 | $-\sqrt3$ | $-1$ | $-\frac1{\sqrt3}$ | $0$ |

第二象限的数值可由 $180^\circ-\theta$ 的关系得到：正弦保持正，余弦和正切变为负。

### 单位圆

在单位圆上，$r=1$。若终边与单位圆交于 $P(x,y)$，则：

$$
\sin\theta=y,\qquad
\cos\theta=x,\qquad
\tan\theta=\frac yx,
$$

因此：

$$
P=(\cos\theta,\sin\theta).
$$

在 $0^\circ\le\theta\le180^\circ$ 的范围内，第二象限有：

$$
\sin\theta>0,\qquad
\cos\theta<0,\qquad
\tan\theta<0.
$$

### 直线的斜率与正切

直线

$$
y=mx
$$

与 $x$ 轴正方向所成的角为 $\theta$ 时：

$$
m=\tan\theta.
$$

一般直线 $y=mx+b$ 的斜率仍为 $m$，因此也可通过 $\tan\theta$ 判断直线的倾斜方向。

- $m>0$ 时，$0^\circ<\theta<90^\circ$；
- $m<0$ 时，$90^\circ<\theta<180^\circ$；
- 竖直直线对应 $\theta=90^\circ$，斜率和 $\tan90^\circ$ 都没有定义。

### 补角的三角比

$$
\sin(180^\circ-\theta)=\sin\theta
$$

$$
\cos(180^\circ-\theta)=-\cos\theta
$$

$$
\tan(180^\circ-\theta)=-\tan\theta.
$$

三角比的相互关系在 $0^\circ\le\theta\le180^\circ$ 内仍然成立。

## 1.3 正弦定理与余弦定理

在 $\triangle ABC$ 中，设 $a,b,c$ 分别是角 $A,B,C$ 的对边，$R$ 是外接圆半径。

### 正弦定理

$$
\frac{a}{\sin A}
=\frac{b}{\sin B}
=\frac{c}{\sin C}
=2R.
$$

### 余弦定理

$$
a^2=b^2+c^2-2bc\cos A
$$

$$
b^2=c^2+a^2-2ca\cos B
$$

$$
c^2=a^2+b^2-2ab\cos C.
$$

当 $A=90^\circ$ 时，$\cos A=0$，余弦定理退化为勾股定理。

:::tip[选择框架]

已知边与其对角的对应关系时，优先考虑正弦定理；已知三边，或已知两边及其夹角时，优先考虑余弦定理。
两边和一个非夹角时，先核对信息能否唯一确定三角形。

:::

### 三角形的决定

以下信息可以确定三角形：两边及夹角、两角及一边、三边。需要时可用三角形内角和补足角度信息。

## 1.4 图形的计量

### 三角形的面积

$$
S=\frac12bc\sin A
=\frac12ca\sin B
=\frac12ab\sin C.
$$

这组公式对应“两边及其夹角”。

### 角平分线的长度

在 $\triangle ABC$ 中，若 $AD$ 平分 $\angle A$，记：

$$
a=BC,\qquad b=CA,\qquad c=AB,
$$

则角平分线长度为：

$$
AD=\frac{2bc\cos\frac A2}{b+c}.
$$

这个公式的结构来自两个事实：角平分线把 $\angle A$ 分成两个 $\frac A2$，并且：

$$
BD:DC=c:b.
$$

在 $\triangle ABD$ 和 $\triangle ACD$ 中利用正弦定理，或先用角平分线定理求出 $BD,DC$ 再计算，都能得到同一长度。

:::tip[角平分线长度的判断框架]

先明确是“角平分线的长度”，而不是角平分线定理中的分点比。
已知两边和夹角时，优先使用半角与正弦定理；已知三边时，先用余弦定理求角或用角平分线定理确定分点，再处理长度。

:::

### 内切圆半径与面积

若内切圆半径为 $r$，半周长为：

$$
s=\frac{a+b+c}{2},
$$

则三角形面积为：

$$
S=\frac12r(a+b+c)=rs.
$$

:::tip[图形计量框架]

先把图形转化为平面示意图；补出必要的线段后，将图形分解为直角三角形或一般三角形；再用勾股定理、三角比、正弦定理、余弦定理或面积公式处理长度、角度和面积。

:::
