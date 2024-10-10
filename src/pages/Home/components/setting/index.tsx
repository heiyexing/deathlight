import { SettingOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button, Form, Modal, Popover, TimePicker } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

type Dayjs = dayjs.Dayjs;

const Setting = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm<{
    totalPauseTime: Dayjs;
    totalRecallTime: Dayjs;
  }>();
  const {
    totalPauseTime = 0,
    totalRecallTime = 0,
    setTotalPauseTime,
    setTotalRecallTime,
    setPauseTime,
    setRecallTime,
  } = useModel('global');

  const onOpenSetting = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    if (!modalVisible) {
      return;
    }
    form.setFieldsValue({
      totalPauseTime: dayjs(
        dayjs.duration(totalPauseTime).format('HH:mm:ss'),
        'HH:mm:ss',
      ),
      totalRecallTime: dayjs(
        dayjs.duration(totalRecallTime).format('HH:mm:ss'),
        'HH:mm:ss',
      ),
    });
  }, [modalVisible]);

  const onClose = () => {
    setModalVisible(false);
  };

  const onSubmit = () => {
    const { totalPauseTime, totalRecallTime } = form.getFieldsValue();
    const newTotalPauseTime =
      totalPauseTime.get('hour') * 60 * 60 * 1000 +
      totalPauseTime.get('minute') * 60 * 1000 +
      totalPauseTime.get('second') * 1000;
    const newTotalRecallTime =
      totalRecallTime.get('hour') * 60 * 60 * 1000 +
      totalRecallTime.get('minute') * 60 * 1000 +
      totalRecallTime.get('second') * 1000;

    setTotalPauseTime(newTotalPauseTime);
    setTotalRecallTime(newTotalRecallTime);
    setPauseTime(newTotalPauseTime);
    setRecallTime(newTotalRecallTime);
    onClose();
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

      <Modal
        title="设置默认时长"
        open={modalVisible}
        onOk={onSubmit}
        onCancel={onClose}
        onClose={onClose}
      >
        <Form form={form}>
          <Form.Item label="默认暂停剩余时长" name="totalPauseTime">
            <TimePicker
              allowClear={false}
              showNow={false}
              needConfirm={false}
            />
          </Form.Item>
          <Form.Item label="默认回溯剩余时长" name="totalRecallTime">
            <TimePicker
              allowClear={false}
              showNow={false}
              needConfirm={false}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Setting;
