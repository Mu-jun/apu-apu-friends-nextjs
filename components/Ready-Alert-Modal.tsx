import styles from './Ready-Alert-Modal.module.css';
import Link from 'next/link';

export default function ReadyAlertModal({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p>준비중입니다.</p>
        <Link href="#" className="btn btnBlue" onClick={onClose}>
          닫기
        </Link>
      </div>
    </div>
  );
}
