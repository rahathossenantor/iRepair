import { useQuery } from "@tanstack/react-query";

const ServiceList = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["services"],
        queryFn: () => {
            return fetch("http://localhost:5000/api/v1/services").then((res) => res.json())
        }
    });
    console.log({ isLoading, data });

    return (
        <div>
            <h1>Service List</h1>
        </div>
    );
};

export default ServiceList;
