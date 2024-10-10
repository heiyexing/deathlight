import { useAntdToken } from '@/hooks/use-antd-token';
import Fullscreen from './components/fullscreen';
import styles from './index.less';

import { useModel } from '@umijs/max';
import { ConfigProvider, theme } from 'antd';
import Reset from './components/reset';
import Setting from './components/setting';

function InnerPage() {
  const token = useAntdToken();

  return (
    <div
      className={styles.pageHome}
      style={{ background: token.colorBgContainer, color: token.colorText }}
    >
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
