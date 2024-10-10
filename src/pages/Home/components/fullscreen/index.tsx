import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { useFullscreen } from 'ahooks';
import { Button, Popover } from 'antd';
import { useRef } from 'react';

const Fullscreen = () => {
  const ref = useRef(document.querySelector('body'));
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(ref);

  return (
    <Popover content={isFullscreen ? '退出全屏' : '全屏'}>
      <Button
        type="text"
        size="large"
        icon={
          isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />
        }
        onClick={toggleFullscreen}
      />
    </Popover>
  );
};

export default Fullscreen;
