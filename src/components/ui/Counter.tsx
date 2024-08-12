import { Button } from "./button";
import { decrement, increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Counter = () => {
    const { count } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    return (
        <div className="flex items-center justify-center">
            <div className="mt-40 border border-purple-500 p-10 rounded-lg">
                <h1 className="text-center text-white">{count}</h1>
                <div className="flex gap-5 mt-5">
                    <Button variant="secondary" onClick={() => dispatch(decrement())}>Decrement</Button>
                    <Button variant="secondary" onClick={() => dispatch(increment())}>Increment</Button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
