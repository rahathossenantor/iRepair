import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { addTodo, TTodo } from "@/redux/features/todoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Todo from "./Todo";

const initialTodo: TTodo = {
    id: "",
    title: "",
    description: "",
    isCompleted: false
};

const Todos = () => {
    const [priority, setPriority] = useState("high");
    const [todoData, setTodoData] = useState(initialTodo);
    const { todos } = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();

    // const handleAddValue = (e) => setTodoData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const id = Math.random().toString(36).substring(2);
        setTodoData((prevState) => ({ ...prevState, id }));
        dispatch(addTodo(todoData));
    };

    return (
        <div className="my-10 p-10 border rounded-lg">
            <div className="flex justify-between">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Add todo</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add your todo</DialogTitle>
                            <DialogDescription>
                                Add your todo that you want to do
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="task" className="text-right">
                                        Task
                                    </Label>
                                    <Input
                                        onBlur={(e) => setTodoData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))}
                                        id="task"
                                        name="title"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="description" className="text-right">
                                        Description
                                    </Label>
                                    <Input
                                        onBlur={(e) => setTodoData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))}
                                        id="description"
                                        name="description"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Add</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
                <h1 className="text-white">My todos</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Filter</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
                            <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="modarate">Modarate</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="mt-5 flex flex-col gap-2">
                {
                    todos.map((todo: TTodo, idx) => <Todo todo={todo} key={idx} />)
                }
            </div>
        </div>
    );
};

export default Todos;
