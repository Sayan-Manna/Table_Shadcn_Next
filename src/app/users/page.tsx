import { User, columns } from "./columns";
import { DataTable } from "../../components/ui/data-table";
import axios from "axios";

async function getUsers(): Promise<User[]> {
    const response = await axios.get(
        "https://6633c307f7d50bbd9b4a95e4.mockapi.io/api/users"
    );
    return response.data;
}

export default async function Page() {
    const data = await getUsers();
    return (
        <section className="h-screen py-24 ">
            <div className="container">
                <h1 className="text-center mb-10 font-bold text-xl">
                    Hello from main users page
                </h1>
                <DataTable columns={columns} data={data} />
            </div>
        </section>
    );
}
