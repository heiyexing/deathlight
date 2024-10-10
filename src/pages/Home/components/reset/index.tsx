import { RedoOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';

const Reset = () => {
  const onReset = () => {};

  return (
    <Popconfirm
      title="提示"
      description="是否还原所有时间？"
      onConfirm={onReset}
      trigger="hover"
    >
      <Button type="text" size="large" icon={<RedoOutlined />} />
    </Popconfirm>
  );
};

export default Reset;
