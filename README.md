# 此仓库已废弃

**重要：** 此仓库后续不再维护，也不会接受更多的特性更新。`ant-design/pro-list` 将会迁移至 `ant-design/pro-components` 仓库进行后续的维护，访问 https://procomponent.ant.design/ 了解更多。此变更不影响继续使用 `@ant-design/pro-list` 这个 npm 包名安装使用此组件。

# ProList (高级列表)

ProList 在 antd 的 list 支持了一些功能，比如 多选，展开等功能，使用体验贴近 table。

## 何时使用

在完成一个标准的列表时即可使用。

## API

### ProList

ProList 与 antd 的 [List](https://ant.design/components/list-cn/) 相比，主要增加了 rowSelection 和 expandable 来支持选中与筛选

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| rowSelection | 与 antd 相同的[配置](https://ant.design/components/table-cn/#rowSelection) | object \|boolean | false |
| expandable | 与 antd 相同的[配置](https://ant.design/components/table-cn/#expandable) | object \| false | - |
| showActions | 何时展示 actions | 'hover' \| 'always' | always |
| rowKey | 行的 key，一般是行 id | string \| (row,index)=>string | "id" |
| renderItem | 现在的 renderItem 需要返回 ProList.Item 的 props，而不是 dom | ItemProps | - |
| listRenderItem | 这是 antd 的 renderItem 的别名 | (row,index)=> Node | - |

### ProList.Item

如果你的 dataSource 包含 children，我们会将其打平传入到 renderItem 中，但是包含 children 的项会转化了 group 的样式，只支持 title 和 actions 的属性。

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| type | 列表项的预设样式 | new \| top | - |
| title | 列表项的主标题 | ReactNode | - |
| subTitle | 列表项的副标题 | ReactNode | - |
| checkbox | 列表的选择框 | React.ReactNode | - |
| loading | 列表项是否在加载中 | React.ReactNode | - |
| avatar | 列表项的头像 | AvatarProps \| string | - |
| actions | 操作列表项 | React.ReactNode[] | - |
| description | 列表项的描述，与 title 不在一行 | React.ReactNode[] | - |
| expandedRowClassName | 多余展开的 css | string | - |
| expand | 列表项是否展开 | boolean | - |
| onExpand | 列表项展开收起的回调 | (expand: boolean) => void | - |
| expandable | 列表项展开配置 | [object](https://ant.design/components/table-cn/#expandable) | - |
