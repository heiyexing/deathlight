import { PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { useKeyPress } from 'ahooks';
import { Button } from 'antd';
import styles from './index.less';

export default function Pause() {
  const { isPaused, setIsPaused } = useModel('global');

  const onTogglePause = () => {
    setIsPaused(!isPaused);
  };

  useKeyPress('Space', onTogglePause);

  return (
    <div style={{ height: 0 }}>
      <Button
        type="text"
        size="large"
        className={styles.pauseBtn}
        icon={isPaused ? <PlayCircleOutlined /> : <PauseCircleOutlined />}
        onClick={onTogglePause}
        onFocus={(e) => e.target.blur()}
      />
    </div>
  );
}
