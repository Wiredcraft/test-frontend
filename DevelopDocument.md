# 开发设计文档

## 疑问

1. 图片hover、click时发生什么？
2. 搜索框hover、click、input中时发生什么？是否有「搜索」按钮？键盘enter是否触发？
3. 图片loading中时显示效果？——pinterest是显示图片主色、与图片同大小的色块。需要提前计算图片主色
4. 图片是自适应固定宽度，还是剪裁？剪裁的话规则是什么？
5. responsive的话，移动端的UI是怎样？——pinterest在手机上是两列并排
6. search是全局匹配or部分匹配？
7. search是输入即触发搜索 还是 点搜索按钮触发搜索？——pinterest是后者。
8. search是客户端筛选数据 还是 服务端搜索数据？——正常应该是服务端。
9. search需要体现在url上，供用户通过url分享指定搜索结果页面吗？——pinterest是体现在url上的。
10. search后页面视图改变是否有动画效果？——pinterst是transition
11. search后如果是空页面显示什么？
12. feed流新数据是会实时体现在页面上，还是需要用户手动下拉拉取新数据？——pinterest是后者。
13. 兼容浏览器版本?
14. 滚动时header固定在顶部还是跟随滚动？——pinterest是固定在顶部
15. 各种error情况，包括图片加载error，搜索error，404等如何显示

## 技术方案及难点

### 1. Masonry Layout UI实现方案

调研Masonry实现方案:
MDN 介绍，仅firefox支持：<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout>
一些技术方案的实现和问题：<https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/>

#### Pinterst实现方案

1. 样式

```
position:absolute;
width:;
height:;
top:0;
left:0;
transform:translateX(x) translateY(y);

//动画效果
transition:transform .2s
```

2. 计算排列逻辑：
从当前行，每一列的底部，中选择最小的，将当前元素放在它下面。

3. 屏幕尺寸适配方案：
手机端2列，其他都固定列宽计算。

#### Masonry.js

与pinterst 只有tranform的区别。
Masonry没有用tranform，而是采用

```
top:x;
left:y;
```

屏幕尺寸适配方案未考察。

#### 最终选择方案

1. 样式

```
position:absolute;
tranform:;
```

原因：transform走GPU，渲染性能更优；

2. 计算逻辑：
由于时间不够，计算逻辑简化，仅考虑以下情况：

   1. 设置列宽和最小列数，优先固定列宽展示。
   2. 如果按照列宽计算出列数小于最小列数，则按照最小列数计算列宽。
   3. 按顺序摆放item，每次从当前每一列的bottom中计算最小列，将新的item置于其下。
   4. resize 暂未考虑，TODO。

3. 其他
图片适配方式：根据固定colWidth等比缩放；

待优化：

1. 计算可以放在worker中——需要分离dom操作和纯计算。
2. serviceworker缓存

### 2. Lazy loading

1. 拿到数据但图片未loading成功时，通过图片宽高及图片主题色 设置其 宽高、背景图的block——pinterst的方案；

    + 图片主题色需要后端提前算好，这次实现默认背景色。
    + 宽高通过url提取的，更优的方式也是后端接口返回。

2. 预拉取一屏图片，但不阻塞当前屏拉取数据及渲染；——未实现

### 3. 无限加载，dom超量，是否清除？

未实现。

### 4. 移动端适配

header部分暂未考虑。
gallery部分仅考虑最小两列。

### 5. 搜索功能

时间有限，未实现搜索即改变url；
搜索交互体验也很差，简易版。

## 待优化

时间有限，除以上提及的问题。
还有代码层面：

1. 由于页面简单，对多页面项目的代码结构 未考虑全面，具体情况具体分析。

2. 边界情况可能考虑不周。

3. 计算逻辑待优化，各种性能考虑及复用率考虑。

## 参考链接

<https://www.pinterest.com/>
<https://www.figma.com/file/MGrnRE8jfCl9lU1UmqOQBg/Wiredcraft---Front-End-Test-Mockup?node-id=2%3A1>
<https://github.com/Wiredcraft/test-frontend>
