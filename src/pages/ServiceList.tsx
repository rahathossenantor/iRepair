import { getServices } from "@/api/services.api";
import { useQuery } from "@tanstack/react-query";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type TService = {
    _id: string;
    id?: string;
    name: string;
    description: string;
    price: string;
};

const ServiceList = () => {
    const { isLoading, isError, error, data: services } = useQuery({
        queryKey: ["services"],
        queryFn: getServices,
        select: (data) => {
            const services = data?.data?.data?.map((service: TService) => {
                return {
                    id: service._id,
                    name: service.name,
                    description: service.description,
                    price: service.price
                };
            });
            return services
        }
    });

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <Table className="border rounded-xl">
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {services.map((service: Partial<TService>) => (
                    <TableRow key={service.id}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell>{service.description}</TableCell>
                        <TableCell>{service.price}</TableCell>
                        <TableCell className="text-right">
                            <Button variant="destructive" className="p-2"><Trash2 /></Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total Services:</TableCell>
                    <TableCell className="text-right">{services.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

export default ServiceList;
