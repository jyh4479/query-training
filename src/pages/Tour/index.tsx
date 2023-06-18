import { Spin } from 'antd';
import { Suspense, useEffect } from 'react';
import { useKtoTourListQuery } from '../../hooks/serverStateHooks/useKtoTourList/useKtoTourListQuery';
import { useBusanTourListQuery } from '../../hooks/serverStateHooks/useBusanTourList/useBusanTourListQuery';

const Tour = () => {
  const { isLoading, data, status } = useKtoTourListQuery();
  const { isLoading: busanIsLoading, data: busanData, status: busanStatus } = useBusanTourListQuery();

  useEffect(() => {
    // console.log(isLoading);
    // console.log(data);
    // console.log(status);

    console.log(busanIsLoading);
    console.log(busanData);
    console.log(busanStatus);
  }, [busanData, busanStatus]);

  return (
    <Spin spinning={isLoading}>
      <div>TEST</div>
    </Spin>
  );
};

export default Tour;
