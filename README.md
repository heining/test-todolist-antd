react数据视图更新原理
1.state 数据
2.JSX 模板

3.数据 + 模板 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实DOM)(耗损了性能)
['div', {id: 'abc'}, ['span', {}, 'hello ning']]

4.用虚拟DOM的结构生成真实的DOM，来显示
<div id='abc'><span>hello ning</span></div>

5.state 发生变化

6.数据 + 模板 生成新的虚拟DOM (极大的提升了性能)
['div', {id: 'abc'}, ['span', {}, 'bye bye']]

7.比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容 (极大的提升性能)
diff算法：同级比较每一层的差异，当根节点为不同类型的元素时，react会拆卸原有的树并且建立起新的树

8.直接操作DOM，改变span中的内容

优点：
1.性能提升了
2.它使得跨端应用得以实现。React Native