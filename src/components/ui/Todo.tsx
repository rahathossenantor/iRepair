import { removeTodo, toggleCompleted, TTodo } from "@/redux/features/todoSlice";
import { Button } from "./button";
import { useAppDispatch } from "@/redux/hook";

type TTodoProps = {
    todo: TTodo
};

const Todo = ({ todo }: TTodoProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="p-2 rounded-lg border max-h-20 flex justify-between items-center gap-2 text-white">
            <h3 className="text-lg">{todo.title}</h3>
            <p className="text-lg">{todo.description}</p>
            <div>
                {
                    todo.isCompleted ? <p className="text-green-500">Done</p> : <p className="text-red-500">Pending</p>
                }
            </div>
            <div className="border rounded-lg p-2">
                <label htmlFor="completed">
                    Mark as completed {" "}
                    <input onChange={() => dispatch(toggleCompleted(todo.id))} type="checkbox" name="completed" id="completed" />
                </label>
            </div>
            <div className="flex gap-2">
                <Button variant="secondary">Edit</Button>
                <Button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    variant="destructive"
                >Delete</Button>
            </div>
        </div>
    );
};

export default Todo;
