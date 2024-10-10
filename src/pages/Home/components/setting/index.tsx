import { SettingOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { useState } from 'react';

const Setting = () => {
  const [modelVisible, setModelVisible] = useState(false);

  const onOpenSetting = () => {
    setModelVisible(true);
    console.log('onOpenSetting', modelVisible);
  };

  return (
    <>
      <Popover content="设置">
        <Button
          type="text"
          size="large"
          icon={<SettingOutlined />}
          onClick={onOpenSetting}
        />
      </Popover>
    </>
  );
};

export default Setting;
