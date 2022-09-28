import ChoiceWords from '../../components/ChoiceWords';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { GameStatus, setStatus } from '../../redux/slices/check';
import CheckWords from '../../components/CheckWords';

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
