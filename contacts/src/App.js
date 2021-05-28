import "./App.css";
/* import data from "./data.json"; */
import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import ContactCards from "./components/ContactCards";
import AddContact from "./components/AddContact";
import Search from "./components/Search";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Hadise ",
      last: "Shaker",
      email: "hadiseshaker@yahoo.com",
      phone: "09358997243",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    },
    {
      id: 2,
      name: "Sahar ",
      last: "Shaker",
      email: "Saharshaker@yahoo.com",
      phone: "09197090792",
      picture:
        "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
    },
    {
      id: 3,
      name: "Salehe ",
      last: "Saeedi",
      email: "SaleheSaeedi@yahoo.com",
      phone: "09127044890",
      picture:
        "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
    },
    {
      id: 4,
      name: "Ebrahim ",
      last: "Shaker",
      email: "Ebrahimshaker@yahoo.com",
      phone: "09193351990",
      picture:
        "https://besthqwallpapers.com/Uploads/5-12-2020/148667/thumb2-mount-fuji-4k-two-swans-autumn-stratovolcano.jpg",
    },
  ]);
  const handleDelete = (taskId) => {
    console.log(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const addTask = (task) => {
    let id = Math.floor(Math.random() * 100) + 1;
    let newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  const [showAddTask, setshowAddTask] = useState(false);
  /* const url = "https://randomuser.me/api";
  const { isLoading, data, error } = useFetch(url + "?results=200");
  data && console.log(data);
  const [contactList, setContactList] = useState(null);
  const [filterQuery, setFilterQuery] = useState(null);

  useEffect(() => {
    if (filterQuery) {
      ///////////
    } else {
      setContactList(data?.results);
    }
  }, [data, filterQuery]);
 */
  return (
    <div className="App">
      <section>
        <form>
          {/*           <input
            placeholder="type here to filter"
            type="text"
            className="search"
          /> */}
          <Search />
        </form>
      </section>
      <section className="section2">
        <Button
          buttonLable="+"
          onClick={() => setshowAddTask(!showAddTask)}
        ></Button>
        {showAddTask && <AddContact action={addTask}></AddContact>}
        <ContactCards
          contactList={tasks}
          /*  onclick={() => setshowAddTask(!showAddTask)} */
          onDelete={handleDelete}
        />
        {/* <Search /> */}
      </section>
    </div>
  );
}

export default App;
