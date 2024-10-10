import { theme } from 'antd';

const { useToken } = theme;
export const useAntdToken = () => {
  const { token } = useToken();
  return token;
};
