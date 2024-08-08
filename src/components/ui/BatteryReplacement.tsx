import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
    const {componentRef, style} = useScrollAnimation();

    return (
        <motion.div
            style={style}
            ref={componentRef}
            className="h-[415px] rounded-2xl bg-red-500 col-span-12"
        ></motion.div>
    );
};

export default BatteryReplacement;
