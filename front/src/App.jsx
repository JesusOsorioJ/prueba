import { useEffect, useState } from "react";
import { getAllTask } from "./api/task";
import CreateTask from "./components/CreateTask";
import TableTask from "./components/TableTask";

function App() {
  const [send, setSend] = useState(false);
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ content: "" });

  useEffect(() => {
    allTasks();
  }, []);

  const allTasks = async () => {
    try {
      setSend(true);
      console.log("first")
      const res = await getAllTask();
      if (res?.data && Array.isArray(res.data)) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setSend(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 bg-gray-100 dark:bg-gray-700 h-screen w-full p-10 text">
      <div className="text-black dark:text-white flex flex-col gap-2">
        <CreateTask form={form} setForm={setForm} setData={setData} setSend={setSend} />
        <TableTask data={data} send={send} setSend={setSend} setData={setData} setForm={setForm} />
      </div>
    </div>
  );
}

export default App;
