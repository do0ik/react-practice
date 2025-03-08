import styles from "./Loading.module.css";
import common from "../pages/Common.module.css";

function Loading() {
    return (
        <div className={styles.rootContainer}>
            <span className={`${styles.loadingText} ${common.fontDS}`}>Loading...</span>
        </div>
    )
}

export default Loading;
