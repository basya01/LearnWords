import { ChoiceWords, CheckWords } from '../components';
import { useAppSelector } from '../hooks/redux';
import { GameStatus } from '../redux/slices/check';

const Check = () => {
  const status = useAppSelector((state) => state.check.status);

  return (
    <>
      {status === GameStatus.CHOICE && <ChoiceWords />}
      {status === GameStatus.CHECK && <CheckWords />}
    </>
  );
};

export default Check;
