import { format } from "date-fns";
import { deleteTask } from "../api/task";

function TableTask({ data, send, setSend, setData, setForm }){

  const handleDelete = async (id) => {
    if (!id) return;
    const isConfirmed = window.confirm("sure To delete");
    if (!isConfirmed) return;

    setSend(true);
    try {
      const res = await deleteTask(id);
      if (res?.data && Array.isArray(res.data)) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    } finally {
      setSend(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center bg-gray-800 w-full p-5 rounded-lg">
      <p className="text-[20px]">Task table</p>
      <table className="w-full p-3 bg-gray-900 rounded-lg text-center">
        <thead>
          <tr className="uppercase">
            <th>ID</th>
            <th>title</th>
            <th>description</th>
            <th>updatedAt</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.description}</td>
              <td>{d.updatedAt ? format(new Date(d.updatedAt), "MM/dd/yyyy pp") : "N/A"}</td>
              <td className="flex gap-1 justify-center">
                <button onClick={() => handleDelete(d.id)} className="my-1 p-1 bg-gray-600 rounded">
                  delete
                </button>
                <button onClick={() => setForm(d)} className="my-1 p-1 bg-gray-600 rounded">
                  update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {data.length === 0 && !send && <p className="text-center">nothing To Show</p>}

      {send && (
        <div className="flex gap-2 bg-gray-900 p-4 rounded animate-pulse">
          <div className="h-2 w-2 rounded-full bg-white" />
          <div className="h-2 w-2 rounded-full bg-white" />
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
      )}
    </div>
  );
}

export default TableTask;
