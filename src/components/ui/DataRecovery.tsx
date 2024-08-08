import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const DataRecovery = () => {
    const { componentRef, style } = useScrollAnimation();

    return (
        <motion.div
            style={style}
            ref={componentRef}
            className="h-[415px] rounded-2xl bg-purple-500 col-span-12 md:col-span-6 lg:col-span-7"
        ></motion.div>
    );
};

export default DataRecovery;
