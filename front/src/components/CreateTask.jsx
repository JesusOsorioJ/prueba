import { createTask, updateTask } from "../api/task";

function CreateTask({ form, setForm, setSend, setData }) {

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSend(true);

    try {
      const res = form.id ? await updateTask(form.id, form) : await createTask(form);
      if (res?.data && Array.isArray(res.data)) {
        setData(res.data);
      }
      setForm({ title: "", description: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSend(false);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex flex-col gap-2 items-center bg-gray-800 w-full p-5 rounded-lg">
      <p className="text-[20px]">{form.id ? `Update task: ${form.id}` : "Create task"}</p>

      <form className="flex w-full gap-2" onSubmit={handleSubmit}>
        <input
          required
          className="w-full p-3 bg-gray-900 rounded-lg"
          placeholder="title"
          name="title"
          onChange={handleChange}
          value={form.title}
        />
        <textarea
          required
          className="w-full p-3 bg-gray-900 rounded-lg"
          placeholder="description"
          name="description"
          onChange={handleChange}
          value={form.description}
        />
        <button className="px-5 bg-gray-900 text-[22px] rounded-lg">Send</button>
      </form>
    </div>
  );
}

export default CreateTask;