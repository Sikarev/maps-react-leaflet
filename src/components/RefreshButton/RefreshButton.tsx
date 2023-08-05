import styles from './style.module.css';
import { LoadingButton } from '@mui/lab';

interface RefreshButtonProps {
  onRefresh: () => void,
  isLoading: boolean,
}

const RefreshButton = ({ onRefresh, isLoading }: RefreshButtonProps) => {
  return (
    <LoadingButton
      variant="contained"
      loading={isLoading}
      size="medium"
      className={styles.refreshButton}
      onClick={onRefresh}
    >Обновить</LoadingButton>
  );
};

export default RefreshButton;
