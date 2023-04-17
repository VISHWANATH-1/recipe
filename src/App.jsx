import './App.css';
import React,{useState} from 'react';
import Menu from './component/Menu';
import Categories from './component/Categories';
import items from './component/Data';
import logo from './component/logo.jpeg'

const allCategories = ["all", ...new Set(items.map((item)=>item.category))]
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] =useState(allCategories);
  const filterItems =(category)=>{
    setActiveCategory(category);
    if(category==="all"){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category);
    setMenuItems(newItems);
  }
  return (
    <div className="App">
      <main>
        <section className='menu sections'>
          <div className='title'>
            <img src={logo} className='logo' alt=""/>
            <h2>Menu-List</h2>
            <div className="underline"> </div>
              <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
              <Menu items={menuItems} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
