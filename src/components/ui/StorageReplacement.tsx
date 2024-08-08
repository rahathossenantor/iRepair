import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const StorageReplacement = () => {
    const { componentRef, style } = useScrollAnimation();

    return (
        <motion.div
            style={style}
            ref={componentRef}
            className="h-[415px] rounded-2xl bg-yellow-500 col-span-12"
        ></motion.div>
    );
};

export default StorageReplacement;
