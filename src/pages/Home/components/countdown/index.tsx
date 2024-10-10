import { useAntdToken } from '@/hooks/use-antd-token';
import { Button, Col, Row } from 'antd';
import dayjs from 'dayjs';
import styles from './index.less';

const formatDuration = (time: number) => {
  const dur = dayjs.duration(time);
  return dur.format('HH:mm:ss');
};

export default function Countdown({
  value = 0,
  onChange: _onChange,
  title,
}: {
  value?: number;
  onChange?: (value: number) => void;
  title?: string;
}) {
  const token = useAntdToken();

  const onChange = (newValue: number) => {
    _onChange?.(newValue < 0 ? 0 : newValue);
  };

  return (
    <div className={styles.countdown}>
      <div
        className={styles.countdownLabel}
        style={{ color: token.colorTextDescription }}
      >
        {title}：
      </div>
      <div>
        <div className={styles.countdownValue}>{formatDuration(value)}</div>
        <Row className={styles.countdownOpeartion}>
          <Col span={6}>
            <Button
              type="text"
              size="large"
              block
              onClick={() => onChange?.(value - 60 * 1000)}
            >
              -1分
            </Button>
          </Col>
          <Col span={6}>
            <Button
              type="text"
              size="large"
              block
              onClick={() => onChange?.(value - 1000)}
            >
              -1秒
            </Button>
          </Col>
          <Col span={6}>
            <Button
              type="text"
              size="large"
              block
              onClick={() => onChange?.(value + 1000)}
            >
              +1秒
            </Button>
          </Col>
          <Col span={6}>
            <Button
              type="text"
              size="large"
              block
              onClick={() => onChange?.(value + 60 * 1000)}
            >
              +1分
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
