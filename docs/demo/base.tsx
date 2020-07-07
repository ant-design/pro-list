import React from 'react';
import { Button, Tag } from 'antd';
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import ProList from '@ant-design/pro-list';

const dataSource = ['语雀的天空', 'Ant Design', '蚂蚁金服体验科技', 'TechUI'];

export default () => (
  <>
    <ProList<string>
      actions={[
        <Button key="3" type="primary">
          新建
        </Button>,
      ]}
      rowKey="id"
      title="基础列表"
      showActions="hover"
      dataSource={dataSource}
      renderItem={(item) => ({
        title: item,
        subTitle: (
          <div style={{ display: 'flex' }}>
            <Tag color="blue">Ant Design</Tag>
            <Tag
              color="#5BD8A6"
              style={{
                marginRight: 8,
              }}
            >
              TechUI
            </Tag>
          </div>
        ),
        actions: [<a>邀请</a>],
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team',
        avatar:
          'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      })}
    />
  </>
);
