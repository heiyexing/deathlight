import { useModel } from '@umijs/max';
import { ConfigProvider, theme } from 'antd';
import Fullscreen from './components/fullscreen';
import styles from './index.less';

export default function HomePage() {
  const { isPaused } = useModel('global');

  return (
    <ConfigProvider
      theme={{
        algorithm: isPaused ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <div className={styles.pageHome}>
        123456
        <Fullscreen />
      </div>
    </ConfigProvider>
  );
}
