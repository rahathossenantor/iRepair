import BatteryReplacement from "../../BatteryReplacement";
import ChipsetReplacement from "../../ChipsetReplacement";
import DataRecovery from "../../DataRecovery";
import StorageReplacement from "../../StorageReplacement";

const Services = () => {
    return (
        <div className="custom-container mt-40 mb-10">
            <div className="text-center flex flex-col items-center justify-between">
                <h1>Services that we provide.</h1>
                <p  className="max-w-[80ch] mt-2 mb-10">
                    We provide various computer repair services and solutions for our new and regular customers.
                    Feel free to find out more below.
                </p>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <BatteryReplacement />
                <ChipsetReplacement />
                <DataRecovery />
                <StorageReplacement />
                <div className="h-[415px] rounded-2xl bg-blue-500 col-span-12 md:col-span-6 lg:col-span-4"></div>
                <div className="h-[415px] rounded-2xl bg-fuchsia-500 col-span-12 md:col-span-6 lg:col-span-4"></div>
                <div className="h-[415px] rounded-2xl bg-cyan-500 col-span-12 md:col-span-12 lg:col-span-4"></div>
            </div>
        </div>
    );
};

export default Services;
