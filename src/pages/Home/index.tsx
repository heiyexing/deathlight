import { useAntdToken } from '@/hooks/use-antd-token';
import Fullscreen from './components/fullscreen';
import styles from './index.less';

import { useModel } from '@umijs/max';
import { ConfigProvider, theme } from 'antd';
import Countdown from './components/countdown';
import Pause from './components/pause';
import Reset from './components/reset';
import Setting from './components/setting';

function InnerPage() {
  const { recallTime, setRecallTime, pauseTime, setPauseTime } =
    useModel('global');
  const token = useAntdToken();

  return (
    <div
      className={styles.pageHome}
      style={{ background: token.colorBgContainer, color: token.colorText }}
    >
      <div className={styles.centerPanel}>
        <Countdown
          title="暂停剩余时长"
          value={pauseTime}
          onChange={setPauseTime}
        />
        <Countdown
          title="回溯剩余时长"
          value={recallTime}
          onChange={setRecallTime}
        />
        <Pause />
      </div>
      <div className={styles.floatBtnGroup}>
        <Reset />
        <Setting />
        <Fullscreen />
      </div>
    </div>
  );
}
const PageHome = () => {
  const { isPaused } = useModel('global');

  return (
    <ConfigProvider
      theme={{
        algorithm: isPaused ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <InnerPage />
    </ConfigProvider>
  );
};

export default PageHome;
