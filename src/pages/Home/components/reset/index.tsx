import { RedoOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';

const Reset = () => {
  const { setPauseTime, setRecallTime, totalPauseTime, totalRecallTime } =
    useModel('global');

  const onReset = () => {
    setPauseTime(totalPauseTime);
    setRecallTime(totalRecallTime);
    message.success('重置成功');
  };

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
